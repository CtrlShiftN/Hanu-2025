import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";

export function useSignUp() {
  const [err, setErr] = useState(null);
  const [pending, setPending] = useState(false);

  const signUp = async (email, password) => {
    try {
      setPending(true);
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      setErr(error);
    } finally {
      setPending(false)
    }
  };

  return { err, pending, signUp };
}
