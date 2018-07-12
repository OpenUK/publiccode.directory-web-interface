/*!
 * GravGdprPrivacySetupPlugin
 * https://github.com/krzysztofgal/GravGdprPrivacySetupPlugin
 *
 * Copyright 2018 Krzysztof Gał
 * Released under the MIT license
 */
var gdprPrivacySetupPlugin = (function () {
    var fn = {},
        settings = {},
        privacySettings = {},
        openPopup = 0;

    /**
     * Store callbacks registered by onAllowed function
     * @type {{}}
     */
    var callbacks = {};

    fn.settings = {
        setupPage: '',
        denyConsent: '',
        setupConsent: '',
        inputPrefix: '',
        modalContentId:'',
        cookieName:'',
        privacySettingsButtonClass: '',
        acceptBtnClass: '',
        denyBtnClass: '',
        denyRedirectionTarget: '',
        deferInfoPopup: 0,
        consentExpires: 0,
        tempCookieName: 'noConsent',
        lastConsentVersion: '',
        whitelist: 0,
        userConsent: {}
    };

    fn.init = function(appSettings) {
        //setup settings
        for (var key in fn.settings) {
            if (appSettings.hasOwnProperty(key)) fn.settings[key] = appSettings[key];
        }
        settings = fn.settings;
        privacySettings = settings.userConsent;

        //document ready
        if (document.readyState!='loading') initReal();
        else if (document.addEventListener) document.addEventListener('DOMContentLoaded', initReal);
        else document.attachEvent('onreadystatechange', function(){
            if (document.readyState=='complete') initReal();
        });
    };

    function initReal() {
        if (shouldPopupShow()) {
            openPopup = 1;
        } else if (!pageIsWhitelisted() || !noConsent()) {
            //refresh cookie on visit
            Cookies.set(settings.cookieName, JSON.stringify(privacySettings), { expires: settings.consentExpires });
        }

        if (openPopup === 1) {
            // open popup immediately or defer
            if (settings.deferInfoPopup <= 0 || notGivenAnyConsentAfterVisit()) {
                openPrivacyInfo();
            } else {
                var deferOpenInfo = function() {
                    setTimeout(openPrivacyInfo, settings.deferInfoPopup * 1000);
                    window.removeEventListener('scroll', deferOpenInfo);
                };

                window.addEventListener('scroll', deferOpenInfo);
            }
        }

        executePrivacySetupCallbacks();

        //find privacy setup buttons on page
        var privacyButtons = document.getElementsByClassName(settings.privacySettingsButtonClass);
        for (var i = 0; i < privacyButtons.length; i++) {
            var privBtn = privacyButtons[i];
            privBtn.onclick = function (e) {
                e.preventDefault();
                openPrivacyInfo();
            };
        }
    }

    function shouldPopupShow() {
        if (pageIsWhitelisted()) return false;

        return (
            noConsent() ||
            notGivenAnyConsentAfterVisit() ||
            consentVersionNotMatch()
        );
    }

    function pageIsWhitelisted() {
        return settings.whitelist;
    }

    function noConsent() {
        return !Cookies.get(settings.cookieName);
    }

    function notGivenAnyConsentAfterVisit() {
        return Cookies.get(settings.tempCookieName);
    }

    function consentVersionNotMatch() {
        return settings.lastConsentVersion !== privacySettings.version;
    }

    function openPrivacyInfo() {
        var modalContent = null;

        var modal = new tingle.modal({
            footer: true,
            stickyFooter: false,
            closeMethods: [],
            onOpen: function() {
                var xhr = new XMLHttpRequest();
                xhr.open('GET', settings.setupPage, true);
                xhr.onload = function() {
                    if (xhr.status === 200) {
                        modalContent = document.getElementById(settings.modalContentId);
                        modalContent.innerHTML = xhr.responseText;
                        getVisitorPrivacySettings();

                        modal.checkOverflow();
                    }
                    else {
                        alert('Request failed.  Returned status of ' + xhr.status);
                    }
                };
                xhr.send(null);

                Cookies.set(settings.tempCookieName, 0, { expires: 1 });
            }
        });

        modal.addFooterBtn(settings.denyConsent, settings.denyBtnClass, function() {
            Cookies.remove(settings.cookieName);
            Cookies.remove(settings.tempCookieName);
            //kick out user from page to referer or redirection target
            var isReferrerSameDomain = document.referrer.indexOf(location.protocol + "//" + location.host) === 0;
            if (!isReferrerSameDomain && document.referrer !== '') {
                window.location.href = document.referrer;
            } else {
                window.location.href = settings.denyRedirectionTarget;
            }
        });

        modal.addFooterBtn(settings.setupConsent, settings.acceptBtnClass, function() {
            Cookies.remove(settings.tempCookieName);
            setupVisitorPrivacy();
            modal.close();
        });

        modal.setContent('<div id="'+ settings.modalContentId +'"></div>');

        modal.open();
    }

    /**
     * On information page, select checkboxes as checked according to privacySettings
     */
    function getVisitorPrivacySettings() {
        for (var consent in privacySettings) {
            if (privacySettings.hasOwnProperty(consent)) {
                var checkbox = document.getElementById(settings.inputPrefix + consent);
                if (checkbox !== null && (checkbox || {}).type === 'checkbox' && !checkbox.disabled) {
                    checkbox.checked = (privacySettings[consent] === true);
                }
            }
        }
    }

    /**
     * save privacySettings according to selected checkboxes and plugin config
     * Inputs (consents) that are not in plugin (CSP) configuration won`t be saved
     */
    function setupVisitorPrivacy() {
        try {
            var privacySetup = {
                version: settings.lastConsentVersion
            };
            for (var consent in privacySettings) {
                if (privacySettings.hasOwnProperty(consent)) {
                    var checkbox = document.getElementById(settings.inputPrefix + consent);
                    if (checkbox !== null && (checkbox || {}).type === 'checkbox') {
                        privacySetup[consent] = (checkbox.checked === true);
                    }
                }
            }

            var privacySetupString = JSON.stringify(privacySetup);
            Cookies.set(settings.cookieName, privacySetupString, { expires: settings.consentExpires });

            //is visitor settings have changed, reload page
            if (privacySetupString !== JSON.stringify(privacySettings)) {
                location.reload();
            }
        } catch (e) {
            Cookies.set(settings.cookieName, JSON.stringify(privacySettings), { expires: settings.consentExpires });
        }
    }

    /**
     * Register callback to be executed if corresponding consent is given
     * @param consent
     * @param callback
     */
    fn.onAllowed = function (consent, callback) {
        if (typeof callback === 'function') {
            callbacks[consent] = callbacks[consent] || [];
            callbacks[consent].push(callback);
        }
    };

    /**
     * Execute callbacks registered by onAllowed
     */
    function executePrivacySetupCallbacks() {
        for (var consent in callbacks) {
            if (callbacks.hasOwnProperty(consent) && isAllowed(consent)) {
                for(var i = 0; i < callbacks[consent].length; i++ ) {
                    callbacks[consent][i]();
                }
            }
        }
    }

    /**
     * Check if given consent is granted
     * @param consent
     * @returns {*|boolean}
     */
    function isAllowed(consent) {
        return (privacySettings[consent] && privacySettings[consent] === true);
    }

    return fn;
})();
