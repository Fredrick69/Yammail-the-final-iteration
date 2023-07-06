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

//YOUR FIREBASE LINKS
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });


      document.getElementById("msg").value = "";
}







//Im a coding goblin i sit here for 9 hours a day ssfandxbbdxnfszaxafsbnxfbnadfsbnihfsdnbghifaksdeowrudfs38792y3842y8ras9dfhajfh839243824alidjasklfjsaflgkjdlkghjafghdshgfsgffksdjfjfjfjfjfjfjajajajajajajajajjaajaj

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='https://www.wvi.org/sites/default/files/2019-10/sweet%20potatos.jpg'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();


function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) +1;
      console.log(updated_likes);


      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
} 

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "Yammail.html";
  }

/////////////////////////////////////////////////////////////////////// inf funny comment cus yes //////////////////////////////////////////////////////////////////////////////////