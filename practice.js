
//ADD YOUR FIREBASE LINKS
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

function adduser()
{
username = document.getElementById("username").value;
firebase.database().ref("/").child("username").update({
    purpose : "adding username"});
}