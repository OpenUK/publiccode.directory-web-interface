# This is a small website desinged to unite the Open Source Software developed and used within any and all public and govermental agencies

It works on a base that developers and mainteners will have an interest in getting their work out and about, thus improving the end line, streamlining the experiences among various public services and improve daily lives of millions around the world.

## How to become a part of this

Like everything else in life it is not complicated but it will take a bit of time and the responsability for the information provided lies only with the maintainers of the respective software.

Here is how to get your software entered into this project.

- Get the [Entry-yaml file](https://github.com/OpenUK/publiccode.directory/blob/master/entry-files/entry.yaml)
- Add this file to the repository you want to enter into the Public Code Directory
- Fill in the file in a Yaml structure (most fields take strings as values, some take arrays, the example covers all the possible fields)
- On an issue on this repository or create a PR for the [Database Index](https://github.com/OpenUK/publiccode.directory/blob/master/database/database.index.yaml) with the Github link to your software repository
- Done

The website will automatically pick up all the changes and refresh the lists on each page reload.

## How to improve / develop this further

In order for this to improve / fix this project, the following steps must apply:

- Make sure that you have **Node.js** and or **Yarn** installed on your computer
- Clone / fork this repository
- Create a Github Personal Token and use it instead of the `let token = process.env.VUE_APP_GITHUB_TOKEN;` inside `src/store.js` file or create a `.env` file and add the token to `VUE_APP_GITHUB_TOKEN= your new token` variable that will be automagically picked up by the application.
- `cd` into the newly downloaded folder
- You ca run the following comamnds locally:
  - `npm run serve` or `yarn serve` to start a local live development session
  - `npm run build` or `yarn build` to build the final project
- Credits go to our partners:
  - [OpenUK](https://openuk.uk) for supporting this project
  - [FSFE](https://fsfe.org) for supporting this project
  - [Public Code Europe](https://publiccode.eu/) for helping out with the discovery and localization of the open source software
  - [Vue.js](https://vuejs.org/) and its creators for the simplicity and flexibility of their tools
  - [Vue.js CLI](https://cli.vuejs.org/) for simplifying the creation of such websites / SPA / PWA

# ![](https://avatars1.githubusercontent.com/u/8237355?v=2&s=50) Grav

[![SensioLabsInsight](https://insight.sensiolabs.com/projects/cfd20465-d0f8-4a0a-8444-467f5b5f16ad/mini.png)](https://insight.sensiolabs.com/projects/cfd20465-d0f8-4a0a-8444-467f5b5f16ad) [![Slack](https://grav-chat.now.sh/badge.svg)](https://chat.getgrav.org) [![Build Status](https://travis-ci.org/getgrav/grav.svg?branch=develop)](https://travis-ci.org/getgrav/grav) [![OpenCollective](https://opencollective.com/grav/backers/badge.svg)](#backers) [![OpenCollective](https://opencollective.com/grav/sponsors/badge.svg)](#sponsors)

Grav is a **Fast**, **Simple**, and **Flexible**, file-based Web-platform. There is **Zero** installation required. Just extract the ZIP archive, and you are already up and running. It follows similar principles to other flat-file CMS platforms, but has a different design philosophy than most. Grav comes with a powerful **Package Management System** to allow for simple installation and upgrading of plugins and themes, as well as simple updating of Grav itself.

The underlying architecture of Grav is designed to use well-established and _best-in-class_ technologies to ensure that Grav is simple to use and easy to extend. Some of these key technologies include:

- [Twig Templating](http://twig.sensiolabs.org/): for powerful control of the user interface
- [Markdown](http://en.wikipedia.org/wiki/Markdown): for easy content creation
- [YAML](http://yaml.org): for simple configuration
- [Parsedown](http://parsedown.org/): for fast Markdown and Markdown Extra support
- [Doctrine Cache](http://doctrine-orm.readthedocs.io/projects/doctrine-orm/en/latest/reference/caching.html): layer for performance
- [Pimple Dependency Injection Container](http://pimple.sensiolabs.org/): for extensibility and maintainability
- [Symfony Event Dispatcher](http://symfony.com/doc/current/components/event_dispatcher/introduction.html): for plugin event handling
- [Symfony Console](http://symfony.com/doc/current/components/console/introduction.html): for CLI interface
- [Gregwar Image Library](https://github.com/Gregwar/Image): for dynamic image manipulation

# Requirements

- PHP 5.5.9 or higher. Check the [required modules list](https://learn.getgrav.org/basics/requirements#php-requirements)
- Check the [Apache](https://learn.getgrav.org/basics/requirements#apache-requirements) or [IIS](https://learn.getgrav.org/basics/requirements#iis-requirements) requirements