import { useContext } from "react";
import { CardContext } from "./CardContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CardContext);

  const addProduct = () => {
    addToCart(product);
    alert("Added To Cart");
  };

  return (
    <div className="col-lg-3 col-md-6">
      <div className="card h-100 border-0 shadow-lg pv-product-card">
        <img
          src={product.image}
          alt={product.name}
          className="card-img-top"
          loading="lazy"
          decoding="async"
          style={{
            height: "300px",
            objectFit: "cover",
          }}
        />

        <div className="card-body text-center">
          <h3 className="fw-bold">
            {product.name}
          </h3>

          <h4 className="text-success pv-product-price">
            ₹ {product.price}
          </h4>

          <button
            onClick={addProduct}
            className="btn btn-dark px-4 py-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
