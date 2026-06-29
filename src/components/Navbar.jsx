
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const submitSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();

    if (!query) {
      navigate("/shop");
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  return (

    <nav
      className="navbar navbar-expand-lg position-fixed top-0 start-0 w-100 pv-navbar"
      style={{
        zIndex: "9999",
        background: "rgba(10,10,10,0.55)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >

      <div className="container py-2">

        {/* LOGO */}

        <BrandLogo light compact className="navbar-brand m-0" />

        {/* MOBILE TOGGLE */}

        <button
          className="navbar-toggler border-0 shadow-none p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* NAVBAR */}

        <div
          className="collapse navbar-collapse"
          id="mainNavbar"
        >

          {/* CENTER LINKS */}

          <ul
            className="navbar-nav mx-auto gap-lg-4 text-center mt-3 mt-lg-0"
          >

            <li className="nav-item">

              <Link
                to="/"
                className="nav-link text-white fw-semibold"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/shop"
                className="nav-link text-white fw-semibold"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Shop
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/services"
                className="nav-link text-white fw-semibold"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Services
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/about"
                className="nav-link text-white fw-semibold"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                About
              </Link>

            </li>

            <li className="nav-item">

              <Link
                to="/contact"
                className="nav-link text-white fw-semibold"
                style={{
                  fontSize: "0.95rem",
                }}
              >
                Contact
              </Link>

            </li>

          </ul>

          {/* RIGHT SIDE */}

          <div
            className="d-flex align-items-center justify-content-center gap-2 mt-3 mt-lg-0"
          >

            {/* SEARCH */}

            <form
              className="pv-navbar-search"
              onSubmit={submitSearch}
            >
              <i className="bi bi-search"></i>
              <input
                type="search"
                placeholder="Search flowers..."
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                aria-label="Search products"
              />
            </form>

            {/* CART */}

            <Link
              to="/cart"
              className="text-decoration-none d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >

              <i
                className="bi bi-bag text-white"
                style={{
                  fontSize: "1rem",
                }}
              ></i>

            </Link>

            {/* LOGIN */}

            <Link
              to="/login"
              className="text-decoration-none d-flex align-items-center justify-content-center"
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg,#ffffff,#dddddd)",
              }}
            >

              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                alt="login"
                style={{
                  width: "17px",
                  height: "17px",
                  objectFit: "contain",
                }}
              />

            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;

