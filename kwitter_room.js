//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyBU_VKI37NbOFZfA0M-j5uoqaQlhzc7Xc8",
  authDomain: "kwitter-386b9.firebaseapp.com",
  databaseURL: "https://kwitter-386b9-default-rtdb.firebaseio.com",
  projectId: "kwitter-386b9",
  storageBucket: "kwitter-386b9.appspot.com",
  messagingSenderId: "606680976416",
  appId: "1:606680976416:web:938f60dd4d557f53288045"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("username_of_user").innerHTML = username;

function addUser(){
    roomname = document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
        username: username
    });

  }
