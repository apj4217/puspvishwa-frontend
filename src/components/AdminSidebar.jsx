import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/admin-login", { replace: true });
  };

  return (
    <aside
      className="bg-dark text-white p-4 pv-admin-sidebar"
      style={{
        width: "280px",
        minHeight: "100vh",
      }}
    >
      <BrandLogo light className="mb-5" />

      <nav className="d-flex flex-column gap-3 pv-admin-nav">
        <Link to="/admin" className="text-white text-decoration-none">
          <i className="bi bi-speedometer2 me-2"></i>
          Dashboard
        </Link>

        <Link to="/admin/users" className="text-white text-decoration-none">
          <i className="bi bi-people me-2"></i>
          Users
        </Link>

        <Link to="/admin/orders" className="text-white text-decoration-none">
          <i className="bi bi-box-seam me-2"></i>
          Orders
        </Link>

        <Link to="/admin/contacts" className="text-white text-decoration-none">
          <i className="bi bi-envelope-paper me-2"></i>
          Contact Requests
        </Link>

        <button
          type="button"
          className="text-white text-start border-0 bg-transparent p-0"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
