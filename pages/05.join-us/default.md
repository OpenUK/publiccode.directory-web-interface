---
title: 'Join us'
process:
  twig: true
cache_enable: false

forms:
  custom_form:
    fields:
      -
        name: name
        type: text
        label: Your name
        validate: 
          required: true
      -
        name: email
        label: Your email
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
            - 'upload-file' 
      -
        display: "/join-us/thankyou"
  # create_form:
  #   fields:
  #     -
  #       name: entry_name
  #       id: 'entry_name'
  #       type: text
  #       label: Entry name
  #       validate: 
  #         required: true
  #     -
  #       name: entry_type
  #       label: Entry type
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: entry_descripton
  #       type: textarea
  #       label: Project Description
  #       validate: 
  #         required: true
  #     -
  #       name: link
  #       label: "Project Link"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: entry_lang
  #       type: select
  #       size: short
  #       classes: fancy
  #       label: Project Language
  #       validate: 
  #         required: true
  #       options:
  #         en-GB: British English
  #         en-US: US English
  #         en-CA: Canadian English
  #         en-AU	: Australian English
  #         fr-BE	: Belgian French
  #         fr-CH: Swiss French
  #         fr-FR: French
  #         fr-CA: Canadian French
  #         de-AT	: Austrian German
  #         de-DE: German
  #         de-CH: Swiss German
  #         it-CH: Swiss Italian
  #         it-IT	: Italian
  #         pt-PT: Portuguese
  #         pt-BR: Brazilian Portuguese
  #         es-ES: Spanish
  #         es-MX: Mexican Spanish
  #         es-AR: Argentitine Spanish
  #         es-CO: Colombian Spanish
  #         es-CL: Chiliean Spanish
  #         bg-BG:  Bulgarian
  #         hr-HR: Croatian
  #         cs-CS: Czech
  #         da-DA: Danish
  #         nl-NL: Dutch
  #         et-ET: Estonian
  #         fi-FI: Finish
  #         el-EL: Greek
  #         hu-HU: Hungarian
  #         ga-GA: Irish
  #         lv-LV: Latvian
  #         lt-LT: Lithuanian	
  #         mt-MT: Maltese
  #         pl-PL: Polish
  #         ro-RO: Romanian
  #         sk-SK: Slovak
  #         sl-SL: Slovenian
  #         sv-SV: Swedish
  #     -
  #       name: entry_origin_country
  #       label: "Project Origin Country"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: entry_sector
  #       label: "Project Entry Sector"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: entry_category
  #       label: "Project Category"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: entry_license
  #       label: "Project Licence"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: developer_name
  #       label: "Developer Name"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: developer_category
  #       label: "Developer Category"
  #       help: 'One or many categories separated by a comma'
  #       type: commalist
  #       validate:
  #         required: true
  #     -
  #       name: developer_logo_url
  #       label: "Developer Logo Link"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: developer_url
  #       label: "Developer URL"
  #       type: text
  #       validate:
  #         required: true
  #     -
  #       name: developer_geolocation
  #       label: "Developer Localization"
  #       help: 'Latitude and Longitude separated by comma'
  #       type: commalist
  #       validate:
  #         required: true
  #     -
  #       name: entry_maintainers
  #       label: "Maintainers "
  #       type: text
  #       validate:
  #         required: true

  #   buttons:
  #     - 
  #       type: submit
  #       value: Submit
  #   process:
  #     -
  #       email:
  #         to: 'database@publiccode.directory'
  #         body: '{% include "forms/data.html.twig" %}'
  #     -
  #       display: "/join-us/thankyou"
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

<!-- Create your own file entry by filling the form beelow:

{% include "forms/form.html.twig" with {form: forms( 'create_form' ) } %} -->

or simply get in touch with [OpenUK](https://openuk.uk) and share your thoughts
