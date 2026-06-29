import { useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRoutes from "./routes/AppRoutes";

import ScrollToTop from "./components/ScrollToTop";

function App() {

  const location = useLocation();

  const hideLayout =
    location.pathname.startsWith("/admin") ||
    location.pathname === "/admin-login" ||
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (

    <>

      <ScrollToTop />

      {!hideLayout && <Navbar />}

      <AppRoutes />

      {!hideLayout && <Footer />}

    </>

  );

}

export default App;
