const form = document.querySelector("form");
const submitButton = document.querySelector("[type=submit]");
const main = document.querySelector(".main");
const footerLogotype = document.querySelector(".footer__logotype");
const content = document.querySelector(".content");
const container = document.querySelector(".container");
const successField = document.querySelector(".success_field");
const buttonNewForm = document.querySelector(".button_new_form");
const radioButton = document.querySelector('input[name="question"]:checked');

successField.style.display = "none";

form.addEventListener("submit", (e) => e.preventDefault());

submitButton.addEventListener("click", async () => {
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

  document.querySelector('[name="name"]').value = "";
  document.querySelector('[name="surname"]').value = "";
  document.querySelector('[name="email"]').value = "";
  document.querySelector('[name="password"]').value = "";
  document.querySelector('input[name="question"]:checked').checked = false;
});
