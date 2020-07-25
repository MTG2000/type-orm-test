const submitForm = document.getElementById("login-form");

submitForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = submitForm.querySelector("#username-input").value;
  const password = submitForm.querySelector("#password-input").value;
  sessionStorage.setItem("username", username);

  const result = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await result.json();

  localStorage.setItem("user", JSON.stringify(data));

  window.location = "/";
});
