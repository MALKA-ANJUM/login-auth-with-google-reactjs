import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCeo07oRmudsQvIc3rwV3_TC0yyba8KA7k",
  authDomain: "auth-react-f68fa.firebaseapp.com",
  projectId: "auth-react-f68fa",
  storageBucket: "auth-react-f68fa.appspot.com",
  messagingSenderId: "561307174150",
  appId: "1:561307174150:web:2e46e758f95d9e9eb80a87",
  measurementId: "G-GLCQQ7BHK1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
