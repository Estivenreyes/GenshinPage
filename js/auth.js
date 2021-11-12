
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyADo3PwQB6pTfKo6zaxF_A54Y6sbR5CeJo",
authDomain: "shopping-cart-790a7.firebaseapp.com",
projectId: "shopping-cart-790a7",
storageBucket: "shopping-cart-790a7.appspot.com",
messagingSenderId: "925482071152",
appId: "1:925482071152:web:2a240fee616627056870b5",
measurementId: "G-ZEWMS1486Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");

const createUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password)
  } catch (e) {
    if (e.code === "auth/email-already-in-use"){
      console.log("this email is in use already...");
    }
    if (e.code === "auth/weak-password"){
      console.log("Try with a more safe password...");
    }
  }
}

const login =  async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth,email,password);
    console.log(user);
  } catch (e) {
    console.log(e.code);

    if (e.code === "auth/user-not-found") {
      console.log("The user is not registered in our database...");
    }
  }
  
}

registerForm.addEventListener("submit", e => {
  e.preventDefault();

  const name = registerForm.name.value;
  const email = registerForm.email.value;
  const password = registerForm.password.value;

  if (email && password){
    createUser(email, password);
  }else{
    console.log("Please complete all required fields...");
  }
});

loginForm.addEventListener("submit", e =>{
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;

  if (email && password){
    login(email, password);
  }else{
    console.log("Please complete all required fields...");
  }
});