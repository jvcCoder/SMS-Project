import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import Axios from 'axios';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyCCqUaqUaSpRtLShd2Tyi5PuphF94YhzmQ',
  authDomain: 'sms-project-bc027.firebaseapp.com',
  projectId: 'sms-project-bc027',
  storageBucket: 'sms-project-bc027.appspot.com',
  messagingSenderId: '326980295665',
  appId: '1:326980295665:web:043573641c35a1106c4250',
  measurementId: "G-6BPNDZG0JJ",
};

firebase.initializeApp(config);

const db = firebase.firestore()

export { Axios, db }

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createDat = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createDat,
        ...additionalData
      });
    }catch (error){
      console.log ('error creating user', error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;