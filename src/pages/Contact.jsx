
import { Link } from "react-router-dom";
import API from "../api";
import { useState } from "react";

function Contact() {
  const businessEmail = "phuspvishwa@gmail.com";
  const businessPhone = "918830764801";
  const whatsappText = encodeURIComponent(
    "Hello Apj's Florals, I want to enquire about floral decoration and event management."
  );
  const locationUrl =
    "https://www.google.com/maps/search/?api=1&query=Satara%2C%20Maharashtra%2C%20India";

  const [formData, setFormData] =
    useState({

      name: "",
      phone: "",
      email: "",
      eventType:
        "Wedding Decoration",
      message: "",

    });
  const [formStatus, setFormStatus] = useState(null);

  const changeHandler = (e) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,

    });

  };

  const submitHandler =
    async (e) => {

      e.preventDefault();

      setFormStatus(null);

      try {

        const response =
          await API.post(
            "/contact",
            formData
          );

        setFormStatus({
          type: "success",
          title: "Message Received",
          text:
            response.data.message ||
            "Thank you. Our team will contact you shortly.",
        });

        setFormData({
          name: "",
          phone: "",
          email: "",
          eventType: "Wedding Decoration",
          message: "",
        });

      } catch (error) {

        setFormStatus({
          type: "error",
          title: "Message Not Sent",
          text:
            error.response?.data?.message ||
            "Please check your details and try again.",
        });

      }

    };

  return (

    <div
      className="pv-page-soft"
      style={{
        background: "#f5f1ea",
        overflow: "hidden",
      }}
    >

      {/* HERO SECTION */}

      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "75vh",
        }}
      >

        {/* BACKGROUND */}

        <img
          src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Flowers"
          className="position-absolute top-0 start-0 w-100 h-100"
          fetchPriority="high"
          style={{
            objectFit: "cover",
            filter: "brightness(30%)",
          }}
        />

        {/* OVERLAY */}

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.35))",
          }}
        ></div>

        {/* CONTENT */}

        <div className="container position-relative text-white">

          <div className="row">

            <div className="col-lg-7">

              <span
                className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
              >
                CONTACT APJ'S FLORALS
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(2.8rem,7vw,4.6rem)",
                  lineHeight: "0.95",
                  letterSpacing: "-3px",
                }}
              >
                LET'S CREATE
                <br />
                SOMETHING
                <br />
                BEAUTIFUL
              </h1>

              <p
                className="mt-4"
                style={{
                  maxWidth: "650px",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  opacity: "0.9",
                }}
              >
                Get in touch with Apj's Florals for luxury floral
                decorations, elegant wedding styling and premium
                event experiences crafted beautifully.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}

      <section
        className="position-relative"
        style={{
          marginTop: "-90px",
          zIndex: "10",
        }}
      >

        <div className="container">

          <div className="row g-4">

            {/* LEFT SIDE */}

            <div className="col-lg-5">

              <div
                className="bg-dark text-white p-5 shadow-lg h-100"
                style={{
                  borderRadius: "40px",
                }}
              >

                <span
                  className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
                >
                  CONTACT INFO
                </span>

                <h1 className="fw-bold">
                  Let's Connect
                </h1>

                <p
                  className="mt-4"
                  style={{
                    lineHeight: "2",
                    opacity: "0.85",
                  }}
                >
                  We would love to hear about your
                  wedding, celebration or floral ideas.
                </p>

                {/* CONTACT ITEMS */}

                <div className="mt-5">

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-4"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.4rem",
                      }}
                    >
                      📍
                    </div>

                    <div>

                      <h5 className="fw-bold mb-1">
                        Location
                      </h5>

                      <p className="m-0">
                        <a
                          href={locationUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-white text-decoration-none opacity-75"
                        >
                          Satara, Maharashtra, India
                        </a>
                      </p>

                    </div>

                  </div>

                  <div className="d-flex align-items-center mb-4">

                    <div
                      className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-4"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.4rem",
                      }}
                    >
                      📞
                    </div>

                    <div>

                      <h5 className="fw-bold mb-1">
                        Phone
                      </h5>

                      <p className="m-0">
                        <a
                          href={`tel:+${businessPhone}`}
                          className="text-white text-decoration-none opacity-75"
                        >
                          +91 8830764801
                        </a>
                      </p>

                    </div>

                  </div>

                  <div className="d-flex align-items-center">

                    <div
                      className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center me-4"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.4rem",
                      }}
                    >
                      ✉
                    </div>

                    <div>

                      <h5 className="fw-bold mb-1">
                        Email
                      </h5>

                      <p className="m-0">
                        <a
                          href={`mailto:${businessEmail}`}
                          className="text-white text-decoration-none opacity-75"
                        >
                          {businessEmail}
                        </a>
                      </p>

                    </div>

                  </div>

                </div>

                {/* SOCIAL ICONS */}

                <div className="d-flex gap-3 mt-5">

                  {/* EMAIL */}

                  <a
                    href={`mailto:${businessEmail}?subject=Event%20Decoration%20Enquiry`}
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    aria-label="Email Apj's Florals"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.4rem",
                    }}
                  >
                    <i className="bi bi-envelope"></i>
                  </a>

                  {/* CALL */}

                  <a
                    href={`tel:+${businessPhone}`}
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    aria-label="Call Apj's Florals"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.4rem",
                    }}
                  >
                    <i className="bi bi-telephone"></i>
                  </a>

                  {/* WHATSAPP */}

                  <a
                    href={`https://wa.me/${businessPhone}?text=${whatsappText}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    aria-label="WhatsApp Apj's Florals"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1.4rem",
                    }}
                  >
                    <i className="bi bi-whatsapp"></i>
                  </a>

                </div>

              </div>

            </div>

            {/* RIGHT SIDE FORM */}

            <div className="col-lg-7">

              <div
                className="bg-white shadow-lg p-5"
                style={{
                  borderRadius: "40px",
                }}
              >

                <span
                  className="badge bg-dark px-4 py-2 rounded-pill mb-4"
                >
                  SEND MESSAGE
                </span>

                <h1
                  className="fw-bold text-dark mb-4"
                >
                  Tell Us About Your Event
                </h1>

                <form onSubmit={submitHandler}>
                  {formStatus && (
                    <div className={`pv-form-message ${formStatus.type} mb-4`}>
                      <i
                        className={`bi ${
                          formStatus.type === "success"
                            ? "bi-check-circle"
                            : "bi-exclamation-circle"
                        }`}
                      ></i>
                      <div>
                        <strong>{formStatus.title}</strong>
                        <span>{formStatus.text}</span>
                      </div>
                    </div>
                  )}

                  <div className="row">

                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Full Name
                      </label>

                      <input
                        type="text"
                        className="form-control p-3 border-0 shadow-sm"
                        placeholder="Enter your name"
                        name="name"
                        required
                        minLength="2"
                        autoComplete="name"
                        value={formData.name}
                        onChange={changeHandler}
                        style={{
                          borderRadius: "18px",
                          background: "#f5f5f5",
                        }}
                      />

                    </div>

                    <div className="col-md-6 mb-4">

                      <label className="form-label fw-semibold">
                        Phone Number
                      </label>

                      <input
                        type="text"
                        className="form-control p-3 border-0 shadow-sm"
                        placeholder="Enter phone number"
                        name="phone"
                        required
                        inputMode="tel"
                        pattern="[0-9]{10}"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={changeHandler}
                        style={{
                          borderRadius: "18px",
                          background: "#f5f5f5",
                        }}
                      />

                    </div>

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Email Address
                    </label>

                    <input
                      type="email"
                      className="form-control p-3 border-0 shadow-sm"
                      placeholder="Enter your email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={changeHandler}
                      style={{
                        borderRadius: "18px",
                        background: "#f5f5f5",
                      }}
                    />

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Event Type
                    </label>

                    <select
                      className="form-select p-3 border-0 shadow-sm"
                      name="eventType"
                      required
                      value={formData.eventType}
                      onChange={changeHandler}
                      style={{
                        borderRadius: "18px",
                        background: "#f5f5f5",
                      }}
                    >

                      <option>
                        Wedding Decoration
                      </option>

                      <option>
                        Birthday Decoration
                      </option>

                      <option>
                        Floral Bouquet
                      </option>

                      <option>
                        Luxury Event Styling
                      </option>

                    </select>

                  </div>

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Your Message
                    </label>

                    <textarea
                      rows="6"
                      className="form-control p-3 border-0 shadow-sm"
                      placeholder="Tell us about your event..."
                      name="message"
                      required
                      minLength="10"
                      value={formData.message}
                      onChange={changeHandler}

                      style={{
                        borderRadius: "20px",
                        background: "#f5f5f5",
                        resize: "none",
                      }}
                    ></textarea>

                  </div>

                  <button
                    className="btn btn-dark btn-lg rounded-pill px-5 py-3 fw-bold w-100"
                  >
                    Send Message
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="py-5">

        <div className="container py-5">

          <div
            className="bg-dark text-white text-center p-5 shadow-lg"
            style={{
              borderRadius: "45px",
            }}
          >

            <span
              className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
            >
              Apj's Florals
            </span>

            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(3rem,7vw,6rem)",
                lineHeight: "1",
              }}
            >
              Let's Make
              <br />
              Your Event
              <br />
              Unforgettable
            </h1>

            <p
              className="mt-4 mx-auto"
              style={{
                maxWidth: "750px",
                lineHeight: "2",
                fontSize: "1.2rem",
                opacity: "0.85",
              }}
            >
              Elegant floral experiences crafted beautifully
              for luxury weddings and celebrations.
            </p>

            <Link
              to="/services"
              className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold mt-4"
            >
              Explore Services
            </Link>

          </div>

        </div>

      </section>

    </div>

  );
}

export default Contact;
