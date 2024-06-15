// let loginBox = document.querySelector('.login-box');
// let email = document.querySelector('#email')
// let password = document.querySelector('#password')
// let login = document.querySelector('#login')
// let getingDataFromLocalStorage = JSON.parse(localStorage.getItem('userInfo'))
// let loader = document.querySelector('.loader')

// console.log(getingDataFromLocalStorage);


// login.addEventListener("click", () => {

// let userFound = getingDataFromLocalStorage.find( (user) => {
//         if (email.value == user.email) return user
//     })
//     console.log(userFound);

//     if (userFound) {
//         if (password.value == userFound.password) {
//             // console.log("password match kar gaya hai")

//             // giving data to localStorage
//             localStorage.setItem("loggedinUser" , JSON.stringify(userFound))

//             loginBox.style.display = "none"
//             loader.style.display = "block"
      
//             // window location changing
//             setTimeout(() => {
//               window.location.href = '../home/home.html';
//             }, 3000);
//         } else {
//             // console.log("sorry passowrd match nahi kar raha hai");
//             alert('sorry wrong password')
//         }
        
//     }



// })


// sign in with fire base

import { app , auth , onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword} from "../utilities/fireBaseConfigs.js"

onAuthStateChanged(auth, (user) => {
    if (user) {

    const uid = user.uid;


  window.location = "../home/home.html"

    } else {
      console.log("not login");
      if (window.location.pathname !== "/login/login.html") {
        window.location = "../login/login.html"
      }
    } 
  });

function forgetPasswordHandler() {
  // console.log("forget password is working!");
  sendPasswordResetEmail(auth, email.value)
  .then(() => {
    alert("check the email or reset password!")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
}

let forgetPassword = document.querySelector('#forgetPassword')
forgetPassword.addEventListener('click' , forgetPasswordHandler)

let loginHandler = () => {
    let email = document.querySelector('#email') 
    let password = document.querySelector('#password')
    
    console.log(email.value);
    console.log(password.value);

    /// fire base functionality
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('user logged in sucsessfully!')

        sendEmailVerification(auth.currentUser)
        .then(() => {
        })
        window.location = "../home/home.html"
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error.code);
        });
}

let login = document.querySelector('#login')
login.addEventListener('click' , loginHandler)
