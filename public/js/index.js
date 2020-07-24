const submitForm = document.getElementById("login-form");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = submitForm.querySelector("#username-input").value;
  const password = submitForm.querySelector("#password-input").value;
  sessionStorage.setItem("username", username);

  await fetch({
    method: "POST",
    url: "/api/users/login",
    body: {
      username,
      password,
    },
  });
  window.location = "/chat.html";
});
