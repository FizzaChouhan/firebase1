// import { getAuth, onAuthStateChanged ,sendEmailVerification,updateProfile , signOut } from "./firebase.js";

// const auth = getAuth();
// let profilepage= document.getElementById("profile-page")
// onAuthStateChanged(auth, (user) => {
//   if (user) {
   
//     const uid = user.uid;
//     console.log(user);
//     profilepage.innerHTML =`<div class="card mb-4 shadow-sm rounded-3">
//     <div class="card-body p-4">
//       <div class="d-flex align-items-center mb-3">
//         <img src="${user.photoURL}" alt="Profile Picture" class="rounded-circle border" width="100px" height="100px">
//         <div class="ms-3">
//           <h4 class="card-title mb-1">${user.displayName}</h4>
//           <p class="text-muted mb-0">${user.email}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-person-lines-fill"></i> Full Name</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.displayName}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-envelope-fill"></i> Email</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.email}</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-telephone-fill"></i> Phone</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">(097) 234-5678</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-phone-fill"></i> Mobile</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">(098) 765-4321</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-geo-alt-fill"></i> Address</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">Bay Area, San Francisco, CA</p>
//         </div>
//       </div>
//       <hr>
//       <div class="row">
//         <div class="col-sm-3">
//           <p class="mb-1"><i class="bi bi-check-circle-fill"></i> Email Verified</p>
//         </div>
//         <div class="col-sm-9">
//           <p class="text-muted mb-1">${user.emailVerified ? "Yes" : "No"}</p>
//         </div>
//       </div>
//       <div class="mt-4 d-flex justify-content-between">
//         <button type="button" class="btn btn-primary" id="verifyEmail">Verify Email</button>
//         <button type="button" class="btn btn-warning" id="updateProfile">Update Profile</button>
//         <button type="button" class="btn btn-danger" id="signOut">Sign Out</button>
//       </div>
//     </div>
//   </div>`
  
    
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// //verify email
// document.getElementById("verifyEmail").addEventListener("click", ()=>{
//   //send email verification request to server
  

// const auth = getAuth();
// sendEmailVerification(auth.currentUser)
//   .then(() => {
//     // Email verification sent!
//     // ...
//   });

//   //update profile
//   document.getElementById("updateProfile").addEventListener("click", ()=>{
//     //update profile on server
//     updateProfile(auth.currentUser, {
//       displayName: "Fizza",
//        photoURL: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png"
//     }).then(() => {
//      console.log("update");
     
//     }).catch((error) => {
//       console.log("error");
      
//     });
//   })

//   //signout
//   document.getElementById("signOut").addEventListener("click", ()=>{
//     //sign out user
//     signOut(auth).then(() => {
//       console.log("user has been signout");
      
//       }).catch((error) => {
//         console.log("Error");
        
//         });
//         });


// })

// import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile, signOut } from "./firebase.js";

// const auth = getAuth();
// let profilePage = document.getElementById("profile-page");

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user);
//     profilePage.innerHTML = `
     
