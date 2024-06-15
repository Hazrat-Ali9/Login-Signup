// let body = document.querySelector('body')
// let navbar = document.querySelector('.navbar')
// let loader = document.querySelector('.loader')
// let userName = document.querySelector('#userName')


// // name of the user on the browser
// userName.innerHTML = JSON.parse(localStorage.getItem('loggedinUser')).name

// // getting data from localStorage
// let getLoggedInUser = JSON.parse(localStorage.getItem('loggedinUser'))
// console.log(getLoggedInUser);

// // logout button and function on it
// let logoutBtn = document.querySelector('#logoutBtn')
// logoutBtn.addEventListener('click', () => {
//     // Remove the 'loggedinUser' item from localStorage
//     localStorage.removeItem('loggedinUser');

//     // styling on the logout 
//     navbar.style.display = "none"
//     loader.style.display = "block"
//     body.style.height = "100vh"
//     body.style.display = "flex"
//     body.style.justifyContent = "center"
//     body.style.alignItems = "center"

//     // change the location of window
//     setTimeout(() => {
//         window.location.href = "../login/login.html"
//     }, 3000);
// });

// // edit profile
// let editProfile = document.querySelector('.editProfile');
// let editBtn = document.querySelector('#editBtn');

// editBtn.addEventListener('click', () => {
//     editProfile.style.display = "block";

//     // Set the input values based on the stored user information
//     let nameInput = document.querySelector('#name');
//     let emailInput = document.querySelector('#email');
//     let numberInput = document.querySelector('#number') 
//     let nationalityInput = document.querySelector('#nationality') 

//     if (nameInput && emailInput && numberInput && nationalityInput) {
//         let getLoggedInUser = JSON.parse(localStorage.getItem('loggedinUser'))
//         nameInput.value = getLoggedInUser.name;
//         emailInput.value = getLoggedInUser.email;
//         numberInput.value = getLoggedInUser.number ?? 'number'
//         nationalityInput.value = getLoggedInUser.nationality ?? 'nationality'
//     } else {
//         console.error("Some input elements are missing or have incorrect IDs.");
//     }
// });

// // submit button
// let submit = document.querySelector('#submit');
// submit.addEventListener('click', () => {
//     let nameInput = document.querySelector('#name');
//     let emailInput = document.querySelector('#email');
//     let numberInput = document.querySelector('#number');
//     let nationalityInput = document.querySelector('#nationality');

//     editProfile.style.display = "none";

//     let getLoggerAgain = JSON.parse(localStorage.getItem("loggedinUser"));
//     let getUsersAgain = JSON.parse(localStorage.getItem("userInfo"));

//     let userFoundAgain = getUsersAgain.find((user) => {
//         if (user.name == userName.textContent) {
//             console.log(user);
//             return true;
//         }
//     });

//     getLoggerAgain.number = numberInput.value;
//     userFoundAgain.number = numberInput.value;

//     getLoggerAgain.nationality = nationalityInput.value;
//     userFoundAgain.nationality = nationalityInput.value;

//     // Update the user information in the "userInfo" array
//     const userIndex = getUsersAgain.findIndex((user) => user.name === userName.textContent);
//     if (userIndex !== -1) {
//         getUsersAgain[userIndex] = userFoundAgain;
//         localStorage.setItem("userInfo", JSON.stringify(getUsersAgain));
//         localStorage.setItem("loggedinUser", JSON.stringify(getLoggerAgain));
//     }

//     // Set the input values in the editProfile form with the updated values
//     nameInput.value = getLoggerAgain.name;
//     emailInput.value = getLoggerAgain.email;
//     numberInput.value = getLoggerAgain.number;
//     nationalityInput.value = getLoggerAgain.nationality;
// });

import {app ,auth , deleteUser, doc, onAuthStateChanged, signOut  } from "../utilities/fireBaseConfigs.js"


onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    if (window.location.pathname !== "/home/home.html") {
    window.location = "../home/home.html"
  }
  } else {
    console.log("not login");
      window.location = "../login/login.html"
  } 
});
let deleteAccountHandler = () => {
  const user = auth.currentUser;
  
  deleteUser(user).then(() => {
  alert("your account is deleted!");
  window.location = "../sign up/signup.html"
}).catch((error) => {
  // An error ocurred
  // ...
});
}
let deleteAccount = document.querySelector("#deleteAccount")
deleteAccount.addEventListener('click' , deleteAccountHandler)

let logout = document.querySelector('#logoutBtn')
let logoutHandler = () => {

    // fire base functionality
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location = "../login/login.html"
    }).catch((error) => {
      // An error happened.
    });
}
logout.addEventListener('click' , logoutHandler)  

// Logout option