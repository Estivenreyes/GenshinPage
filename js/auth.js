
  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider } from 
"https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
import { getFirestore, doc, setDoc, getDoc} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyADo3PwQB6pTfKo6zaxF_A54Y6sbR5CeJo",
authDomain: "shopping-cart-790a7.firebaseapp.com",
projectId: "shopping-cart-790a7",
storageBucket: "shopping-cart-790a7.appspot.com",
messagingSenderId: "925482071152",
appId: "1:925482071152:web:2a240fee616627056870b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const registerForm = document.getElementById("register");
const loginForm = document.getElementById("login");
const logoutButton = document.getElementById("logout");
const googleButton = document.getElementById("google")
console.log(loginForm);
let activeUser;

const createUser = async (email, password, userFields) => {
  try {
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
    const userId = user.uid;

    console.log(user.id);

    await setDoc(doc(db, "users", userId),userFields);
  } catch (e) {
    if (e.code === "auth/email-already-in-use"){
      console.log("this email is in use already...");
    }
    if (e.code === "auth/weak-password"){
      console.log("Try with a more safe password...");
    }
  }
}

const getUserInfo = async (userId)=>{
  try{
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  }catch (e) {
    console.log(e)
  }
  
}


const login =  async (email, password) => {

  console.log(auth.currentUser)
  try {
    const {user} = await signInWithEmailAndPassword(auth,email,password);
    console.log(`Welcome ${user.email}`); 
    activeUser = user;
    const userInfo = await getUserInfo(user.id);
    console.log(userInfo);
    
  } catch (e) {
    console.log(e.code);
    if (e.code === "auth/user-not-found") {
      console.log("The user is not registered in our database...");
    }
  }
  
}

const loginwithgoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  const userInfo = await getUserInfo(user.id);
  console.log(userInfo.user);

}

const logout = () => {

  
  const auth = getAuth();
  signOut(auth).then(() => {
    console.log(auth.currentUser)
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
}

if(registerForm){
  registerForm.addEventListener("submit", e => {
    e.preventDefault();
  
    const name = registerForm.name.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const Nickname = registerForm.Nickname.value;
  
    if (email && password){
      createUser(email, password,{
        name,
        Nickname,
        isAdmin: false,
      });
    }else{
      console.log("Please complete all required fields...");
    }
  });

  googleButton.addEventListener("click", e =>{
    loginwithgoogle();
  });
}

if(loginForm){
  loginForm.addEventListener("submit", e =>{
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;
  
    if (email && password){
      login(email, password);
      loginForm.email.value="";
      loginForm.password.value="";
    }else{
      console.log("Please complete all required fields..."); 
    }
  });

  googleButton.addEventListener("click", e =>{
    loginwithgoogle();
  });
  
}

logoutButton.addEventListener("click", e =>{
  logout(); 
  console.log("prueba")
})

onAuthStateChanged(auth, (user)=> {
  if(user){
    //loginForm.classList.add("hidden");
    logoutButton.classList.add("visible");
  } else {
    //loginForm.classList.remove("hidden");
    logoutButton.classList.remove("visible");
  }

});