
function Services() {

  const services = [

    {
      id: 1,
      title: "Wedding Decoration",
      desc:
        "Luxury floral wedding decorations with premium stage setup and elegant flower arrangements.",
      image:
        "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },

    {
      id: 2,
      title: "Mandap Decoration",
      desc:
        "Beautiful traditional mandap decorations crafted with fresh flowers and royal themes.",
      image:
        "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },

    {
      id: 3,
      title: "Birthday Decoration",
      desc:
        "Creative birthday event decoration with balloons, flowers and elegant lighting setup.",
      image:
        "https://images.pexels.com/photos/796606/pexels-photo-796606.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },

    {
      id: 4,
      title: "Car Decoration",
      desc:
        "Premium floral car decoration specially designed for weddings and luxury events.",
      image:
        "https://images.pexels.com/photos/19985833/pexels-photo-19985833.jpeg",
    },

    {
      id: 5,
      title: "Reception Decoration",
      desc:
        "Elegant reception stage setup with luxury flower decoration and lighting design.",
      image:
        "https://images.pexels.com/photos/34389342/pexels-photo-34389342.jpeg",
    },

    {
      id: 6,
      title: "Haldi Decoration",
      desc:
        "Traditional haldi decoration with yellow flower themes and beautiful floral styling.",
      image:
        "https://images.pexels.com/photos/37331187/pexels-photo-37331187.jpeg",
    },

  ];

  return (

    <div
      className="bg-light pv-page-soft"
      style={{
        minHeight: "100vh",
        paddingTop: "120px",
        paddingBottom: "80px",
      }}
    >

      {/* HERO SECTION */}

      <div className="container mb-5">

        <div
          className="position-relative overflow-hidden rounded-5 shadow-lg"
          style={{
            height: "500px",
          }}
        >

          <img
            src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="Services"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              filter: "brightness(45%)",
            }}
          />

          <div
            className="position-absolute top-50 start-50 translate-middle text-center text-white px-3"
          >

            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(3rem,7vw,6rem)",
              }}
            >
              Our Services
            </h1>

            <p
              className="fs-4 mt-3"
              style={{
                maxWidth: "800px",
              }}
            >
              Professional floral decorations and premium event
              setups crafted beautifully for every celebration.
            </p>

          </div>

        </div>

      </div>

      {/* SERVICE SECTION */}

      <div className="container">

        <div className="text-center mb-5">

          <h1 className="fw-bold display-4">
            Premium Event Services
          </h1>

          <p
            className="text-muted fs-5 mx-auto"
            style={{
              maxWidth: "700px",
            }}
          >
            We provide luxury floral decorations and professional
            event styling for weddings, birthdays and special occasions.
          </p>

        </div>

        {/* CARDS */}

        <div className="row g-4">

          {
            services.map((service) => (

              <div
                className="col-lg-4 col-md-6"
                key={service.id}
              >

                <div
                  className="card border-0 shadow-lg h-100 overflow-hidden pv-service-card"
                  style={{
                    borderRadius: "30px",
                    transition: "0.4s ease",
                  }}
                >

                  {/* IMAGE */}

                  <div className="overflow-hidden">

                    <img
                      src={service.image}
                      alt={service.title}
                      className="card-img-top"
                      loading="lazy"
                      decoding="async"
                      style={{
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />

                  </div>

                  {/* BODY */}

                  <div className="card-body text-center p-4">

                    <h3 className="fw-bold mb-3">
                      {service.title}
                    </h3>

                    <p className="text-muted">
                      {service.desc}
                    </p>

                    <button
                      className="btn btn-dark rounded-pill px-5 py-2 mt-3"
                    >
                      Book Service
                    </button>

                  </div>

                </div>

              </div>

            ))
          }

        </div>

      </div>

      {/* WHY CHOOSE US */}

      <div className="container mt-5">

        <div
          className="row align-items-center shadow-lg overflow-hidden"
          style={{
            borderRadius: "30px",
            background: "#fff",
          }}
        >

          {/* IMAGE */}

          <div className="col-lg-6 p-0">

            <img
              src="https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Why Choose Us"
              className="img-fluid w-100"
              style={{
                minHeight: "500px",
                objectFit: "cover",
              }}
            />

          </div>

          {/* CONTENT */}

          <div className="col-lg-6 p-5">

            <h1 className="fw-bold display-5 mb-4">
              Why Choose Apj's Florals?
            </h1>

            <p className="text-muted fs-5">

              We specialize in creating luxury floral decorations
              and premium event experiences with creativity,
              elegance and perfection.

            </p>

            <div className="mt-4">

              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  ✓
                </div>

                <h5 className="m-0">
                  Premium Fresh Flowers
                </h5>

              </div>

              <div className="d-flex align-items-center mb-4">

                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  ✓
                </div>

                <h5 className="m-0">
                  Professional Event Team
                </h5>

              </div>

              <div className="d-flex align-items-center">

                <div
                  className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center me-3"
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                >
                  ✓
                </div>

                <h5 className="m-0">
                  Luxury Decoration Designs
                </h5>

              </div>

            </div>

            <button
              className="btn btn-dark rounded-pill px-5 py-3 mt-5"
            >
              Contact Us
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Services;
