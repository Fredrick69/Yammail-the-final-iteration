
var firebaseConfig = {
    apiKey: "AIzaSyBWLEiW1XZEmA7qBpyOZjKXd2eob_cjrE4",
    authDomain: "yammail-6b45b.firebaseapp.com",
    databaseURL: "https://yammail-6b45b-default-rtdb.firebaseio.com",
    projectId: "yammail-6b45b",
    storageBucket: "yammail-6b45b.appspot.com",
    messagingSenderId: "480270999635",
    appId: "1:480270999635:web:9596d88b29347c0d2026a6"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name;

function addRoom()
{
    room_name = document.getElementById("room_name").value;


    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);


   // window.location = "kwitter_page.html";
};

function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;

    Room_names = childKey;

    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id) '>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
}); }); }
getData();

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "Yammail_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
        window.location = "Yammail.html";
}