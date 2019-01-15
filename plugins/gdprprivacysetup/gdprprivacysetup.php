<?php

/**
 * GravGdprPrivacySetupPlugin
 * https://github.com/krzysztofgal/GravGdprPrivacySetupPlugin
 *
 * Copyright 2018 Krzysztof Gał
 * Released under the MIT license
 */

namespace Grav\Plugin;

use Grav\Common\Page\Page;
use Grav\Common\Page\Pages;
use Grav\Common\Uri;
use Grav\Common\Plugin;

/**
 * Class GdprPrivacySetupPlugin
 * @package Grav\Plugin
 */
class GdprPrivacySetupPlugin extends Plugin
{
    private $current_route;
    private $privacy_info_route;
    private $csp;
    private $cookieName;
    private $userConsent;

    private const STYLE_BOTTOM_BAR = 0;
    private const STYLE_MODAL = 1;

    public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
            'onTwigLoader' => ['onTwigLoader', 0],
        ];
    }

    public function onPluginsInitialized()
    {
        if ($this->isAdmin()) {
            $this->active = false;

            $this->config->set(
                'plugins.gdprprivacysetup.privacySHA1',
                sha1($this->getConf('privacyInfo'))
            );
            $this->saveConfig($this->name);

            return;
        }

        $this->active = $this->getConf('enabled');

        if ($this->active) {
            $this->privacy_info_route = $this->getConf('privacy_page_route');

            //get content security policies setup
            $this->csp = $this->getConf('consentPolicyList');

            //set hashed cookie name from information page, to know if user should accept changed policy
            if (!$this->getConf('privacySHA1')) {
                $this->config->set(
                    'plugins.gdprprivacysetup.privacySHA1',
                    sha1($this->getConf('privacyInfo'))
                );
                $this->saveConfig($this->name);
            }

            $this->cookieName = 'PrivacyConsent';

            //try to get saved user consent
            $this->userConsent = $this->getUserConsent();

            $this->enable([
                'onPagesInitialized' => ['onPagesInitialized', 1000],
                'onTwigSiteVariables' => ['onTwigSiteVariables', 0]
            ]);
        }
    }

    /** Get saved user consent or get default settings
     * @return array|mixed
     */
    private function getUserConsent()
    {
        if (isset($_COOKIE[$this->cookieName])) {
            try {
                $optional = array_column($this->csp, 'optional', 'consent');
                $consents = json_decode($_COOKIE[$this->cookieName], true);

                foreach ($consents as $consent => $value) {
                    if (isset($optional[$consent]) && !$optional[$consent]) {
                        $consents[$consent] = true;
                    }
                }

                return $consents;
            } catch (\Exception $e) {
                return $this->getDefaultConsents();
            }
        } else {
            return $this->getDefaultConsents();
        }
    }

    /**
     * @return array
     */
    private function getDefaultConsents()
    {
        $policies = $this->csp;

        if (is_array($policies)) {
            return array_column($policies, 'default', 'consent');
        }
        return [];
    }

    /**
     * @throws \Exception
     */
    public function onPagesInitialized()
    {
        /** @var Uri $uri */
        $uri = $this->grav['uri'];
        $this->current_route = $uri->path();

        /**
         * @var $pages Pages;
         */
        $pages = $this->grav['pages'];

        $page = $pages->dispatch($this->current_route);

        $base_url = $this->grav['base_url'];

        if (!$page && $base_url.$this->privacy_info_route == $this->current_route) {
            $page = new Page;
            $page->init(new \SplFileInfo(__DIR__ . "/pages/privacy_info.md"));
            $page->slug(basename($this->current_route));
            $pages->addPage($page, $this->current_route);
        }

        if ($page) {
            $page->metadata([
                'gdprCSP' => [
                    'http_equiv' => "Content-Security-Policy",
                    'content' => $this->getCspRules()
                ],
            ]);
        }
    }

    /** Make CSP meta tag content
     * @return string
     */
    private function getCspRules()
    {
        $policy = '';
        foreach ($this->csp as $rule) {
            if ($this->isAllowed($rule['consent']) && !empty($rule['policy'])) {
                $policy .= $rule['policy'] . ' ';
            }
        }

        return trim($policy) . ';';
    }

    /**
     * @param $consent
     * @return bool
     */
    private function isAllowed($consent)
    {
        if (!isset($this->userConsent[$consent])) {
            //fallback for new consents, that are not in cookie
            $this->userConsent[$consent] = isset($this->csp[$consent]) ? $this->csp[$consent] : false;
        }

        return (bool) $this->userConsent[$consent];
    }

    public function onTwigSiteVariables()
    {
        $this->grav['assets']->addJs('plugin://gdprprivacysetup/assets/js/js.cookie.js');

        $use_default_styles = $this->getConf('use_default_styles');

        switch ($this->getConf('style')) {
            case self::STYLE_BOTTOM_BAR:
                if ($use_default_styles) {
                    $this->grav['assets']->addCss('plugin://gdprprivacysetup/assets/css/bottom_bar.css');
                }
                break;
            case self::STYLE_MODAL:
                if ($use_default_styles) {
                    $this->grav['assets']->addCss('plugin://gdprprivacysetup/assets/css/tingle.min.css');
                }
                $this->grav['assets']->addJs('plugin://gdprprivacysetup/assets/js/tingle.min.js');
                break;
        }

        $this->grav['assets']->addJs('plugin://gdprprivacysetup/assets/js/gdprprivacysetup.js');

        $base_url = $this->grav['base_url'];

        $setup = [
            'style' => $this->getConf('style'),
            'privacyPage' => $base_url . $this->privacy_info_route,
            'consentButtonText' => $this->getConf('consentButtonText'),
            'consentButtonClass' => $this->getConf('consentButtonClass'),
            'denyButtonText' => $this->getConf('denyButtonText'),
            'denyButtonClass' =>$this->getConf('denyButtonClass'),
            'privacySettingsBtnClass' => $this->getConf('privacySettingsBtnClass'),
            'inputPrefix' => $this->getConf('inputPrefix'),
            'modalWindow' => $this->getConf('modalWindowId'),
            'denyRedirection' => $this->getConf('denyRedirectionTarget'),
            'deferInfoPopupTime' => $this->getConf('deferInfoPopupTime'),
            'consentExpires' => $this->getConf('consentExpiresTime'),
            'cookieName' => $this->cookieName,
            'lastConsentVersion' => $this->getConf('privacySHA1')
        ];

        $pagesWhitelist = $this->getConf('whitelistPages');

        try {
            $setup['whitelist'] = in_array($this->current_route, $pagesWhitelist);
        } catch (\Exception $e) {
            $setup['whitelist'] = false;
        }

        try {
            $setup['userConsent'] = json_encode($this->userConsent);
        } catch (\Exception $e) {
            $setup['userConsent'] = "{}";
        }

        $renderedJs = $this->grav['twig']->twig->render('init_js.html.twig', ['setup' => $setup]);

        $this->grav['assets']->addInlineJs($renderedJs);
    }

    /**
     * Add the Twig template paths to the Twig loader
     */
    public function onTwigLoader()
    {
        $this->grav['twig']->addPath(__DIR__ . '/templates/partials/gdpr_privacy');
    }

    /** Shorthand for get config
     * @param $field
     * @return mixed
     */
    private function getConf($field)
    {
        $key = 'plugins.' . $this->name . '.' . $field;
        return $this->config->get($key);
    }
}
