

import { initializeApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCd1ZkCIYrTX2eoJjJqIJ-ej3dmbJcwUII",
  authDomain: "amigoapp-ffb8f.firebaseapp.com",
  projectId: "amigoapp-ffb8f",
  storageBucket: "amigoapp-ffb8f.appspot.com",
  messagingSenderId: "137547622359",
  appId: "1:137547622359:web:6aa5028f1692ceb6c6cd92",
  measurementId: "G-MWD9LVWWD4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app) as ExtendedAuth;

interface ExtendedAuth extends Auth {
  fetchSignInMethodsForEmail(email: string): Promise<string[]>;
}

const fetchSignInMethodsForEmail = async (email: string): Promise<string[]> => {
  const methods = await auth.fetchSignInMethodsForEmail(email);
  return methods;
};

export { auth, fetchSignInMethodsForEmail };


/*


const firebaseConfig = {
  apiKey: "AIzaSyCd1ZkCIYrTX2eoJjJqIJ-ej3dmbJcwUII",
  authDomain: "amigoapp-ffb8f.firebaseapp.com",
  projectId: "amigoapp-ffb8f",
  storageBucket: "amigoapp-ffb8f.appspot.com",
  messagingSenderId: "137547622359",
  appId: "1:137547622359:web:6aa5028f1692ceb6c6cd92",
  measurementId: "G-MWD9LVWWD4"
};



*/