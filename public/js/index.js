const submitForm = document.getElementById("login-form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  sessionStorage.setItem(
    "username",
    submitForm.querySelector("#username-input").value
  );
  window.location = "/chat.html";
});
