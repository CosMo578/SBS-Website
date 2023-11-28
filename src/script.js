/** @format */
// import { serviceArr, reviewArr } from "./scripts/data";

// Header toggler
let dropDownToggler = document.getElementById('menu');
let list = document.getElementById('list');

function showMenu() {
  if (list.className.includes('show')) {
    list.classList.remove('show');
    dropDownToggler.innerHTML = '<ion-icon name="menu"></ion-icon>';
  } else {
    list.classList.add('show');
    dropDownToggler.innerHTML = '<ion-icon name="close"></ion-icon>';
  }
}

// Close the dropdown when a link is clicked
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'A') {
    list.classList.remove('show');
    dropDownToggler.innerHTML = '<ion-icon name="menu"></ion-icon>';
  }
});

dropDownToggler.addEventListener('click', showMenu);

// Handling Emails
const recipient = 'raphaelakpor00@gmail.com';
const emailNameInput = document.getElementById('emailName');
const emailSubjectInput = document.getElementById('emailSubject');
const emailDateInput = document.getElementById('emailDate');
const emailContentTextarea = document.getElementById('emailContent');
const sendEmailButton = document.getElementById('sendEmail');

function sendMail() {
  e.preventDefault();
  const name = emailNameInput.value;
  const date = emailDateInput.value;
  const subject = emailSubjectInput.value;
  const content = emailContentTextarea.value;

  // Create a "mailto" URL with the subject and body parameters
  const mailtoURL = `mailto:${encodeURIComponent(recipient)}
  ?subject=${encodeURIComponent(`${subject} on ${date}`)}
  &body=${encodeURIComponent(`From ${name} ${content}`)}`;

  // Open the user's default email application with the "mailto" URL
  window.location.href = mailtoURL;
  let form = document.getElementById('myForm');
  form.reset();
}
sendEmailButton.addEventListener('click', sendMail);

const srvGrid = document.querySelector('.services-parent');
const serviceTemplate = document.getElementById('srv-temp');

for (let i = 0; i < 8; i++) {
  srvGrid.append(serviceTemplate.content.cloneNode(true));
}

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show-el');
    }
    // else {
    //   entry.target.classList.remove('show-el');
    // }
  });
});

const hiddenElements = document.querySelectorAll('.hidden-el');
hiddenElements.forEach((el) => observer.observe(el));
// srvGrid.innerHTML = ``;
// const div = serviceTemplate.content.cloneNode(true);
// div.querySelector('')
