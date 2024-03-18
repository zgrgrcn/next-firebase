import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Get the authentication instance using the Firebase app
const auth = getAuth(firebase_app);

// Function to sign up a user with email and password
export async function signUp(email: string, password: string) {
  let result = null, // Variable to store the sign-up result
    error = null; // Variable to store any error that occurs

  try {
    result = await createUserWithEmailAndPassword(auth, email, password); // Create a new user with email and password
  } catch (e) {
    error = e; // Catch and store any error that occurs during sign-up
  }

  return { result, error }; // Return the sign-up result and error (if any)
}


// Function to sign up a user with Google
export async function signUpWithGoogle() {
  let result = null, // Variable to store the sign-up result
    error = null; // Variable to store any error that occurs

  try {
    const provider = new GoogleAuthProvider(); // Create a new Google authentication provider
    result = await signInWithPopup(auth, provider); // Sign up with Google
  } catch (e) {
    error = e; // Catch and store any error that occurs during sign-up
  }

  return { result, error }; // Return the sign-up result and error (if any)
}
