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

//queryselectorAll radio btn if click then don't display otherwise display

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
let firstName = document.getElementById("first"); 
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
let birthDate = document.getElementById("birthdate");
let GeneralCondition = document.getElementById("GeneralCondition"); 

//validate first name
function validateFirstName(){
  if (firstName.value.length < 2){
  return false;
    }
  return true;
}

//validate last name
function validateLastName(){
  if (lastName.value.length < 2){
  return false;
    }
  return true;
}

//validation email 
function validateEmail(){
  if (!email.value.match(mailformat)){
  return false;
    }
  return true;
}

//validation birthdate
let currentYear = 2020;


function testAge(){
  let birthdate=document.getElementById("birthdate");
  let input = birthdate.value;
  let dateEntered = new Date(input);
  let birthYear = dateEntered.getFullYear();

  return ( currentYear - birthYear);
}

 function validateUnderAge(){
  if (testAge()<18) {
    return false;
  }
  return true;
  }
  
  function validateBirthDate(){
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
    formValid=false; 
  }
  if (radioBtn()==false){ //if no radio btn has been checked
    document.getElementById('msgCity').style.display='block'; //display error message
  }
  if (!validateUnderAge()){
    alert('Vous devez être majeur pour participer');
  }
  if (!validateBirthDate()){
    document.getElementById('msgBirthDate').style.display='block';
  }
  //formValid=validateFirstName();
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
  formValid=(formValid && radioBtn());  //form is valid if radioBtn has been checked (same value == true)
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






