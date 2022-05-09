const form = document.querySelector("form");

// form.addEventListener("submit", async (event) => {
//   event.preventDefault();

//   await fetch("/form", {
//     method: "POST",
//     body: new FormData(form),
//   });
// });

const submitButton = document.querySelector("[type=submit]");

submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const qs = new URLSearchParams(formData).toString();

  fetch("/form?" + qs);
});
