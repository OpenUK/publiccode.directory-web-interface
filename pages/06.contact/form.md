---
title: 'Contact us'
process:
    markdown: true
    twig: true
cache_enable: false
form:
    name: contact-form
    fields:
        -
            name: name
            label: Name
            placeholder: 'Enter your name'
            autocomplete: 'on'
            type: text
            validate:
                required: true
        -
            name: honeypot
            type: honeypot
        -
            name: email
            label: Email
            placeholder: 'Enter your email address'
            type: email
            autocomplete: 'on'
            validate:
                required: true
        -
            name: message
            label: 'Your Message'
            placeholder: 'Enter your message'
            type: textarea
            validate:
                required: true
    buttons:
        -
            type: submit
            value: Submit
    process:
        -
            email:
                from: '{{ config.plugins.email.from }}'
                to:
                    - '{{ config.plugins.email.from }}'
                    - '{{ form.value.email }}'
                subject: '[Feedback] {{ form.value.name|e }}'
                body: '{% include ''forms/data.html.twig'' %}'
        -
            save:
                fileprefix: feedback-
                dateformat: Ymd-His-u
                extension: txt
                body: '{% include ''forms/data.txt.twig'' %}'
        -
            message: 'Thank you for your feedback!'
        -
            display: thankyou
---

# This is how you can contact us {.is-size-3}

You can contact one of the partners individually at their own contact address

[OpenUK](https://openuk.uk/contact-us) - [FSFE](https://fsfe.org/contact/contact.en.html) - [Public Code](https://publiccode.eu/contact)