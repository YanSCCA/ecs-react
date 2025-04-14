import { Outlet } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
