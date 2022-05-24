const form = document.querySelector("form");
const main = document.querySelector(".main");
const footerLogotype = document.querySelector(".footer__logotype");
const successField = document.querySelector(".success_field");
const buttonNewForm = document.querySelector(".button_new_form");
const inputs = document.querySelectorAll('input');

successField.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(form);
  const qs = new URLSearchParams(formData).toString();
  fetch("/form?" + qs);

  main.style.display = "none";
  successField.style.display = "";

  footerLogotype.classList.add("footer__logotype_success");
});

buttonNewForm.addEventListener("click", () => {
  successField.style.display = "none";
  main.style.display = "block";

  footerLogotype.classList.remove("footer__logotype_success");

  [...inputs].map(input => input.value = '');

  document.querySelector('input[name="question"]:checked').checked = false;
});
