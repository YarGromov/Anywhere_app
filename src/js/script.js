const form = document.querySelector("form");

const submitButton = document.querySelector("[type=submit]");



submitButton.addEventListener("click", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const qs = new URLSearchParams(formData).toString();

  fetch("/form?" + qs);



  
});
