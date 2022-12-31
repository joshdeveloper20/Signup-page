"use strict";

const signIn = document.querySelector("p .sign-in");
const signUp = document.querySelector("p .sign-up");
const signUpForm = document.querySelector("form");
const signInForm = document.querySelector(".form-2");
const formBoxHeader = document.querySelector(".form-box .header h2");

signIn.addEventListener("click", function (e) {
  signUpForm.classList.add("hidden");
  signInForm.classList.remove("hidden");
  formBoxHeader.textContent = "Sign In Here";
});

signUp.addEventListener("click", function (e) {
  signUpForm.classList.remove("hidden");
  signInForm.classList.add("hidden");
  formBoxHeader.textContent = "Sign Up Here";
});
