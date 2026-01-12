// a function to collect data from the contact form
function contactFormCollector(event) {

  // prevent the default behavior of the browser
  // to reload the page on sending a form
  event.preventDefault();

  let formContent = {}; // new Object
  for (let { type, name, value, checked } of document.forms.contactForm) {
    // if checkbox used if checked true/false as value
    if (type === 'checkbox') {
      formContent[name] = checked;
    }
    // if radio button only use value from the checked b
    // buttton in the group
    else if (type === 'radio') {
      if (checked) {
        formContent[name] = value;
      }
    }
    // if no name (our submit button has no name)
    // don't do anything
    else if (!name) {
      continue;
    }
    // add a property using the element name
    // the formContent with the element value
    else {
      formContent[name] = value;
    }
  }
  alert(JSON.stringify(formContent, null, 2));

  // next step - how do contact as REST-api
  // from JS (and how do i get my backend to run)
}

// grab the contact form using document.querySelector
// and add our collect function from above
// on a submit event listener
document
  .querySelector('form[name="contactForm"]')
  .addEventListener('submit', contactFormCollector);
