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

  function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="letschat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location="chatpage.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  
}