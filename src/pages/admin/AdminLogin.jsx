import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import API from "../../api";
import BrandLogo from "../../components/BrandLogo";

function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(
    location.state?.reason || ""
  );
  const [loading, setLoading] = useState(false);

  const changeHandler = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = formValues.email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !formValues.password) {
      setErrorMessage("Enter admin email and password.");
      return;
    }

    setErrorMessage("");
    setLoading(true);

    try {
      const response = await API.post("/auth/admin/login", {
        email,
        password: formValues.password,
      });

      if (response.data.user?.role !== "admin") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setErrorMessage("This account does not have admin access.");
        return;
      }

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      navigate(location.state?.from || "/admin", { replace: true });
    } catch (error) {
      setErrorMessage(error.response?.data?.message || "Unable to login as admin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pv-admin-login-page">
      <section className="pv-admin-login-card">
        <BrandLogo light className="mb-4" />

        <span className="badge bg-light text-dark px-4 py-2 mb-4">
          Admin Access
        </span>

        <h1 className="fw-bold text-white mb-3">
          Admin Login
        </h1>

        <p className="text-light opacity-75 mb-4">
          Login with an administrator account to manage users, orders, and enquiries.
        </p>

        {errorMessage && (
          <div className="alert alert-warning">
            {errorMessage}
          </div>
        )}

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label text-light fw-semibold">
              Admin Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control p-3"
              placeholder="admin@example.com"
              value={formValues.email}
              onChange={changeHandler}
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-light fw-semibold">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control p-3"
              placeholder="Enter password"
              value={formValues.password}
              onChange={changeHandler}
            />
          </div>

          <button
            className="btn btn-light w-100 py-3 fw-bold"
            disabled={loading}
          >
            {loading ? "Checking Access..." : "Login To Admin"}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="/" className="text-light text-decoration-none opacity-75">
            Back to website
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AdminLogin;
