---
title: 'Join us'
process:
    markdown: true
    twig: true
cache_enable: false
forms:
    custom_form:
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
                destination: user/data/files
                accept:
                    - application/json
                    - application/yaml
                    - application/yml
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
                display: /join-us/thankyou
---

## There are few ways to join us {.is-size-2}

#### Getting involved {.is-size-4}

##### Technical Git users: {.is-size-5}

- Fork this [project](https://github.com/OpenUK/publiccode.directory)
- Add your entry to the Database.Index file
- Add your metadata file to your repository (entry.json)
- Make a pull request with the updated Databas.Index file
- When accepted, you should see your entry in the directory

##### Non-technical git users {.is-size-5}

Please raise an issue on the main [repository](https://github.com/OpenUK/publiccode.directory/issues) with your comments or inclusions and we will check and update the files.

##### Non-technical users {.is-size-5}

Upload your entry file here
{% include "forms/form.html.twig" with {form: forms( 'custom_form' ) } %}

or simply get in touch with [OpenUK](https://openuk.uk) and share your thoughts
