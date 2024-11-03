import { getAuth, signInWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

let siginpass = document.getElementById("signinpassword");
let siginemail = document.getElementById("signinemail");
let loginBtn = document.getElementById("signinBtn");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

loginBtn.addEventListener("click", () => {
  const email = siginemail.value.trim();
  const password = siginpass.value.trim();

  if (email && password) {
    // Validate email format
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address.");
      return; // Exit the function if the email is invalid
    }

    loginBtn.disabled = true; // Prevent multiple clicks during login

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("User signed in:", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Error signing in:", errorMessage);
        alert(`Error: ${errorMessage}`);
      })
      .finally(() => {
        loginBtn.disabled = false; 
      });
  } else {
    alert("Please fill in both email and password.");
  }

  location.href="profile.html"
});
