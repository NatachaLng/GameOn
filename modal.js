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
const closeBtn = document.querySelectorAll(".close");


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
var GeneralCondition = document.getElementById("GeneralCondition"); // define general conditions

//validation 1 location checkbox is checked

var radioBtn = function (){
  var events = document.querySelectorAll(".location");
  var nbChecked = 0;
  console.log(events, events.value);
  for (var i = 0; i < events.length; i++) {
    if (events[i].checked) {
        nbChecked++; //add +1 if 1 box is checked
      }
    console.log(nbChecked.value)}
    if (nbChecked==0){ //if no box has been checked
      document.getElementById('msgCity').style.display='block'; // make the error message appear
      return false;
        }
    return true;
  }



// Fonction Validate form
function validate(){
  console.log("validate");
  formValid = true;
  if (!GeneralCondition.checked){//if general conditions hasn't been checked
    document.getElementById('msgGC').style.display='block'; //display message
    formValid=false; }
  if (radioBtn==false){ //if no radio btn has been checked
    document.getElementById('msgCity').style.display='block'; //display error message
  }
    formValid=radioBtn();  //form is valid if radioBtn has been checked (same value == true)
  console.log("sortie validate"+formValid);
  return formValid; // return true as formValid=true
}

//display confirmation
let formSent = document.querySelector(".form__sent"); //validation message

if(window.location.href.indexOf("?") > 1){ //if the url contain a ? (because of the get method of the datas in the form)
  formSent.style.display = "block"; //then we display the validation message
  }
else{
  formSent.style.display="none"; //otherwise we don't 
}






