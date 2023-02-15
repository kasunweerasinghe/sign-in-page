// function for check username and password and load sign in page
function validate() {
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;

  if (username == "kasun" && password == "kasun") {
    window.location = "signin.html";
  } else {
    alert("invaild information");
  }
}
