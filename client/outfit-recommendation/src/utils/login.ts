import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

export const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (err) {
    console.error("Login Failed:", err);
  }
};
