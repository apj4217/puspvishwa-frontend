
import { Link } from "react-router-dom";

function About() {

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
          minHeight: "100vh",
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
            filter: "brightness(28%)",
          }}
        />

        {/* OVERLAY */}

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.3))",
          }}
        ></div>

        {/* CONTENT */}

        <div className="container position-relative text-white">

          <div className="row align-items-center">

            <div className="col-lg-7">

              <span
                className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
                style={{
                  letterSpacing: "2px",
                }}
              >
                ABOUT OUR BRAND
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(2.8rem,7vw,5.5rem)",
                  lineHeight: "0.95",
                  letterSpacing: "-4px",
                }}
              >
                WE DON'T
                <br />
                JUST DECORATE
                <br />
                WE CREATE
                <br />
                FEELINGS
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
                Apj's Florals blends modern floral aesthetics,
                luxury event styling and artistic creativity
                to create unforgettable celebrations that
                feel timeless and elegant.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PREMIUM SECTION */}

      <section
        className="position-relative"
        style={{
          marginTop: "-100px",
          zIndex: "10",
        }}
      >

        <div className="container">

          <div
            className="bg-white shadow-lg overflow-hidden"
            style={{
              borderRadius: "45px",
            }}
          >

            <div className="row g-0 align-items-center">

              {/* IMAGE */}

              <div className="col-lg-6">

                <img
                  src="https://images.pexels.com/photos/35130817/pexels-photo-35130817.jpeg"
                  alt="Wedding"
                  className="img-fluid w-100"
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: "750px",
                    objectFit: "cover",
                  }}
                />

              </div>

              {/* CONTENT */}

              <div className="col-lg-6 p-5">

                <span
                  className="badge bg-dark px-4 py-2 rounded-pill mb-4"
                >
                  OUR VISION
                </span>

                <h1
                  className="fw-bold text-dark"
                  style={{
                    fontSize: "clamp(2.5rem,5vw,5rem)",
                    lineHeight: "1.1",
                  }}
                >
                  Every Detail
                  <br />
                  Tells A Story
                </h1>

                <p
                  className="text-muted mt-4"
                  style={{
                    lineHeight: "2",
                    fontSize: "1.1rem",
                  }}
                >
                  We believe celebrations should feel personal,
                  emotional and unforgettable. Our floral styling
                  combines elegance, modern aesthetics and luxury
                  craftsmanship to create experiences people remember forever.
                </p>

                <p
                  className="text-muted"
                  style={{
                    lineHeight: "2",
                    fontSize: "1.1rem",
                  }}
                >
                  From premium wedding stages to intimate floral
                  moments, every arrangement is designed with
                  artistic perfection and timeless beauty.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-5">

                  <div
                    className="bg-dark text-white px-4 py-3 rounded-pill"
                  >
                    Modern Styling
                  </div>

                  <div
                    className="bg-dark text-white px-4 py-3 rounded-pill"
                  >
                    Premium Flowers
                  </div>

                  <div
                    className="bg-dark text-white px-4 py-3 rounded-pill"
                  >
                    Elegant Experiences
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MODERN CARDS */}

      <section className="py-5">

        <div className="container py-5">

          <div className="row g-4">

            {/* CARD 1 */}

            <div className="col-lg-4">

              <div
                className="bg-dark text-white p-5 h-100 shadow-lg"
                style={{
                  borderRadius: "40px",
                }}
              >

                <div
                  className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                  }}
                >
                  ✦
                </div>

                <h2 className="fw-bold">
                  Artistic Concepts
                </h2>

                <p
                  className="mt-4"
                  style={{
                    lineHeight: "2",
                    opacity: "0.85",
                  }}
                >
                  Every decoration is thoughtfully designed
                  with luxury aesthetics and artistic floral balance.
                </p>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="col-lg-4">

              <div
                className="bg-white p-5 h-100 shadow-lg"
                style={{
                  borderRadius: "40px",
                }}
              >

                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                  }}
                >
                  ✦
                </div>

                <h2 className="fw-bold text-dark">
                  Emotional Experiences
                </h2>

                <p
                  className="text-muted mt-4"
                  style={{
                    lineHeight: "2",
                  }}
                >
                  We design spaces that create warmth,
                  happiness and unforgettable emotional memories.
                </p>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="col-lg-4">

              <div
                className="bg-dark text-white p-5 h-100 shadow-lg"
                style={{
                  borderRadius: "40px",
                }}
              >

                <div
                  className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center mb-4"
                  style={{
                    width: "70px",
                    height: "70px",
                    fontSize: "1.5rem",
                  }}
                >
                  ✦
                </div>

                <h2 className="fw-bold">
                  Timeless Luxury
                </h2>

                <p
                  className="mt-4"
                  style={{
                    lineHeight: "2",
                    opacity: "0.85",
                  }}
                >
                  Inspired by modern elegance and timeless
                  beauty crafted for premium celebrations.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* IMAGE + TEXT SECTION */}

      <section className="pb-5">

        <div className="container">

          <div className="row align-items-center g-5">

            {/* LEFT */}

            <div className="col-lg-5">

              <span
                className="badge bg-dark px-4 py-2 rounded-pill mb-4"
              >
                OUR PHILOSOPHY
              </span>

              <h1
                className="fw-bold text-dark"
                style={{
                  fontSize: "clamp(3rem,6vw,5rem)",
                  lineHeight: "1",
                }}
              >
                Luxury
                <br />
                Should Feel
                <br />
                Natural
              </h1>

              <p
                className="text-muted mt-4"
                style={{
                  lineHeight: "2",
                  fontSize: "1.1rem",
                }}
              >
                Our designs focus on elegance without excess.
                Clean aesthetics, premium flowers and modern
                styling come together to create timeless celebrations.
              </p>

              <Link
                to="/contact"
                className="btn btn-dark btn-lg rounded-pill px-5 py-3 mt-4 fw-bold"
              >
                Contact Us
              </Link>

            </div>

            {/* RIGHT */}

            <div className="col-lg-7">

              <div
                className="overflow-hidden shadow-lg"
                style={{
                  borderRadius: "45px",
                }}
              >

                <img
                  src="https://images.pexels.com/photos/17023112/pexels-photo-17023112.jpeg"
                  alt="Luxury Decoration"
                  className="img-fluid w-100"
                  style={{
                    height: "650px",
                    objectFit: "cover",
                  }}
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL SECTION */}

      <section className="py-5">

        <div className="container">

          <div
            className="position-relative overflow-hidden shadow-lg"
            style={{
              borderRadius: "50px",
              minHeight: "600px",
            }}
          >

            <img
              src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2000"
              alt="Luxury Event"
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                objectFit: "cover",
                filter: "brightness(30%)",
              }}
            />

            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.35))",
              }}
            ></div>

            <div
              className="position-relative d-flex flex-column justify-content-center align-items-center text-center text-white p-5"
              style={{
                minHeight: "600px",
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
                  fontSize: "clamp(3rem,8vw,7rem)",
                  lineHeight: "1",
                }}
              >
                Designed
                <br />
                To Be
                <br />
                Remembered
              </h1>

              <p
                className="mt-4"
                style={{
                  maxWidth: "800px",
                  lineHeight: "2",
                  fontSize: "1.2rem",
                  opacity: "0.9",
                }}
              >
                Beautiful floral experiences created with
                elegance, creativity and timeless luxury.
              </p>

              <Link
                to="/services"
                className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold mt-4 shadow"
              >
                Explore Services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </div>

  );
}

export default About;
