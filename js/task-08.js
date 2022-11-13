const loginFormEl = document.querySelector(".login-form");

const loginForm = {};

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("All fields must be filled!");
  } else {
    loginForm.email = email.value;
    loginForm.password = password.value;
    console.log(loginForm);
    loginFormEl.reset();
  }
});
