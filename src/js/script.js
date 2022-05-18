const form = document.querySelector("form");
const submitButton = document.querySelector("[type=submit]");
const main = document.querySelector(".main");
const footerLogotype = document.querySelector(".footer__logotype");
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const success_field = document.querySelector('.success_field');
const button_new_form = document.querySelector('.button_new_form');

success_field.style.display = 'none';

form.addEventListener('submit', (e) => e.preventDefault())

submitButton.addEventListener("click", async () => {


  const formData = new FormData(form);
  const qs = new URLSearchParams(formData).toString();

  fetch("/form?" + qs);

  main.style.display = "none";

  success_field.style.display = '';

  footerLogotype.classList.add('footer__logotype_success');

});

button_new_form.addEventListener("click", () => {
  success_field.style.display = "none";

  main.style.display = "block";

  footerLogotype.classList.remove('footer__logotype_success');

  document.querySelector('[name="name"]').value = '';
  document.querySelector('[name="surname"]').value = '';
  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="password"]').value = '';
  // document.querySelector('[type="radio"]').value = '';

});
