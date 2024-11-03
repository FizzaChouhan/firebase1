// import { getAuth,createUserWithEmailAndPassword } from "./firebase.js";

// const auth = getAuth();

// let signupBtn =document.getElementById("signupBtn");
// let userEmail = document.getElementById("email")
// let userPassword = document.getElementById("password")
// // Email validation regex
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// function isValidEmail(userEmail) {
//   return emailRegex.test(userEmail);
// }
// signupBtn.addEventListener("click",()=>{
//   if(userEmail.value.trim() && userPassword.value.trim())

//   // Validate email format
//   if (!isValidEmail(userEmail)) {
//     alert("Please enter a valid email address.");
//     return; // Exit the function if the email is invalid
//   }

//   if (userEmail && userPassword) {
//     signupBtn.disabled = true; 
//   createUserWithEmailAndPassword(auth,userEmail.value,userPassword.value)
//   .then((userCredential) => {
//     // Signed up 
//     const user = userCredential.user;
//     console.log(user)
//       // Redirect to sign-in page
//       location.href = "signin.html";
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.log(errorMessage);
  
    
//   }  
// )
// .finally(() => {
//   signupBtn.disabled = false; // Re-enable button after the process
// });
// } else {
// alert("Please fill in both email and password.");
// }

//   //location.href="signin.html"
// })

import { getAuth, createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

let signupBtn = document.getElementById("signupBtn");
let userEmail = document.getElementById("email");
let userPassword = document.getElementById("password");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

signupBtn.addEventListener("click", () => {
  const email = userEmail.value.trim();
  const password = userPassword.value.trim();

  // Validate that both fields are filled
  if (!email || !password) {
    alert("Please fill in both email and password.");
    return;
  }

  // Validate email format
  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return; // Exit the function if the email is invalid
  }

  signupBtn.disabled = true; // Prevent multiple clicks during signup

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);

      // Redirect to sign-in page
      location.href = "signin.html";
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.error("Error signing up:", errorMessage);
      alert(`Error: ${errorMessage}`);
    })
    .finally(() => {
      signupBtn.disabled = false; // Re-enable button after the process
    });
});

