
var email = window.JSON.parse(localStorage.getItem('Email'));
var token = window.JSON.parse(localStorage.getItem('Token'));
      //console.log('Email In Local: ' + email);
      console.log('Token In Local: ' + token);
      document.getElementById("user_email").innerHTML = " " + email;

  if (token != null) {
    document.getElementById("user_div").style.display = "block";
  }else{
    document.getElementById("login_div").style.display = "none";
  }

// ====================== LogIn ============================================

firebase.auth().onAuthStateChanged(function(user) {

  if (user) {
    // User is signed in.

    document.getElementById("user_div").style.display = "block";
    document.getElementById("login_div").style.display = "none";

    var user = firebase.auth().currentUser;

    var email_id = user.email;
    var token = 'JHFkcdi3uo3993893883vnsknbvHFHYsdiobnsibn783O7682939dsibndsibndsimifkfmcdkv855865867oel383873mvewvmeood8387387873vevmadvam';
    document.getElementById("user_para").innerHTML = " " + email_id;
    localStorage.setItem('Email', JSON.stringify(email_id));
    localStorage.setItem('Token', JSON.stringify(token));


    if(user != null){

      //window.location = "dashboard.html";
      console.log('LogIn Ok ');


    }

  } else {
    // No user is signed in.
    document.getElementById("user_div").style.display = "none";
    document.getElementById("login_div").style.display = "block";
    //window.location = "index.html";

  }
});

function login(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  var logout = confirm("Confirm LogOut : ");
  if (logout == true) {
    firebase.auth().signOut();
    location.replace("index.html");
    localStorage.removeItem('Token','Email');
  }else {

  }
}
