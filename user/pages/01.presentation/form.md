---
title: Presentation
template: contact
form: 
  name: contact-form
  fields:
    - name: prenom
      label: Prénom
      type: text
      validate:
        required: true
    - name: nom
      label: Nom
      type: text
      validate:
        required: true
    - name: objet
      label: Objet
      type: text
      validate:
        required: true
    - name: email
      label: Email
      type: email
      validate:
        required: true
    - name: message
      label: Message
      type: textarea
      validate:
        required: true
    - name: agree_to_policies
      type: checkbox
      label: Je reconnais avoir lu la politique de confidentialité
      validate:
        required: true
  buttons:
    - type: submit
      value: Et hop, envoyez !
  process:
    - email:
        from: 'no-reply@adrienpage.com'
        reply_to: '{{ form.value.email }}'
        to: 'tom.brillouet@outlook.fr'
        subject: '[Contact du site]'
        body: "{% include 'forms/data.html.twig' %}"
        debug: true
        process_markdown: true
    - message: "Merci pour votre message !"
    - display: thankyou
---

### Test titre
<br><br>
Monteur vidéo indépendant, blablabla test de texte de présentation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
