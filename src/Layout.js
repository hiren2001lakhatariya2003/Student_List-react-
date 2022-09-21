import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <br />
      <br />

      <Outlet />
      <br />

      <Footer />
    </>
  );
}
export default Layout;
