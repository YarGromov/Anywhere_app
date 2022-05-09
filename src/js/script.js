const form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  let response = await fetch("/article/formdata/post/user", {
    method: "POST",
    body: new FormData(form),
  });
});
