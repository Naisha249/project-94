
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyD9ZMAgTXuhVaNPT11XH27F8MJ3cPQj2ns",
      authDomain: "kwitter-2c45b.firebaseapp.com",
      databaseURL: "https://kwitter-2c45b-default-rtdb.firebaseio.com",
      projectId: "kwitter-2c45b",
      storageBucket: "kwitter-2c45b.appspot.com",
      messagingSenderId: "6474147248",
      appId: "1:6474147248:web:26b55fdd79c417ac7ba275"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>"
       document.getElementById("output").innerHTML += row;

      //Start code

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_ page.html";
}
