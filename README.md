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
