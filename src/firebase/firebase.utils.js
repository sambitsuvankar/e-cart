// import firebase from 'firebase/compat/app';
import {initializeApp} from 'firebase/app';
import { getFirestore, setDoc,collection, getDoc, doc } from "firebase/firestore";
import 'firebase/compat/auth';
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const config = {
    apiKey: "AIzaSyA_54IMd3akizsk3UoOjfVQEPK-CKDeQQA",
    authDomain: "e-cart-1c3f2.firebaseapp.com",
    projectId: "e-cart-1c3f2",
    storageBucket: "e-cart-1c3f2.appspot.com",
    messagingSenderId: "453678115626",
    appId: "1:453678115626:web:6a12cf4fae0325e61bcc53",
    measurementId: "G-DZTBHV04GG"
  };

  initializeApp(config);

  export const auth = getAuth();
  export const firestore = getFirestore();
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'}); 



export const createUserProfileDocument = async (userAuth, additionalData) => {   // Here the userAuth is the authenticated user obejct.
    if(!userAuth) return;
    const userRef = doc(firestore,'users',`${userAuth.uid}`)   // Here we store the document reference object to the 'userRef' variable.
    // console.log(userRef)
   
   const snapShot = await getDoc(userRef)                   // her we create the snapShot object from the document reference.

//    console.log(snapShot)

    if(!snapShot.exists()){    // When we log in for the first time the documentSnapshot Object is not exist in the database.//  So when login for the first time the snapShot.exist = false.
        const userRef = collection(firestore, 'users')
        // console.log(userRef)
        const { displayName, email } =  userAuth;     //Here we took the 'displayName' & 'email' property from the 'userAuth' object by using destructuring method
        const createdAt = new Date();

        try{
           await setDoc(doc(userRef, `${userAuth.uid}`),{          // Here we write and update the properties to the database by using .set()
               displayName,email,createdAt, ...additionalData 
           })
        }catch (error){
           console.log('error creating user', error.message)
        }
    }

    return snapShot;
};