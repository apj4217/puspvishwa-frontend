
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BrandLogo from "./BrandLogo";

function Navbar() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return Boolean(localStorage.getItem("token") && localStorage.getItem("user"));
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = () => {
      setIsLoggedIn(Boolean(localStorage.getItem("token") && localStorage.getItem("user")));
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, [location.pathname]);

  const submitSearch = (event) => {
    event.preventDefault();

    const query = searchValue.trim();
    closeMobileMenu();

    if (!query) {
      navigate("/shop");
      return;
    }

    navigate(`/shop?search=${encodeURIComponent(query)}`);
  };

  const closeMobileMenu = () => {
    const menu = document.getElementById("mainNavbar");

    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }

    setIsMenuOpen(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    closeMobileMenu();
    navigate("/");
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
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >

          <span className="navbar-toggler-icon"></span>

        </button>

        {/* NAVBAR */}

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
              onClick={closeMobileMenu}
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

            {/* LOGIN / LOGOUT */}

            {isLoggedIn ? (
              <button
                type="button"
                onClick={logout}
                className="border-0 text-decoration-none d-flex align-items-center justify-content-center"
                title="Logout"
                aria-label="Logout"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg,#ffffff,#dddddd)",
                }}
              >
                <i
                  className="bi bi-box-arrow-right text-dark"
                  style={{
                    fontSize: "1.1rem",
                  }}
                ></i>
              </button>
            ) : (
              <Link
                to="/login"
                className="text-decoration-none d-flex align-items-center justify-content-center"
                onClick={closeMobileMenu}
                title="Login"
                aria-label="Login"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg,#ffffff,#dddddd)",
                }}
              >
                <i
                  className="bi bi-person text-dark"
                  style={{
                    fontSize: "1.1rem",
                  }}
                ></i>
              </Link>
            )}

          </div>

        </div>

      </div>

    </nav>

  );
}

export default Navbar;

