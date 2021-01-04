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
const modalBtn = document.querySelector(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

//queryselectorAll radio btn if click then don't display otherwise display

// launch modal event
modalBtn.addEventListener("click", launchModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}


// Form elements
let firstName = document.getElementById("first");
let msgFirst = document.getElementById("msgFirst");
let msgLast = document.getElementById("msgLast");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let birthDate = document.getElementById("birthdate");
let GeneralCondition = document.getElementById("GeneralCondition"); 

//validate first name
function validateFirstName(){
  if ((firstName.value.length < 2) || (!firstName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
    msgFirst.style.display = "block";
  return false;
    }
    msgFirst.style.display = "none";
  return true;
}

//validate last name
function validateLastName(){
  if ((lastName.value.length < 2) || (!lastName.value.match(/^([a-zA-Z]+)$/))){ //double check from HTML
    msgLast.style.display = "block";
  return false;
    }
    msgLast.style.display = "none";
  return true;
}

//validation email 
function validateEmail(){
  if (!email.value.match(mailformat)){ //double check from HTML
  return false;
    }
  return true;
}

//validation birthdate (additional check, format is validated by HTML)
let currentYear = 2020;


function testAge(){
  let birthdate=document.getElementById("birthdate");
  let input = birthdate.value;
  let dateEntered = new Date(input);
  let birthYear = dateEntered.getFullYear();

  return ( currentYear - birthYear);
}

 function validateUnderAge(){ //check if the participant is under Age
  if (testAge()<18) {
    return false;
  }
  return true;
  }
  
  function validateBirthDate(){ //check if the date is valid
  if (testAge()>120) {
    return false;
  }
  return true;
  }

//validation 1 location checkbox is checked

function radioBtn(){
  var events = document.querySelectorAll(".location");
  var nbChecked = 0;
  console.log(events, events.value);
  for (var i = 0; i < events.length; i++) {
    if (events[i].checked) {
        nbChecked++; //add +1 if 1 box is checked
      }
    console.log(nbChecked.value)}
    if (nbChecked==0){ //if no box has been checked
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
    formValid=false; 
  }
  if (radioBtn()==false){ //if no radio btn has been checked
    document.getElementById('msgCity').style.display='block'; //display error message
  }
  else {document.getElementById('msgCity').style.display='none'; //hide error message
  }
  if (!validateUnderAge()){
    document.getElementById('msgUnderAge').style.display="block"; //display error message
  }
  else {
    document.getElementById('msgUnderAge').style.display="none"; //hide error message
  }
  if (!validateBirthDate()){
    document.getElementById('msgBirthDate').style.display='block'; //display error message
  }
  else {
    document.getElementById('msgBirthDate').style.display="none"; //hide error message
  }
  formValid=(formValid && validateFirstName());
  console.log(formValid + "firstName");
  formValid=(formValid && validateLastName());
  console.log(formValid+ "lasttName");
  formValid=(formValid && validateEmail()); 
  console.log(formValid+ "email");
  formValid=(formValid && validateUnderAge());
  console.log(formValid + "underAge");
  formValid=(formValid && validateBirthDate()); 
  console.log(formValid + "overAge");
  formValid=(formValid && radioBtn());  //form is valid if all verifications are valid (=== true)
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






