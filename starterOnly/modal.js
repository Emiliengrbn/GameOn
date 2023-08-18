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
closeBtn.forEach((close) => close.addEventListener("click", quitModal));

// close modal form
function quitModal() {
  modalbg.style.display = "none";
}

// Verification of the form

let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let birthdate = document.getElementById("birthdate");
let quantity = document.getElementById("quantity");
let radioLocation = document.querySelectorAll("input[name='location']");
let condition = document.getElementById("checkbox1");
let firstNameError = document.getElementById("firstNameErrorMsg");
let lastNameError = document.getElementById("lastNameErrorMsg");
let emailError = document.getElementById("emailErrorMsg");
let birthdateError = document.getElementById("birthdateErrorMsg");
let quantityError = document.getElementById("quantityErrorMsg");
let locationError = document.getElementById("locationErrorMsg");
let conditionError = document.getElementById("conditionErrorMsg");
let regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
let regexPhone = /^[0-9 +]+$/;
let regexOnlyLetter =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
let regexName = /^.{2,}$/;
let regexQuantity = /^[0-9]$/;
let firstNameCheck = false;
let lastNameCheck = false;
let emailCheck = false;
let quantityCheck = false;
let locationCheck = false;
let conditionCheck = true;
let birthdateCheck = false;

// Verify all form
let submitButton = document.getElementsByClassName("btn-submit");
let form = document.querySelector("form");
let confirmation = document.getElementsByClassName("confirmation_content");

submitButton[0].addEventListener("click", (e) => {
  e.preventDefault();
  // Test firtName
  if (
    regexOnlyLetter.test(firstName.value) === false ||
    regexName.test(firstName.value) === false
  ) {
    firstNameError.innerHTML = "Veuillez renseigner un prénom valide";
    firstNameCheck = false;
  } else {
    firstNameError.innerHTML = "";
    firstNameCheck = true;
  }

  // Test lastName
  if (
    regexOnlyLetter.test(lastName.value) === false ||
    regexName.test(lastName.value) === false
  ) {
    lastNameError.innerHTML = "Veuillez renseigner un nom valide";
    lastNameCheck = false;
  } else {
    lastNameError.innerHTML = "";
    lastNameCheck = true;
  }

  // Test email
  if (regexEmail.test(email.value) === false) {
    emailError.innerHTML = "Veuillez renseigner un email valide";
    emailCheck = false;
  } else {
    emailError.innerHTML = "";
    emailCheck = true;
  }

  // Test birthdate
  if (!birthdate.value) {
    birthdateError.innerHTML = "Veuillez renseigner votre date de naissance";
    birthdateCheck = false;
  } else {
    birthdateError.innerHTML = "";
    birthdateCheck = true;
  }

  // Test quantity
  if (regexQuantity.test(quantity.value) === false) {
    quantityError.innerHTML = "Veuillez renseigner un nombre";
    quantityCheck = false;
  } else {
    quantityError.innerHTML = "";
    quantityCheck = true;
  }

  // Test location
  for (let radio of radioLocation) {
    if (!radio.checked) {
      locationError.innerHTML = "Veuillez selectionner une ville";
      locationCheck = false;
    } else {
      locationError.innerHTML = "";
      locationCheck = true;

      break;
    }
  }

  // Test condition
  if (!condition.checked) {
    conditionError.innerHTML =
      "Veuillez lire et accepter les condition d'utilisation";
    conditionCheck = false;
  } else {
    conditionError.innerHTML = "";
    conditionCheck = true;
  }
  if (
    firstNameCheck &&
    lastNameCheck &&
    emailCheck &&
    quantityCheck &&
    conditionCheck &&
    birthdateCheck &&
    locationCheck
  ) {
    form.style.display = "none";
    confirmation[0].style.display = "flex";
  }
});
