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
let firstName = document.getElementById("first");
let lastName = document.getElementById("last");
let email = document.getElementById("email");
let quantity = document.getElementById("quantity");
let firstNameError = document.getElementById("firstNameErrorMsg");
let lastNameError = document.getElementById("lastNameErrorMsg");
let emailError = document.getElementById("emailErrorMsg");
let quantityError = document.getElementById("quantityErrorMsg");
// const locationValue = document.getElementById("email").value;
const errors = {};
const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
const regexPhone = /^[0-9 +]+$/;

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
closeBtn.forEach((span) => span.addEventListener("click", quitModal));

// close modal form
function quitModal() {
  modalbg.style.display = "none";
}

//verification of the form

let regexOnlyLetter =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
let regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
let regexName = /^.{2,}$/;
let regexQuantity = /^[0-9]$/;
let firstNameCheck = false;
let lastNameCheck = false;
let emailCheck = false;
let quantityCheck = false;
let cityCheck = false;

firstName.addEventListener("change", () => {
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
});

lastName.addEventListener("change", () => {
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
});

email.addEventListener("change", () => {
  if (regexEmail.test(email.value) === false) {
    emailError.innerHTML = "Veuillez renseigner un email valide";
    emailCheck = false;
  } else {
    emailError.innerHTML = "";
    emailCheck = true;
  }
});

quantity.addEventListener("change", () => {
  if (regexQuantity.test(quantity.value) === false) {
    quantityError.innerHTML = "Veuillez renseigner un nombre";
    quantityCheck = false;
  } else {
    quantityError.innerHTML = "";
    quantityCheck = true;
  }
});
