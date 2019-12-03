---
title: 'Join us'
process:
    markdown: true
    twig: true
cache_enable: false
form:
    inline_errors: true
    keep_alive: true
    name: custom-form
    fields:
        -
            name: name
            type: text
            label: 'Your name'
            validate:
                required: true
        -
            name: email
            label: 'Your email'
            type: email
            validate:
                required: true
        -
            name: upload-file
            label: 'Add a file'
            type: file
            multiple: false
            limit: 1
            destination: user/data/files
            accept:
                - application/json
                - .json
                - .yaml
                - .yml
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            email:
                body: '{% include "forms/data.html.twig" %}'
                attachments:
                    - upload-file
        -
            save:
                fileprefix: uploaded-files-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your email'
        -
            display: thankyou
---

## There are few ways to get involved: {.is-size-3}

#### Technical Git users: {.is-size-4}

- Fork the [database project](https://github.com/OpenUK/publiccode.directory) on Github
- Create a database metadata [entry file](https://github.com/OpenUK/publiccode.directory/tree/master/entry-files) - we call these *entry.json*, you may choose your own name
- Add your entry json file to our repo (via PR), your own repository or anywhere that can be accessed via the net
- Add a link to the [database.index.json](https://github.com/OpenUK/publiccode.directory/blob/master/database/database.index.json) file pointing to your entry

- Make a pull request with the updated database.index.json file
- When accepted, you should see your entry in the directory

#### Non-technical git users {.is-size-4}

Please raise an issue on the database [repository](https://github.com/OpenUK/publiccode.directory/issues) with your comments or inclusions and we will check and update the files.

#### Non-technical users {.is-size-4}

Get in touch with [OpenUK](https://openuk.uk) and share your thoughts

or upload your entry file below and we will review and add for you.
