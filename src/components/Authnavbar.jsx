
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function AuthNavbar() {

  return (

    <nav
      className="position-fixed top-0 start-0 w-100"
      style={{
        zIndex: "9999",
      }}
    >

      <div className="container-fluid px-5 py-4">

        <div className="d-flex align-items-center">

          {/* LOGO */}

          <BrandLogo light className="me-5" />

          {/* BUTTONS */}

          <div className="d-flex gap-3">

            {/* HOME */}

            <Link
              to="/"
              className="btn btn-light rounded-pill px-4 fw-semibold"
            >
              Home
            </Link>

            {/* SHOP */}

            <Link
              to="/shop"
              className="btn btn-outline-light rounded-pill px-4 fw-semibold"
            >
              Shop
            </Link>

          </div>

        </div>

      </div>

    </nav>

  );
}

export default AuthNavbar;

