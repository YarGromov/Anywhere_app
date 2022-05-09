const form = document.querySelector("form");

const submitButton = document.querySelector("[type=submit]");

const main = document.querySelector("main");

const footer__logotype = document.querySelector(".footer__logotype");

const content = document.querySelector(".content");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const qs = new URLSearchParams(formData).toString();

  fetch("/form?" + qs);

  main.style.display = "none";

  footer__logotype.style.cssText =
    "position: absolute; top: 550px; right: 75px";

  const success_field = document.createElement("div");

  success_field.innerHTML = "start for free";

  success_field.style.cssText =
    "color: #9aa5b5; margin-top: 35px; margin-left: 57px; font-size: 17px; opacity: 0.6; text-transform: uppercase;";

  content.append(success_field);
});
