import { Link, useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function AdminSidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  return (
    <aside className="bg-dark text-white p-4 pv-admin-sidebar">
      <BrandLogo light className="mb-5" />

      <nav className="d-flex flex-column gap-2 pv-admin-nav">
        <Link to="/admin"><i className="bi bi-speedometer2"></i>Dashboard</Link>
        <Link to="/admin/users"><i className="bi bi-people"></i>Users</Link>
        <Link to="/admin/orders"><i className="bi bi-box-seam"></i>Orders</Link>
        <Link to="/admin/contacts"><i className="bi bi-envelope-paper"></i>Contact Requests</Link>
        <button type="button" onClick={logout}>
          <i className="bi bi-box-arrow-right"></i>Logout
        </button>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
