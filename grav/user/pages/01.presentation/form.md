---
title: Presentation
template: contact
form:
    name: contact-form
    fields:
        - name: first-name
          type: text
          validate:
            required: true
        - name: last-name
          type: text
          validate:
            required: true
        - name: sujet
          type: text
          validate:
            required: true
        - name: email
          type: email
          validate:
            required: true
        - name: message
          type: textarea
          validate:
            required: true
        - name: agree-to-policies
          type: checkbox
          label: Politique de confidentialité
          validate:
            required: true
    buttons:
        - type: submit
          value: Envoyer
    process:
        - email:
            from: '{{ form.value.email }}'
            to: 'tom.brillouet@outlook.fr'
            subject: '[Contact du site]'
            body: "{% include 'forms/data.html.twig' %}"
        - message: "Merci pour votre message !"
        - display: thankyou
---

### Test titre
<br><br>
Monteur vidéo indépendant, blablabla test de texte de présentation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.