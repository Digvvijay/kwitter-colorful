//YOUR FIREBASE LINKS
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
    username=localStorage.getItem("username");
    roomname=localStorage.getItem("roomname");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
            name:username,
            message:msg,
            like:0
      });  
      document.getElementById("msg").value="";  
}
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'> </h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button id='+firebase_message_id+' type='button' class='btn btn-warning' onclick='updatelike(this.id)' value="+like+">";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();
function updatelike(message_id)
{
      console.log("clicked on the button-"+message_id);
      button_id=message_id;
      likes=document.getElementById(button_id).value;
      updatedlikes=Number(likes)+1;
      console.log(updatedlikes);
      firebase.database().ref(roomname).child(message_id).update({
            like:updatedlikes
      });
}

function logout()
{
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
      window.location="index.html";
}