//        <div class="card mb-4 shadow-sm rounded-3">
//         <div class="card-body p-4">
//           <div class="d-flex align-items-center mb-3">
//             <img src="${user.photoURL || 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png'}" 
//                  alt="Profile Picture" 
//                  class="rounded-circle border" 
//                  width="100px" 
//                  height="100px">
//             <div class="ms-3">
//               <h4 class="card-title mb-1">${user.displayName || 'No Name Provided'}</h4>
//               <p class="text-muted mb-0">${user.email}</p>
//             </div>
//           </div>
//           <hr>
//           <div class="row">
//             <div class="col-sm-3"><p class="mb-1"><i class="bi bi-person-lines-fill"></i> Full Name</p></div>
//             <div class="col-sm-9"><p class="text-muted mb-1">${user.displayName || 'No Name Provided'}</p></div>
//           </div>
//           <hr>
//           <div class="row">
//             <div class="col-sm-3"><p class="mb-1"><i class="bi bi-envelope-fill"></i> Email</p></div>
//             <div class="col-sm-9"><p class="text-muted mb-1">${user.email}</p></div>
//           </div>
//           <hr>
//           <div class="row">
//             <div class="col-sm-3"><p class="mb-1"><i class="bi bi-geo-alt-fill"></i> Address</p></div>
//             <div class="col-sm-9"><p class="text-muted mb-1">Bay Area, San Francisco, CA</p></div>
//           </div>
//           <hr>
//           <div class="row">
//             <div class="col-sm-3"><p class="mb-1"><i class="bi bi-check-circle-fill"></i> Email Verified</p></div>
//             <div class="col-sm-9"><p class="text-muted mb-1" id="emailVerificationStatus">${user.emailVerified ? "Yes" : "No"}</p></div>
//           </div>
//           <div class="mt-4 d-flex justify-content-between">
//             <button type="button" class="btn btn-primary" id="verifyEmail">Verify Email</button>
//             <button type="button" class="btn btn-warning" id="updateProfile">Update Profile</button>
//             <button type="button" class="btn btn-danger" id="signOut">Sign Out</button>
//           </div>
//         </div>
//       </div>
//     `;
    

//     // Add event listeners after the UI is rendered
//     document.getElementById("verifyEmail").addEventListener("click", () => {
//       sendEmailVerification(auth.currentUser)
//         .then(() => {
//           Swal.fire('Success', 'Verification email sent!', 'success');
//         })
//         .catch((error) => {
//           Swal.fire('Error', `Failed to send verification email: ${error.message}`, 'error');
//         });
//     });

//     document.getElementById("updateProfile").addEventListener("click", () => {
//       Swal.fire({
//         title: 'Update Profile',
//         html: `
//           <input type="text" id="userName" class="swal2-input" placeholder="Enter your name">
//           <input type="url" id="userPic" class="swal2-input" placeholder="Enter profile picture URL">`,
//         confirmButtonText: 'Update',
//         preConfirm: () => {
//           const userName = document.getElementById('userName').value;
//           const userPic = document.getElementById('userPic').value;
//           if (!userName || !userPic) {
//             Swal.showValidationMessage('Both name and picture URL are required');
//             return false;
//           }
//           return { userName, userPic };
//         }
//       })
//         .then((result) => {
//           if (result.isConfirmed) {
//             updateProfile(auth.currentUser, {
//               displayName: result.value.userName,
//               photoURL: result.value.userPic
//             })
//             .then(() => {
//               Swal.fire('Success', 'Profile updated successfully!', 'success').then(() => {
//                 location.reload(); // Refresh UI to show updated information
//               });
//             })
//             .catch((error) => {
//               Swal.fire('Error', `Failed to update profile: ${error.message}`, 'error');
//             });
//         }
//         });
//     });

//     document.getElementById("signOut").addEventListener("click", () => {
//       Swal.fire({
//         title: 'Are you sure?',
//         text: "You will be signed out.",
//         icon: 'warning',
//         showCancelButton: true,
//         confirmButtonText: 'Yes, sign out',
//         cancelButtonText: 'Cancel'
//       })
//         .then((result) => {
//           if (result.isConfirmed) {
//             signOut(auth)
//               .then(() => {
//                 Swal.fire('Signed Out', 'You have been signed out.', 'success').then(() => {
//                   location.href = "index.html";
//                 });
//               })
//         .catch((error) => {
//           Swal.fire('Error', `Failed to sign out: ${error.message}`, 'error');
//         });
//     }
//         });
//     });
//   } else {
//     // User is signed out
//     profilePage.innerHTML = "<p class='text-center mt-5'>No user is currently signed in.</p>";
//   }
// });

import { getAuth, onAuthStateChanged, sendEmailVerification, updateProfile, signOut } from "./firebase.js";

