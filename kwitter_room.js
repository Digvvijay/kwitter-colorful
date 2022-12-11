var firebaseConfig = {
      apiKey: "AIzaSyBdLP34JU2PQXB-ADFL-BsDwUHSvNlDDis",
      authDomain: "kwitter-280db.firebaseapp.com",
      projectId: "kwitter-280db",
      databaseURL:"https://kwitter-280db-default-rtdb.firebaseio.com/",
      storageBucket: "kwitter-280db.appspot.com",
      messagingSenderId: "178454884208",
      appId: "1:178454884208:web:334200276d0d3d921029b5",
      measurementId: "G-206WSTYXTN"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome "+username+" !";
//ADD YOUR FIREBASE LINKS HERE

function addroom()
{
      roomname=document.getElementById("addroom").value;
      firebase.database().ref("/").child("roomname").update({
            purpose : "adding room name"});
      localStorage.setItem("roomname",roomname);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name -" + Room_names);
      row="<div class='roomname' id="+Room_names+" onclick='redirectoroomname(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectoroomname(name)
{
      console.log(name);
      localStorage.setItem("roomname",name);
      window.location="kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
}
