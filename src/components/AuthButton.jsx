import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function AuthButton() {
  const user = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      alert("Signed out")
    }).catch(err => {
      alert(`Error: ${err}`)
    })
  }

  const handleButton = user === null ? handleLogin : handleSignOut

  return (
    <button onClick={handleButton}>
      {user === null ? "Sign In" : "Sign Out"}
    </button>
  )
}