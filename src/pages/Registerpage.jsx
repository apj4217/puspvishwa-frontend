import API from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Registerpage() {
  const navigate = useNavigate();

  const [formvalues, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: ""
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {

    setForm({
      ...formvalues,
      [e.target.name]: e.target.value,
    });

  };

  const reset = () => {

    setForm({
      name: "",
      email: "",
      password: "",
      confirmpassword: ""
    });

    setError("");

  };

  const submitHandler = async (e) => {

  e.preventDefault();

  const name = formvalues.name.trim();
  const email = formvalues.email.trim().toLowerCase();
  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,72}$/;

  if (name.length < 2) {
    setError("Please enter your full name.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Please enter a valid email address.");
    return;
  }

  if (!strongPassword.test(formvalues.password)) {
    setError("Password needs 8+ characters with uppercase, lowercase, number and special character.");
    return;
  }

  if (
    formvalues.password !==
    formvalues.confirmpassword
  ) {

    setError(
      "Password and Confirm Password do not match!"
    );

    return;

  }

  setError("");
  setLoading(true);

  try {

    await API.post(
        "/auth/register",
        {
          name,
          email,
          password: formvalues.password,
        }
      );

    reset();
    navigate("/login", { replace: true });

  } catch (error) {

    setError(error.response?.data?.message || "Registration failed");

  } finally {
    setLoading(false);

  }
  }

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

        {/* GLOW EFFECT */}

        <div
          className="position-absolute"
          style={{
            width: "350px",
            height: "350px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "50%",
            bottom: "-100px",
            left: "-100px",
            filter: "blur(100px)",
          }}
        ></div>

        {/* MAIN */}

        <div className="container position-relative h-100">

          <div className="row align-items-center min-vh-100">

            {/* LEFT SIDE */}

            <div className="col-lg-6 text-white d-none d-lg-block">

              <span
                className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
              >
                JOIN EVARA FLORALS
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(2.8rem,6vw,5rem)",
                  lineHeight: "0.9",
                  letterSpacing: "-3px",
                }}
              >
                CREATE
                <br />
                YOUR
                <br />
                LUXURY
                <br />
                ACCOUNT
              </h1>

              <p
                className="mt-4"
                style={{
                  maxWidth: "480px",
                  lineHeight: "1.8",
                  fontSize: "0.95rem",
                  opacity: "0.85",
                }}
              >
                Join Evara Florals & Events and explore
                premium floral styling,
                elegant decorations and
                unforgettable luxury experiences.
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
                className="bg-white shadow-lg p-3 mx-auto"
                style={{
                  maxWidth: "420px",
                  borderRadius: "26px",
                }}
              >

                {/* TOP */}

                <div className="text-center mb-3">

                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-circle mb-3"
                    style={{
                      width: "65px",
                      height: "65px",
                      fontSize: "1.5rem",
                    }}
                  >
                    ✦
                  </div>

                  <h1
                    className="fw-bold text-dark"
                    style={{
                      fontSize: "2.3rem",
                      letterSpacing: "-2px",
                    }}
                  >
                    Register
                  </h1>

                  <p
                    className="text-muted mt-2"
                    style={{
                      lineHeight: "1.7",
                      fontSize: "0.9rem",
                    }}
                  >
                    Create your account and start
                    your floral luxury journey.
                  </p>

                </div>

                {/* FORM */}

                <form onSubmit={submitHandler}>

                  {/* NAME */}

                  <div className="mb-2">

                    <label className="form-label fw-semibold">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control border-0 p-2 shadow-sm"
                      placeholder="Enter your full name"
                      value={formvalues.name}
                      onChange={changeHandler}
                      name="name"
                      required
                      minLength="2"
                      autoComplete="name"
                      style={{
                        borderRadius: "15px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {/* EMAIL */}

                  <div className="mb-2">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control border-0 p-2 shadow-sm"
                      placeholder="Enter your email"
                      value={formvalues.email}
                      onChange={changeHandler}
                      name="email"
                      required
                      autoComplete="email"
                      style={{
                        borderRadius: "15px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {/* PASSWORD */}

                  <div className="mb-2">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control border-0 p-2 shadow-sm"
                      placeholder="Create password"
                      value={formvalues.password}
                      onChange={changeHandler}
                      name="password"
                      required
                      minLength="8"
                      autoComplete="new-password"
                      style={{
                        borderRadius: "15px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {/* CONFIRM PASSWORD */}

                  <div className="mb-3">

                    <label className="form-label fw-semibold">
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      className="form-control border-0 p-2 shadow-sm"
                      placeholder="Confirm password"
                      value={formvalues.confirmpassword}
                      onChange={changeHandler}
                      name="confirmpassword"
                      required
                      minLength="8"
                      autoComplete="new-password"
                      style={{
                        borderRadius: "15px",
                        background: "#f3f3f3",
                      }}
                    />

                  </div>

                  {
                    error && (
                      <div
                        className="alert alert-danger py-2 mt-2"
                        style={{
                          borderRadius: "12px",
                          fontSize: "0.9rem",
                        }}
                      >
                        {error}
                      </div>
                    )
                  }
                  {/* BUTTON */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-dark w-100 py-2 fw-bold"
                    style={{
                      borderRadius: "15px",
                      fontSize: "0.95rem",
                    }}
                  >
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>

                </form>

                {/* DIVIDER */}

                <div
                  className="text-center my-2 text-muted"
                  style={{
                    fontSize: "0.85rem",
                  }}
                >
                  OR SIGN UP WITH
                </div>

                {/* SOCIAL BUTTONS */}

                <div className="d-flex gap-2">

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "14px",
                    }}
                  >
                    <i className="bi bi-google"></i>
                  </button>

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "14px",
                    }}
                  >
                    <i className="bi bi-facebook"></i>
                  </button>

                  <button
                    className="btn btn-outline-dark w-100 py-2"
                    style={{
                      borderRadius: "14px",
                    }}
                  >
                    <i className="bi bi-instagram"></i>
                  </button>

                </div>

                {/* LOGIN */}

                <p
                  className="text-center mt-3 mb-0"
                  style={{
                    fontSize: "0.88rem",
                  }}
                >

                  Already have an account?

                  <Link
                    to="/login"
                    className="fw-bold text-dark text-decoration-none ms-2"
                  >
                    Login
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


export default Registerpage;
