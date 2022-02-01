// Your web app's Firebase configuration
 var firebaseConfig = {
   apiKey: "AIzaSyA0QGKXwfOKOp2EszrbWVEzxAlij9mxqBk",
   authDomain: "cobaled-867a6.firebaseapp.com",
   databaseURL: "https://cobaled-867a6.firebaseio.com",
   projectId: "cobaled-867a6",
   storageBucket: "cobaled-867a6.appspot.com",
   messagingSenderId: "816722335640",
   appId: "1:816722335640:web:594f79bad6801ec2e93ded",
   measurementId: "G-KMBWMVQYZ6"
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
  var database = firebase.database();
  var ledStatus;

  database.ref().on("value", function(snap){
    ledStatus = snap.val().ledStatus;
    if(ledStatus == 1){
      $(".ledStatus").text("lampu menyala");
    } else {
      $(".ledStatus").text("lampu mati");
    }
  });

  $(".ledButton").click(function(){
    var firebaseRef = firebase.database().ref().child("ledStatus");
    if(ledStatus == 1){
      firebaseRef.set(0);
      ledStatus = 0;
    } else {
      firebaseRef.set(1);
      ledStatus = 1;
    }
  });
});
