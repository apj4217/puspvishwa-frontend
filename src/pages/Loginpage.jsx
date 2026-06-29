
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../api";

function Loginpage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {

  e.preventDefault();

  const email = formvalues.email.trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !formvalues.password) {
    setErrorMessage("Enter a valid email address and password.");
    return;
  }

  setErrorMessage("");
  setLoading(true);

  try {

    const response =
    await API.post(
      "/auth/login",
      {
        email,
        password: formvalues.password,
      }
    );

    localStorage.setItem(
      "token",
      response.data.token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(
        response.data.user
      )
    );

    const destination =
      location.state?.from ||
      (response.data.user.role === "admin" ? "/admin" : "/shop");

    navigate(destination, { replace: true });

  } catch (error) {

    setErrorMessage(error.response?.data?.message || "Unable to login. Please try again.");

  } finally {
    setLoading(false);

  }

};
  const [formvalues, setForm] = useState({
    email:"",
    password:""
  })
   const changeHandler = (e)=>{
    setForm({
      ...formvalues,
      [e.target.name]: e.target.value,
    });
   };
   
  return (
    <div>
      <div

        className="position-relative overflow-hidden pv-page-dark pv-auth-page"
        style={{
          minHeight: "100vh",
          paddingTop: "96px",
          paddingBottom: "48px",
          background: "#0a0a0a",
        }}
      >

        {/* BACKGROUND */}

        <img
          src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="bg"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(22%)",
          }}
        />

        {/* OVERLAY */}

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.45))",
          }}
        ></div>

        {/* GLOW */}

        <div
          className="position-absolute"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "50%",
            top: "-100px",
            right: "-100px",
            filter: "blur(100px)",
          }}
        ></div>

        {/* MAIN */}

        <div className="container position-relative h-100">

          <div
            className="row align-items-center min-vh-100"
          >

            {/* LEFT SIDE */}

            <div className="col-lg-6 text-white d-none d-lg-block">

              <span
                className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
              >
                Evara Florals & Events
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(3rem,7vw,5.5rem)",
                  lineHeight: "0.9",
                  letterSpacing: "-3px",
                }}
              >
                ELEGANCE
                <br />
                BEGINS
                <br />
                HERE
              </h1>

              <p
                className="mt-4"
                style={{
                  maxWidth: "500px",
                  lineHeight: "1.9",
                  fontSize: "1rem",
                  opacity: "0.85",
                }}
              >
                Access your premium floral experience
                and luxury event collections crafted beautifully.
              </p>

              {/* STATS */}

              <div className="d-flex gap-5 mt-5">

                <div>

                  <h3 className="fw-bold">
                    500+
                  </h3>

                  <p className="opacity-75">
                    Events
                  </p>

                </div>

                <div>

                  <h3 className="fw-bold">
                    10K+
                  </h3>

                  <p className="opacity-75">
                    Clients
                  </p>

                </div>

                <div>

                  <h3 className="fw-bold">
                    5★
                  </h3>

                  <p className="opacity-75">
                    Ratings
                  </p>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="col-lg-6">

              <div
                className="bg-white shadow-lg p-4 mx-auto"
                style={{
                  maxWidth: "460px",
                  borderRadius: "30px",
                }}
              >

                {/* TOP */}

                <div className="text-center mb-4">

                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-circle mb-3"
                    style={{
                      width: "75px",
                      height: "75px",
                      fontSize: "1.7rem",
                    }}
                  >
                    ✦
                  </div>

                  <h1
                    className="fw-bold text-dark"
                    style={{
                      fontSize: "2.7rem",
                      letterSpacing: "-2px",
                    }}
                  >
                    Welcome
                  </h1>

                  <p
                    className="text-muted mt-2"
                    style={{
                      lineHeight: "1.8",
                      fontSize: "0.95rem",
                    }}
                  >
                    Login and continue exploring
                    luxury floral experiences.
                  </p>

                </div>

                {/* FORM */}

                <form onSubmit={submitHandler}>

                  {/* EMAIL */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control border-0 p-3 shadow-sm"
                      placeholder="Enter your email"
                     value={formvalues.email}
                      onChange={changeHandler}
                      name="email"
                      required
                      autoComplete="email"
                      style={{
                        borderRadius: "18px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {/* PASSWORD */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control border-0 p-3 shadow-sm"
                      placeholder="Enter password"
                      value={formvalues.password}
                      onChange={changeHandler}
                      name="password"
                      required
                      autoComplete="current-password"
                      style={{
                        borderRadius: "18px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {errorMessage && (
                    <div className="alert alert-danger py-2" role="alert">
                      {errorMessage}
                    </div>
                  )}

                  {/* OPTIONS */}

                  <div className="d-flex justify-content-between align-items-center mb-3">

                    <div className="form-check">

                      <input
                        type="checkbox"
                        className="form-check-input"
                      />

                      <label className="form-check-label">
                        Remember
                      </label>

                    </div>

                    <a
                      href="/"
                      className="text-decoration-none fw-semibold text-dark"
                      style={{
                        fontSize: "0.9rem",
                      }}
                    >
                      Forgot Password?
                    </a>

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-dark w-100 py-3 fw-bold"
                    style={{
                      borderRadius: "18px",
                      fontSize: "1rem",
                    }}
                  >
                    {loading ? "Signing In..." : "Login Account"}
                  </button>

                </form>

                {/* DIVIDER */}

                <div className="text-center my-3 text-muted">
                  OR CONTINUE WITH
                </div>

                {/* SOCIAL */}

                <div className="d-flex gap-3">

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "15px",
                    }}
                  >
                    <i className="bi bi-google fs-5"></i>
                  </button>

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "15px",
                    }}
                  >
                    <i className="bi bi-facebook fs-5"></i>
                  </button>

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "15px",
                    }}
                  >
                    <i className="bi bi-instagram fs-5"></i>
                  </button>

                </div>

                {/* REGISTER */}

                <p
                  className="text-center mt-4 mb-0"
                  style={{
                    fontSize: "0.95rem",
                  }}
                >

                  New to Evara Florals & Events?

                  <Link
                    to="/register"
                    className="fw-bold text-dark text-decoration-none ms-2"
                  >
                    Create Account
                  </Link>

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>

  );
}

export default Loginpage;

