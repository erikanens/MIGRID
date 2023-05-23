// register.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getDatabase,
  ref,
  set,
  onValue,
  remove,
  push,
} from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4xS32OW_lIvWUeZRKOZhrg4fenueINl0",
  authDomain: "migrid-2e14c.firebaseapp.com",
  databaseURL: "https://migrid-2e14c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "migrid-2e14c",
  storageBucket: "migrid-2e14c.appspot.com",
  messagingSenderId: "238012741951",
  appId: "1:238012741951:web:57f09a0fa56a36b9137b8a"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase();

function writeUserData(object) {
  const db = getDatabase();
  push(ref(db, 'users/'), {
    startTimeId: object.startTimeId,
    endTimeId: object.endTimeId,
    painScaleId: object.painScaleId,
    painAreaId: object.painAreaId,
    symptomId: object.symptomId,
    activityId: object.activityId,
    triggersId: object.triggersId,
    medicineId: object.medicineId
  });
}



// Get the form element
var form = document.getElementById('painForm');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
event.preventDefault(); // Prevent form submission
event.stopPropagation();

// Retrieve form field values
var startTimeId = document.getElementById("startTime").value;
var endTimeId = document.getElementById("endTime").value;
var painScaleId = document.getElementById("painScale").value;
var painAreaId = document.getElementById("painArea").value;
var symptomId = document.getElementById("symptom").value;
var activityId = document.getElementById("activity").value;
var triggersId = document.getElementById("triggers").value;
var medicineId = document.getElementById("medicine").value;

console.log("sent");

writeUserData({startTimeId, endTimeId, painScaleId, painAreaId, symptomId, activityId, triggersId, medicineId});

let a = document.createElement('p');
a.innerText = "Din information har nu skickats!";
form.append(a);
setTimeout(() => {
  a.style.visibility = "hidden";
}, 8000);
})