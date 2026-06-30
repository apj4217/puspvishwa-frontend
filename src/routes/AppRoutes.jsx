import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import About from "../pages/About";
import Cart from "../pages/Cart";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Loginpage from "../pages/Loginpage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Registerpage from "../pages/Registerpage";
import Services from "../pages/Services";
import Shop from "../pages/Shop";
import TermsConditions from "../pages/TermsConditions";
import AdminLogin from "../pages/admin/AdminLogin";
import Contacts from "../pages/admin/Contacts";
import Dashboard from "../pages/admin/Dashboard";
import Orders from "../pages/admin/Orders";
import Products from "../pages/admin/Products";
import Users from "../pages/admin/Users";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/register" element={<Registerpage />} />
      <Route path="/admin-login" element={<AdminLogin />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/cart" element={<Cart />} />
      </Route>

      <Route element={<ProtectedRoute requiredRole="admin" />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/contacts" element={<Contacts />} />
      </Route>

      <Route path="*" element={<NavigateFallback />} />
    </Routes>
  );
}

function NavigateFallback() {
  return <Home />;
}

export default AppRoutes;
