import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebaseConfig";

const auth = getAuth(app);
export const signup = async (EmailAuthCredential, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    return error.message;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    return error.message;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return "Logged out successfully";
  } catch (error) {
    return error.message;
  }
};