function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  // Get registered user from localStorage
  const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

  // Check against registered user
  if (
    registeredUser &&
    username === registeredUser.username &&
    password === registeredUser.password
  ) {
    localStorage.setItem("user", registeredUser.username);
    window.location.href = "products.html";
  }
  // Check against default hardcoded user
  else if (username === "admin" && password === "1234") {
    localStorage.setItem("user", "admin");
    window.location.href = "products.html";
  } 
  else {
    errorMsg.textContent = "Invalid username or password.";
  }
}
