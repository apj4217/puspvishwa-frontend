import { Link } from "react-router-dom";

function Home() {

  return (

    <div
      className="pv-page-dark"
      style={{
        background: "#0f0f0f",
        overflow: "hidden",
      }}
    >

      {/* HERO SECTION */}

      <section
        className="position-relative"
        style={{
          minHeight: "100vh",
        }}
      >

        {/* BACKGROUND */}

        <img
          src="https://images.pexels.com/photos/931162/pexels-photo-931162.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Flowers"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            objectFit: "cover",
            filter: "brightness(28%)",
          }}
        />

        {/* DARK OVERLAY */}

        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.88), rgba(0,0,0,0.35))",
          }}
        ></div>

        {/* MAIN CONTENT */}

        <div
          className="container position-relative"
          style={{
            minHeight: "100vh",
          }}
        >

          <div
            className="row align-items-center"
            style={{
              minHeight: "100vh",
            }}
          >

            {/* LEFT SIDE */}

            <div className="col-lg-7">

              <span
                className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
                style={{
                  letterSpacing: "2px",
                  fontWeight: "600",
                }}
              >
                PREMIUM FLORAL EXPERIENCE
              </span>

              <h1
                className="fw-bold text-white"
                style={{
                  fontSize: "clamp(4rem,10vw,9rem)",
                  lineHeight: "0.95",
                  letterSpacing: "-4px",
                }}
              >
                APJ'S
                <br />
                FLORALS
              </h1>

              <p
                className="text-light mt-4"
                style={{
                  maxWidth: "650px",
                  fontSize: "1.2rem",
                  lineHeight: "2",
                  opacity: "0.85",
                }}
              >
                Luxury floral styling, modern wedding decorations
                and unforgettable event experiences crafted with
                elegance, creativity and perfection.
              </p>

              <div
                className="d-flex flex-wrap gap-3 mt-5"
              >

                <Link
                  to="/services"
                  className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold shadow"
                >
                  Explore Services
                </Link>

                <Link
                  to="/contact"
                  className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-bold"
                >
                  Contact Us
                </Link>

              </div>

            </div>

            {/* RIGHT FLOATING LUXURY CARD */}

            <div className="col-lg-5 d-none d-lg-block">

              <div
                className="bg-white shadow-lg p-4 ms-auto"
                style={{
                  width: "370px",
                  borderRadius: "40px",
                  transform: "rotate(-3deg)",
                }}
              >

                <img
                  src="https://images.pexels.com/photos/33852468/pexels-photo-33852468.jpeg"
                  alt="Luxury Event"
                  className="img-fluid"
                  style={{
                    borderRadius: "30px",
                    height: "260px",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />

                <div className="mt-4 text-dark">

                  <div
                    className="d-flex justify-content-between align-items-center"
                  >

                    <div>

                      <small className="text-muted">
                        FEATURED EVENT
                      </small>

                      <h3 className="fw-bold">
                        Royal Wedding Setup
                      </h3>

                    </div>

                    <div
                      className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1.5rem",
                      }}
                    >
                      ✦
                    </div>

                  </div>

                  <p
                    className="text-muted mt-3"
                    style={{
                      lineHeight: "1.8",
                    }}
                  >
                    Elegant floral stage decoration
                    with luxury premium styling.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING INFO SECTION */}

      <section
        className="position-relative"
        style={{
          marginTop: "-90px",
          zIndex: "10",
        }}
      >

        <div className="container">

          <div
            className="row bg-white text-dark shadow-lg g-4 py-5 text-center"
            style={{
              borderRadius: "40px",
            }}
          >

            <div className="col-md-3">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                }}
              >
                500+
              </h1>

              <p className="text-muted m-0">
                Happy Clients
              </p>

            </div>

            <div className="col-md-3">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                }}
              >
                150+
              </h1>

              <p className="text-muted m-0">
                Wedding Events
              </p>

            </div>

            <div className="col-md-3">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                }}
              >
                5★
              </h1>

              <p className="text-muted m-0">
                Premium Ratings
              </p>

            </div>

            <div className="col-md-3">

              <h1
                className="fw-bold"
                style={{
                  fontSize: "3rem",
                }}
              >
                24/7
              </h1>

              <p className="text-muted m-0">
                Client Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* MODERN SHOWCASE */}

      <section className="py-5">

        <div className="container py-5">

          <div className="row g-4">

            {/* BIG IMAGE */}

            <div className="col-lg-7">

              <div
                className="position-relative overflow-hidden"
                style={{
                  borderRadius: "45px",
                  height: "700px",
                }}
              >

                <img
                  src="https://images.pexels.com/photos/18530977/pexels-photo-18530977.jpeg"
                  alt="Wedding"
                  className="w-100 h-100"
                  style={{
                    objectFit: "cover",
                  }}
                />

                <div
                  className="position-absolute bottom-0 start-0 p-5"
                  style={{
                    width: "100%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                  }}
                >

                  <span
                    className="badge bg-light text-dark px-4 py-2 rounded-pill mb-3"
                  >
                    SIGNATURE DESIGN
                  </span>

                  <h1
                    className="fw-bold text-white"
                    style={{
                      fontSize: "clamp(2.5rem,5vw,5rem)",
                    }}
                  >
                    Luxury Wedding
                    <br />
                    Decoration
                  </h1>

                </div>

              </div>

            </div>

            {/* SIDE CONTENT */}

            <div className="col-lg-5">

              <div className="d-flex flex-column gap-4 h-100">

                {/* CARD 1 */}

                <div
                  className="bg-white text-dark p-5 shadow-lg"
                  style={{
                    borderRadius: "40px",
                    minHeight: "330px",
                  }}
                >

                  <span
                    className="badge bg-dark px-4 py-2 rounded-pill mb-4"
                  >
                    OUR STORY
                  </span>

                  <h2
                    className="fw-bold"
                    style={{
                      lineHeight: "1.3",
                    }}
                  >
                    Modern Floral
                    Experiences Crafted
                    Beautifully
                  </h2>

                  <p
                    className="text-muted mt-4"
                    style={{
                      lineHeight: "2",
                    }}
                  >
                    We create luxurious floral
                    experiences inspired by elegance,
                    creativity and modern aesthetics.
                  </p>

                </div>

                {/* CARD 2 */}

                <div
                  className="position-relative overflow-hidden shadow-lg"
                  style={{
                    borderRadius: "40px",
                    height: "330px",
                  }}
                >

                  <img
                    src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Bouquet"
                    className="w-100 h-100"
                    style={{
                      objectFit: "cover",
                    }}
                  />

                  <div
                    className="position-absolute bottom-0 start-0 p-4"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.95), transparent)",
                    }}
                  >

                    <h2 className="fw-bold text-white">
                      Premium Bouquets
                    </h2>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* MINIMAL LUXURY SECTION */}

      <section
        className="py-5 bg-white text-dark"
      >

        <div className="container py-5">

          <div className="row align-items-center">

            <div className="col-lg-5">

              <span
                className="badge bg-dark px-4 py-2 rounded-pill mb-4"
              >
                WHY CHOOSE US
              </span>

              <h1
                className="fw-bold"
                style={{
                  fontSize: "clamp(3rem,6vw,5rem)",
                  lineHeight: "1.1",
                }}
              >
                Unique.
                <br />
                Elegant.
                <br />
                Premium.
              </h1>

            </div>

            <div className="col-lg-7">

              <p
                className="text-muted"
                style={{
                  fontSize: "1.2rem",
                  lineHeight: "2",
                }}
              >
                Apj's Florals specializes in modern floral
                styling and premium event decoration.
                Every celebration is transformed into a
                luxurious experience with artistic floral
                arrangements and elegant setups.
              </p>

              <div
                className="d-flex flex-wrap gap-3 mt-5"
              >

                <div
                  className="bg-dark text-white px-4 py-3 rounded-pill"
                >
                  Luxury Events
                </div>

                <div
                  className="bg-dark text-white px-4 py-3 rounded-pill"
                >
                  Premium Flowers
                </div>

                <div
                  className="bg-dark text-white px-4 py-3 rounded-pill"
                >
                  Modern Designs
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL PREMIUM SECTION */}

      <section
        className="position-relative"
        style={{
          minHeight: "90vh",
        }}
      >

        <img
          src="https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=2000"
          alt="Luxury"
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
              "rgba(0,0,0,0.65)",
          }}
        ></div>

        <div
          className="container position-relative d-flex flex-column justify-content-center align-items-center text-center"
          style={{
            minHeight: "90vh",
          }}
        >

          <span
            className="badge bg-light text-dark px-4 py-2 rounded-pill mb-4"
          >
            BOOK YOUR EVENT
          </span>

          <h1
            className="fw-bold text-white"
            style={{
              fontSize: "clamp(3rem,8vw,7rem)",
              lineHeight: "1",
            }}
          >
            Turning Moments
            <br />
            Into Luxury
          </h1>

          <p
            className="text-light mt-4"
            style={{
              maxWidth: "850px",
              fontSize: "1.2rem",
              lineHeight: "2",
            }}
          >
            Premium floral decorations crafted beautifully
            for unforgettable celebrations.
          </p>

          <Link
            to="/contact"
            className="btn btn-light btn-lg rounded-pill px-5 py-3 fw-bold mt-4 shadow"
          >
            Contact Now
          </Link>

        </div>

      </section>

    </div>

  );
}

export default Home;
