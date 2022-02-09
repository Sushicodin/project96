const firebaseConfig = {
    apiKey: "AIzaSyDtOraHua3uCCA-wYDFunw-8RGD1sUifhY",
    authDomain: "chatroomfirebase-817b0.firebaseapp.com",
    databaseURL: "https://chatroomfirebase-817b0-default-rtdb.firebaseio.com",
    projectId: "chatroomfirebase-817b0",
    storageBucket: "chatroomfirebase-817b0.appspot.com",
    messagingSenderId: "730076600173",
    appId: "1:730076600173:web:c042945df48ff793aa2c64"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var user_name=localStorage.getItem("user_name");
var room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;

      firebase.database().ref(room_name).push({
            message:msg,
            name:user_name,
            like:0
      });
      document.getElementById("msg").value="";}
