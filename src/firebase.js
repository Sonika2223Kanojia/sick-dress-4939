import firebase from 'firebase/app'
import 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyB7qyGE2uMl3xwA4JLhDzKPNzmtzWxMib8",
    authDomain: "otp-sinup.firebaseapp.com",
    projectId: "otp-sinup",
    storageBucket: "otp-sinup.appspot.com",
    messagingSenderId: "627470667909",
    appId: "1:627470667909:web:1aeaff0a09b8eaf93359ec"
  };
  

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;