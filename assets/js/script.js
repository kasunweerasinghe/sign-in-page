// function for check username and password and load sign in
function validate() {
  
  // sign in user name pass (kasun, kasun)
  var username = document.getElementById("userName").value;
  var password = document.getElementById("password").value;



  if (username == "kasun" && password == "kasun12") {
    window.location = "welcome.html";
  } else {
    alert("invaild information");
  }
}
