/** @format */

let dropDownToggler = document.getElementById('menu');
let list = document.getElementById('list');

dropDownToggler.addEventListener('click', showMenu);

function showMenu() {
  if (list.className.includes('show')) {
    list.classList.remove('show');
  } else {
    list.classList.add('show');
    // dropDownToggler.innerHTML = '<ion-icon name="close"></ion-icon>';
  }
}

// Handlig Emails

const recipient = 'raphaelakpor00@gmail.com';
const emailSubjectInput = document.getElementById('emailSubject');
const emailContentTextarea = document.getElementById('emailContent');
const sendEmailButton = document.getElementById('sendEmail');

sendEmailButton.addEventListener('click', sendMail);

function sendMail() {
  const subject = emailSubjectInput.value;
  const content = emailContentTextarea.value;

  // Create a "mailto" URL with the subject and body parameters
  const mailtoURL = `mailto:${encodeURIComponent(recipient)}
  ?subject=${encodeURIComponent(subject)}
  &body=${encodeURIComponent(content)}`;

  // Open the user's default email application with the "mailto" URL
  window.location.href = mailtoURL;
}

// Intersection Observer
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       entry.target.classList.add('show');
//     } else {
//       entry.target.classList.remove('show');
//     }
//   });
// });

// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));
