document.getElementById("login-submit").addEventListener("click", function () {
  const emailField = document.getElementById("user-email");
  const userEmail = emailField.value;
  //   console.log(userEmail);
  const passwordField = document.getElementById("user-password");
  const userPassword = passwordField.value;

  if (userEmail == "rupok@bap.com" && userPassword == "secret") {
    //NOTE: Redirect to another page....
    window.location.href = "banking.html";
  } else {
    //NOTE: will show a alert message
    alert("Invalid user");
  }
});
