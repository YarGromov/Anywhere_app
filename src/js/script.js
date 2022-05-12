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

  const success_field_header = document.createElement("div");

  success_field_header.innerHTML = "start for free";

  success_field_header.classList.add("success_field_header");

  content.append(success_field);

  success_field.append(success_field_header);

  const success_field_result = document.createElement("div");

  success_field_result.innerHTML = "Success!";

  success_field_result.classList.add("success_field_result");

  success_field.append(success_field_result);

  const button_new_form = document.createElement("button");

  button_new_form.classList.add("button_new_form");

  button_new_form.innerHTML = "New Form";

  success_field.append(button_new_form);

  // main.style.display = "";

  button_new_form.addEventListener("click", (event) => {
    event.preventDefault();

    main.style.display = "";
  });
});
