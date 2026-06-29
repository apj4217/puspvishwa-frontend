import { useState } from "react";
import { Link } from "react-router-dom";
import BrandLogo from "./BrandLogo";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const subscribe = (event) => {
    event.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail);

    if (!isValidEmail) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const savedEmails = JSON.parse(
      localStorage.getItem("apjs_florals_subscribers") || "[]"
    );

    if (!savedEmails.includes(trimmedEmail)) {
      localStorage.setItem(
        "apjs_florals_subscribers",
        JSON.stringify([...savedEmails, trimmedEmail])
      );
    }

    setEmail("");
    setMessage("Thank you for joining Apj's Florals updates.");
  };

  return (
    <footer className="text-light pt-5 pv-footer">
      <div className="container">
        <div className="row align-items-center g-5 pb-5">
          <div className="col-lg-6">
            <span className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4">
              Apj's Florals
            </span>

            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(2.5rem,5vw,5rem)",
                lineHeight: "1",
              }}
            >
              Elegant Floral
              <br />
              Experiences
            </h1>

            <p
              className="text-light mt-4"
              style={{
                maxWidth: "550px",
                lineHeight: "2",
                opacity: "0.75",
              }}
            >
              Premium floral decorations, modern wedding styling and luxury
              event experiences crafted beautifully for unforgettable moments.
            </p>
          </div>

          <div className="col-lg-6">
            <div className="bg-white text-dark p-5 shadow-lg rounded-5">
              <h3 className="fw-bold">
                Stay Connected
              </h3>

              <p className="text-muted mt-3">
                Get updates about our latest floral collections and luxury
                events.
              </p>

              <form className="mt-4" onSubmit={subscribe}>
                <div className="d-flex pv-footer-subscribe">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control border-0 shadow-none p-3"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />

                  <button className="btn btn-dark px-4 fw-bold">
                    Join
                  </button>
                </div>

                {message && (
                  <p className="pv-footer-message mb-0 mt-3">
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        <div className="row g-5 py-5 border-top border-secondary">
          <div className="col-lg-4">
            <BrandLogo light className="mb-4" />

            <p className="opacity-75" style={{ lineHeight: "2" }}>
              Turning celebrations into unforgettable luxury floral experiences
              with modern elegance.
            </p>

            <div className="d-flex gap-3 mt-4">
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "55px", height: "55px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-instagram"></i>
              </a>

              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "55px", height: "55px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-facebook"></i>
              </a>

              <a
                href="https://wa.me/918830764801"
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: "55px", height: "55px", fontSize: "1.3rem" }}
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-4">
              Quick Links
            </h5>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li><Link to="/" className="text-decoration-none text-light opacity-75">Home</Link></li>
              <li><Link to="/shop" className="text-decoration-none text-light opacity-75">Shop</Link></li>
              <li><Link to="/services" className="text-decoration-none text-light opacity-75">Services</Link></li>
              <li><Link to="/about" className="text-decoration-none text-light opacity-75">About</Link></li>
              <li><Link to="/contact" className="text-decoration-none text-light opacity-75">Contact</Link></li>
              <li><Link to="/privacy-policy" className="text-decoration-none text-light opacity-75">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions" className="text-decoration-none text-light opacity-75">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h5 className="fw-bold mb-4">
              Our Services
            </h5>

            <ul className="list-unstyled d-flex flex-column gap-3">
              <li className="opacity-75">Luxury Wedding Decoration</li>
              <li className="opacity-75">Premium Bouquets</li>
              <li className="opacity-75">Floral Stage Setup</li>
              <li className="opacity-75">Event Styling</li>
              <li className="opacity-75">Car Decoration</li>
            </ul>
          </div>

          <div className="col-lg-3">
            <h5 className="fw-bold mb-4">
              Contact Info
            </h5>

            <div className="d-flex flex-column gap-4">
              <div>
                <small className="opacity-50">LOCATION</small>
                <p className="m-0 opacity-75">Satara, Maharashtra, India</p>
              </div>

              <div>
                <small className="opacity-50">PHONE</small>
                <p className="m-0 opacity-75">+91 8830764801</p>
              </div>

              <div>
                <small className="opacity-50">EMAIL</small>
                <p className="m-0 opacity-75">phuspvishwa@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top border-secondary text-center py-4 mt-4">
          <p className="m-0 opacity-75">
            © 2026 Apj's Florals - Crafted With Elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
