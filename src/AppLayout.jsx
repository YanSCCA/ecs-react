import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase";
import { AuthContext } from "./AuthContext";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export default function AppLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userDocRef = doc(db, "users", currentUser.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
          // Create new user document with basic info
          await setDoc(userDocRef, {
            email: currentUser.email,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
          });
        } else {
          // Update last login time for existing user
          await updateDoc(userDocRef, {
            lastLogin: new Date().toISOString()
          });
        }
      }
    })

    return () => unsubscribe();
  }, [])

  return (
    <>
      <AuthContext value={user}>
        <Header />
        <Outlet />
        <Footer />
      </AuthContext>
    </>
  );
}
