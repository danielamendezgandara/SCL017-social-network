import register from './lib/views/login.js';
import {signUpUserEmailPassword,signUpUserGoogle } from './lib/controller/registerFirebase.js';
import {} from './lib/controller/loginFirebase.js';

document.getElementById("root").appendChild(register());
// Get Modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("btn-2");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

//User register
const btnRegister=document.getElementById("btn-3");
const emailUser=document.getElementById("mail-creation");
const passwordUser=document.getElementById("pass-creation");
const accountGoogle=document.getElementById("google");

//user login 


// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

btnRegister.addEventListener('click',function(){
  signUpUserEmailPassword(emailUser,passwordUser);
  emailUser.value='';
  passwordUser.value='';
});

accountGoogle.addEventListener('click',signUpUserGoogle,false);