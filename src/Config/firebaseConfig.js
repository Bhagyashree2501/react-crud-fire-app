// v9 compact packages
import second from 'firebase/compat/app'
import 'firebase/compat/auth'
import'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD8gV8vqNpV9z7og3jf5i6UwGKu_NRXUgg",
    authDomain: "react-crud-app-643d0.firebaseapp.com",
    projectId: "react-crud-app-643d0",
    storageBucket: "react-crud-app-643d0.appspot.com",
    messagingSenderId: "822005669448",
    appId: "1:822005669448:web:79d4b114d18d938de0827d",
    measurementId: "G-96T1CETKV1"
  };

  const Fireapp = firebase.initializeApp(firebaseConfig);

  export default Fireapp