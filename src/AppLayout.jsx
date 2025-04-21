import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { AuthContext } from "./AuthContext";

export default function AppLayout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
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
