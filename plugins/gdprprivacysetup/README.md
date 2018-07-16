# GravGdprPrivacySetupPlugin
Plugin for Grav CMS - It allows to show up customisable privacy consents for visitors (as one of techniques for comply with GDPR), and manage content security policy (not only) meta tag based on visitor settings.

Plugin doesn`t require jQuery. Plugin uses and includes following scripts:  
tingle.js - MIT [https://github.com/robinparisi/tingle](https://github.com/robinparisi/tingle)  
js-cookie - MIT [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie)

Plugin shows up Modal for site visitor.

![screenshot_20180613_122112](https://user-images.githubusercontent.com/10743264/41347647-94d206f2-6f0a-11e8-934c-7feb934a3761.png)

Intention of this plugin is to show popup to visitor with short straightfoward information about site policy and give ability for user to setup his privacy settings. This information should have link to page containing full version of site policy.

#### Features.

* Custom content and inputs (checkboxes),
* modal content is loaded by ajax,
* accept and deny buttons can be customised with content and button classes,
* modal can show up immediately on page load, or can be deferred by given time after user scroll page, so visitor have time to know some content of page, before asking for privacy consents,
* after changing privacy information content, modal will show up for all visitors, even when they accepted previous version,
* You can add button on any page to show up modal for user which want to change privacy consents,
* You can add whitelisted pages, where popup won`t be shown (eg. page with site policy).

#### Privacy management is done by to ways.

**First:** On plugin configuration, You can define consent names like analytics, affiliation, ads etc... and urls or valid [Content Security Policy expression](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP), and choose if some of them should be enabled by default (before user give any consents).

![screenshot_20180613_122219](https://user-images.githubusercontent.com/10743264/41347648-94f54324-6f0a-11e8-80e1-4483f67e1ca4.png)

**Second:** By javascript callbacks, you can run callback after visitor accept some consent:
```js
gdprPrivacySetupPlugin.onAllowed('webfonts', function () {
    WebFont.load({
        google: {
            families: [
                // fonts
            ]
        }
    });
});
```
Consent (`webfonts`) must be defined in plugin configuration (CSP tab). You can add many callbacks for single consent.

#### Privacy Information Content.

After defining consents in CSP tab, You have to add related inputs to privacy information content.  
Eg. if You have consent name `webfonts`, in privacy information add:
```html
<input type="checkbox" name="gdpr_webfonts" id="gdpr_webfonts">
<label for="gdpr_webfonts">Some Web Stored Fonts</label>
```

Important part is `id="gdpr_webfonts"`, `gdpr_` is prefix which can be defined in plugin settings and `webfonts` is consent name related to name defined in plugin settings.

You should also add `checked` and `disabled` attributes for checkboxes that should be enabled by default or visitor shouldn\`t be able to reject some consent (see `site` consent on default configuration). 

P.S. Sorry for my english :)