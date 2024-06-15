let signUpBox = document.querySelector('.signUp-box');
let name = document.querySelector('#name');
//let email = document.querySelector('#email');
let password = document.querySelector('#password');
//let conformPassword = document.querySelector('#conformPassword');
// let submit = document.querySelector('#submit');
//let loader = document.querySelector('.loader');

// let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo')) || [];
// let userInfo = getingDataFromLocalStorage;

// submit.addEventListener('click', () => {
//   // userInput empty condition
//   if (name.value === '' || email.value === '' || password.value === '' || conformPassword.value === '') {
//     alert('Please fill the form completely!');
//   } else if (password.value !== conformPassword.value) {     // password and conform password matching
//     alert('Password and confirm password are not equal!');
//   } else { 
//     // checking user name and email
//     let userAlreadyTaken = userInfo.find((user) => {
//       return name.value === user.name || email.value === user.email;
//     });

//     if (!userAlreadyTaken) {
//       let user = {
//         name: name.value,
//         email: email.value,
//         password: password.value,
//         conformPassword: conformPassword.value,
//       };

//       userInfo.push(user);
//       localStorage.setItem('userInfo', JSON.stringify(userInfo));
//       console.log(userInfo);

//       name.value = '';
//       email.value = '';
//       password.value = '';
//       conformPassword.value = '';

//       signUpBox.style.display = "none"
//       loader.style.display = "block"

//     //   window location changing
//       setTimeout(() => {
//         window.location.href = '../login/login.html';
//       }, 3000);
//     } else {
//       alert('Sorry, this username or email is already taken!');
//     }
//   }
// });





// sign up with fire base
// Importing necessary values from "../config.js"
import { addDoc, app, auth, collection, createUserWithEmailAndPassword, db, doc, setDoc } from "../utilities/fireBaseConfigs.js";

// Sign up handler function
window.signUpHandler = () => {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  
  // console.log(email.value);
  // console.log(password.value);

  // Firebase functionality
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then(async(userCredential) => {
      // Signed up 
      const user = userCredential.user;
      window.location = "../login/login.html";

      // saving my data in database
      // try {
      //   await setDoc(doc(db, "users", user.uid), {
      //     name: name.value,
      //     email: email.value,
      //     id: user.uid,
      //   });
      //   console.log("Document written with ID: ", docRef.id);
      //   alert("Sign up successfully!");

      // } catch (e) {
      //   console.error("Error adding document: ", e);
      // }
      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
};

// Adding click event listener to the submit button
const submit = document.querySelector('#submit');
submit.addEventListener('click', signUpHandler);

// sign up
                
                
                
                
                
                


                







// const jonas = {
//     year: 1995,
//     name: "jonas",
//     calcAge: function () {
//         console.log(this);  
//     }
// }

// const matilda = {
//     year: 1991,
//     name: "matilda"
// }
// matilda.calcAge = jonas.calcAge
// matilda.calcAge()
// jonas.calcAge()
// console.log(matilda);