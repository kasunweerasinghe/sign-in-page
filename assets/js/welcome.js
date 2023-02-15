// when press sign out redirect index.htl and signout
function signOut() {
  window.location = "index.html";
}

// add new user function
function signUp() {
  // Get username and password input values
  var newUsername = document.getElementById("newUserName").value;
  var newUserPassword = document.getElementById("newUserpassword").value;

  alert("User successfully created!");

  console.log(newUsername);
  console.log(newUserPassword);

  document.getElementById("newUserName").value="";
  document.getElementById("newUserpassword").value="";
}
