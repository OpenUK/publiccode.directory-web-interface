# PCD Web interface

This is the web interface to the [PublicCode.Directory (PCD) project](https://github.com/OpenUK/publiccode.directory).

Like everything else in life it is not complicated but it will take a bit of time and the responsability for the information provided lies only with the maintainers of the respective software.

## How to improve / develop the web interface

In order for this to improve / fix the web interface project, please follow the steps below:

- You need a folder that contains the GRAV CMS. You can download a copy from [here](https://getgrav.org/downloads)
- Clone / fork / download this repository
- Extract the downloaded folder and replace the content of the `user/pages` `user/plugins` `user/themes` folders with the folders from this repostiory

- You will need to have **Docker**, **Noje.js** and a **Code editor** installed on your computer
- `cd` into the newly created folder that contains the full Grav CMS with your changes
- Run the `docker build . -t image-name` command to build the image locally
- Modify the `docker-compose.yaml` file to modify the image to the newly locally build image `image-name`
- Run `docker-compose up -d`
- `cd` into the `user/themes/public-code-directory`
- Run `npm install` to get all dependencies installed locally
- You ca run the following comamnds locally:
  - `npm run serve` or `yarn serve` to start a local live development session
  - `npm run build` or `yarn build` to build the final project
- Once changes are done, you can push back to Github and create a Pull Request

* Credits go to our partners:
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