const auth = getAuth();
let profilePage = document.getElementById("profile-page");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log("User UID:", uid);
   // console.log(user);
    profilePage.innerHTML = `
      <div class="card mb-4 shadow-sm rounded-3">
        <div class="card-body p-4">
          <div class="d-flex align-items-center mb-3">
            <img src="${user.photoURL || 'https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-female-icon.png'}" 
                 alt="Profile Picture" 
                 class="rounded-circle border" 
                 width="100px" 
                 height="100px">
            <div class="ms-3">
              <h4 class="card-title mb-1">${user.displayName || 'No Name Provided'}</h4>
              <p class="text-muted mb-0">${user.email}</p>
            </div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-person-lines-fill"></i> Full Name</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.displayName || 'No Name Provided'}</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-envelope-fill"></i> Email</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.email}</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-geo-alt-fill"></i> Address</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">Bay Area, San Francisco, CA</p></div>
          </div>
          <hr>
          <div class="row">
            <div class="col-sm-3"><p class="mb-1"><i class="bi bi-check-circle-fill"></i> Email Verified</p></div>
            <div class="col-sm-9"><p class="text-muted mb-1">${user.emailVerified ? "Yes" : "No"}</p></div>
          </div>
          <div class="mt-4 d-flex justify-content-between">
            <button type="button" class="btn btn-primary" id="verifyEmail">Verify Email</button>
            <button type="button" class="btn btn-warning" id="updateProfile">Update Profile</button>
            <button type="button" class="btn btn-danger" id="signOut">Sign Out</button>
             <button type="button" class="btn btn-info" id="post">Create a Post</button>
          </div>
        </div>
      </div>
    `;

    // SweetAlert for sending email verification
    document.getElementById("verifyEmail").addEventListener("click", () => {
      sendEmailVerification(auth.currentUser)
        .then(() => {
          Swal.fire('Success', 'Verification email sent!', 'success');
        })
        .catch((error) => {
          Swal.fire('Error', `Failed to send verification email: ${error.message}`, 'error');
        });
    });

    // SweetAlert for updating profile
    document.getElementById("updateProfile").addEventListener("click", () => {
      Swal.fire({
        title: 'Update Profile',
        html: `
          <input type="text" id="userName" class="swal2-input" placeholder="Enter your name">
          <input type="url" id="userPic" class="swal2-input" placeholder="Enter profile picture URL">`,
        confirmButtonText: 'Update',
        preConfirm: () => {
          const userName = document.getElementById('userName').value;
          const userPic = document.getElementById('userPic').value;
          if (!userName || !userPic) {
            Swal.showValidationMessage('Both name and picture URL are required');
            return false;
          }
          return { userName, userPic };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          updateProfile(auth.currentUser, {
            displayName: result.value.userName,
            photoURL: result.value.userPic
          })
            .then(() => {
              Swal.fire('Success', 'Profile updated successfully!', 'success').then(() => {
                location.reload(); // Refresh UI to show updated information
              });
            })
            .catch((error) => {
              Swal.fire('Error', `Failed to update profile: ${error.message}`, 'error');
            });
        }
      });
    });

    // SweetAlert for signing out
    document.getElementById("signOut").addEventListener("click", () => {
      Swal.fire({
        title: 'Are you sure?',
        text: "You will be signed out.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, sign out',
        cancelButtonText: 'Cancel'
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth)
            .then(() => {
              Swal.fire('Signed Out', 'You have been signed out.', 'success').then(() => {
                location.href = "index.html";
              });
            })
            .catch((error) => {
              Swal.fire('Error', `Failed to sign out: ${error.message}`, 'error');
            });
        }
      });
    });
  } else {
    profilePage.innerHTML = "<p class='text-center mt-5'>No user is currently signed in.</p>";
  }
  document.getElementById("post").addEventListener("click", () => {
    console.log("Navigating to post.html");
    location.href = "post.html";
  });



});





   