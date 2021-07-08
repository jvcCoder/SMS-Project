import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCCqUaqUaSpRtLShd2Tyi5PuphF94YhzmQ",
  authDomain: "sms-project-bc027.firebaseapp.com",
  projectId: "sms-project-bc027",
  storageBucket: "sms-project-bc027.appspot.com",
  messagingSenderId: "326980295665",
  appId: "1:326980295665:web:043573641c35a1106c4250",
  measurementId: "G-6BPNDZG0JJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;