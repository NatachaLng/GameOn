function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll (".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// Form elements
var GeneralCondition = document.getElementById("GeneralCondition");
var events = document.getElementsByTagName("location");

var radioBtn = function (){
  var events = document.getElementsByTagName("location"), i;
  var checkee = false;
  console.log(events.value);

  }

// Fonction Validate form
function validate(){
  console.log("validate");
  formValid = true;
  if (!GeneralCondition.checked){
    document.getElementById('msgGC').style.display='block'; //display message
    formValid=false; }
    formValid=radioBtn(); 
  console.log("sortie validate"+formValid);
  return formValid;
}

/*var first=document.getElementById("first");
first.addEventListener("keyup", function(event){
if(first.validity.typeMismatch) {
  first.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du prénom.");
} else {
  first.setCustomValidity("");
}
});

var last=document.getElementById("last");
last.addEventListener("keyup", function(event){
if(last.validity.typeMismatch) {
  last.setCustomValidity("Veuillez entrer 2 caractères ou plus pour le champ du nom.");
} else {
  last.setCustomValidity("");
}
});

var email=document.getElementById("email");
email.addEventListener("keyup", function(event){
if(email.validity.typeMismatch) {
  email.setCustomValidity("Vous devez entrer une adresse email valide");
} else {
  email.setCustomValidity("");
}
});

var birthDate=document.getElementById("birthdate");
birthDate.addEventListener("keyup", function(event){
if(birthDate.validity.typeMismatch) {
  birthDate.setCustomValidity("Vous devez entrer votre date de naissance");
} else {
  birthDate.setCustomValidity("");
}
});

var numberOfEvents=document.getElementById("quantity");
numberOfEvents.addEventListener("keyup", function(event){
if(numberOfEvents.validity.typeMismatch) {
  numberOfEvents.setCustomValidity("Vous devez entrer votre date de naissance");
} else {
  numberOfEvents.setCustomValidity("");
}
});*/

