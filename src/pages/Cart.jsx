import { useContext, useState } from "react";
import { CardContext } from "../components/CardContext";
import API from "../api";

const paymentModes = [
  {
    id: "COD",
    title: "Cash on Delivery",
    note: "Pay after final confirmation",
    icon: "bi-cash-stack",
  },
  {
    id: "UPI",
    title: "UPI",
    note: "Google Pay, PhonePe, Paytm",
    icon: "bi-phone",
  },
  {
    id: "CARD",
    title: "Credit / Debit Card",
    note: "Visa, Mastercard, RuPay",
    icon: "bi-credit-card",
  },
  {
    id: "NET_BANKING",
    title: "Net Banking",
    note: "All major banks supported",
    icon: "bi-bank",
  },
];

const upiApps = [
  "Google Pay",
  "PhonePe",
  "Paytm",
  "BHIM UPI",
  "Amazon Pay",
];

const banks = [
  "State Bank of India",
  "HDFC Bank",
  "ICICI Bank",
  "Axis Bank",
  "Bank of Maharashtra",
];

function Cart() {
  const {
    cartItems,
    removeFromCart,
    totalPrice,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
  } = useContext(CardContext);

  const [paymentMethod, setPaymentMethod] = useState("COD");
  const [shippingAddress, setShippingAddress] = useState("Satara Maharashtra");
  const [placingOrder, setPlacingOrder] = useState(false);
  const [upiApp, setUpiApp] = useState("Google Pay");
  const [upiId, setUpiId] = useState("");
  const [selectedBank, setSelectedBank] = useState("State Bank of India");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    number: "",
    expiry: "",
    cvv: "",
  });

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const validatePayment = () => {
    if (paymentMethod === "UPI") {
      if (!/^[\w.-]+@[\w.-]+$/.test(upiId.trim())) {
        alert("Please enter a valid UPI ID");
        return false;
      }
    }

    if (paymentMethod === "CARD") {
      const cardNumber = cardDetails.number.replace(/\s/g, "");
      const isValidCard =
        cardDetails.name.trim().length >= 3 &&
        /^\d{13,19}$/.test(cardNumber) &&
        /^(0[1-9]|1[0-2])\/\d{2}$/.test(cardDetails.expiry) &&
        /^\d{3,4}$/.test(cardDetails.cvv);

      if (!isValidCard) {
        alert("Please enter valid card details");
        return false;
      }
    }

    return true;
  };

  const getPaymentLabel = () => {
    if (paymentMethod === "UPI") return `UPI - ${upiApp}`;
    if (paymentMethod === "NET_BANKING") return `Net Banking - ${selectedBank}`;
    return paymentMethod;
  };

  const placeOrder = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user?._id) {
        alert("Please Login First");
        return;
      }

      if (cartItems.length === 0) {
        alert("Your cart is empty");
        return;
      }

      if (!shippingAddress.trim()) {
        alert("Please enter delivery address");
        return;
      }

      if (!validatePayment()) {
        return;
      }

      setPlacingOrder(true);

      const response = await API.post("/orders", {
        userId: user._id,
        products: cartItems.map((item) => ({
          productId: String(item._id || item.id),
          quantity: item.quantity,
        })),
        totalPrice,
        shippingAddress,
        paymentMethod: getPaymentLabel(),
        paymentStatus: paymentMethod === "COD" ? "Pending" : "Selected",
      });

      alert(response.data.message || "Order Placed Successfully");
      clearCart();
    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Order Failed");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="pv-page-soft" style={{ minHeight: "100vh" }}>
      <div className="container py-5" style={{ marginTop: "96px" }}>
        <div className="text-center mb-5">
          <span className="badge bg-dark px-4 py-2 mb-3">
            Secure Checkout
          </span>
          <h1 className="fw-bold" style={{ fontSize: "clamp(3rem,7vw,5rem)" }}>
            Your Cart
          </h1>
          <p className="text-muted fs-5 mb-0">
            Review your selections and choose a realistic payment mode.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center pv-empty-state shadow-lg">
            <i className="bi bi-bag-x display-3 text-muted"></i>
            <h2 className="fw-bold mt-4">Cart is Empty</h2>
            <p className="text-muted mb-0">
              Add premium floral products to continue shopping.
            </p>
          </div>
        ) : (
          <div className="row g-4 align-items-start">
            <div className="col-lg-8">
              <div className="d-flex flex-column gap-4">
                {cartItems.map((item) => (
                  <article key={item.id} className="pv-cart-item">
                    <div className="pv-cart-image">
                      <img src={item.image} alt={item.name} />
                    </div>

                    <div className="pv-cart-content">
                      <div>
                        <span className="badge bg-dark px-3 py-2 mb-3">
                          {item.category}
                        </span>
                        <h2 className="fw-bold mb-2">{item.name}</h2>
                        <h4 className="pv-product-price fw-bold">
                          ₹ {item.price}
                        </h4>
                      </div>

                      <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mt-4">
                        <div className="pv-quantity-control">
                          <button
                            onClick={() => decreaseQuantity(item.id)}
                            aria-label="Decrease quantity"
                          >
                            -
                          </button>
                          <span>{item.quantity}</span>
                          <button
                            onClick={() => increaseQuantity(item.id)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="btn btn-outline-dark px-4 py-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <aside className="pv-checkout-panel">
                <h2 className="fw-bold mb-4">Order Summary</h2>

                <div className="pv-summary-line">
                  <span>Total Items</span>
                  <strong>{totalItems}</strong>
                </div>

                <div className="pv-summary-line">
                  <span>Subtotal</span>
                  <strong>₹ {totalPrice}</strong>
                </div>

                <div className="pv-summary-line">
                  <span>Delivery</span>
                  <strong>Included</strong>
                </div>

                <div className="pv-summary-total">
                  <span>Total</span>
                  <strong>₹ {totalPrice}</strong>
                </div>

                <label className="form-label fw-semibold mt-4">
                  Delivery Address
                </label>
                <textarea
                  className="form-control p-3"
                  rows="3"
                  value={shippingAddress}
                  onChange={(event) => setShippingAddress(event.target.value)}
                />

                <h5 className="fw-bold mt-4 mb-3">Payment Mode</h5>

                <div className="d-flex flex-column gap-3">
                  {paymentModes.map((mode) => (
                    <label
                      className={`pv-payment-option ${paymentMethod === mode.id ? "active" : ""}`}
                      key={mode.id}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={mode.id}
                        checked={paymentMethod === mode.id}
                        onChange={(event) => setPaymentMethod(event.target.value)}
                      />
                      <i className={`bi ${mode.icon}`}></i>
                      <span>
                        <strong>{mode.title}</strong>
                        <small>{mode.note}</small>
                      </span>
                    </label>
                  ))}
                </div>

                {paymentMethod === "UPI" && (
                  <div className="pv-payment-details">
                    <h6 className="fw-bold mb-3">Choose UPI App</h6>

                    <div className="pv-upi-grid">
                      {upiApps.map((app) => (
                        <button
                          type="button"
                          key={app}
                          className={upiApp === app ? "active" : ""}
                          onClick={() => setUpiApp(app)}
                        >
                          <i className="bi bi-phone"></i>
                          {app}
                        </button>
                      ))}
                    </div>

                    <label className="form-label fw-semibold mt-3">
                      UPI ID
                    </label>
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="example@upi"
                      value={upiId}
                      onChange={(event) => setUpiId(event.target.value)}
                    />

                    <small className="text-muted d-block mt-2">
                      The selected UPI app is saved with your order.
                    </small>
                  </div>
                )}

                {paymentMethod === "CARD" && (
                  <div className="pv-payment-details">
                    <h6 className="fw-bold mb-3">Card Details</h6>

                    <label className="form-label fw-semibold">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      className="form-control p-3 mb-3"
                      placeholder="Card holder name"
                      value={cardDetails.name}
                      onChange={(event) =>
                        setCardDetails({ ...cardDetails, name: event.target.value })
                      }
                    />

                    <label className="form-label fw-semibold">
                      Card Number
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      className="form-control p-3 mb-3"
                      placeholder="1234 5678 9012 3456"
                      maxLength="19"
                      value={cardDetails.number}
                      onChange={(event) =>
                        setCardDetails({
                          ...cardDetails,
                          number: event.target.value
                            .replace(/\D/g, "")
                            .replace(/(.{4})/g, "$1 ")
                            .trim(),
                        })
                      }
                    />

                    <div className="row g-3">
                      <div className="col-6">
                        <label className="form-label fw-semibold">
                          Expiry
                        </label>
                        <input
                          type="text"
                          inputMode="numeric"
                          className="form-control p-3"
                          placeholder="MM/YY"
                          maxLength="5"
                          value={cardDetails.expiry}
                          onChange={(event) => {
                            const value = event.target.value
                              .replace(/\D/g, "")
                              .slice(0, 4)
                              .replace(/(\d{2})(\d)/, "$1/$2");
                            setCardDetails({ ...cardDetails, expiry: value });
                          }}
                        />
                      </div>

                      <div className="col-6">
                        <label className="form-label fw-semibold">CVV</label>
                        <input
                          type="password"
                          inputMode="numeric"
                          className="form-control p-3"
                          placeholder="123"
                          maxLength="4"
                          value={cardDetails.cvv}
                          onChange={(event) =>
                            setCardDetails({
                              ...cardDetails,
                              cvv: event.target.value.replace(/\D/g, ""),
                            })
                          }
                        />
                      </div>
                    </div>

                    <small className="text-muted d-block mt-3">
                      Card details are validated on this page only and are not
                      saved to the database.
                    </small>
                  </div>
                )}

                {paymentMethod === "NET_BANKING" && (
                  <div className="pv-payment-details">
                    <label className="form-label fw-semibold">
                      Select Bank
                    </label>
                    <select
                      className="form-select p-3"
                      value={selectedBank}
                      onChange={(event) => setSelectedBank(event.target.value)}
                    >
                      {banks.map((bank) => (
                        <option key={bank} value={bank}>
                          {bank}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <button
                  onClick={placeOrder}
                  disabled={placingOrder}
                  className="btn btn-dark w-100 py-3 fw-bold mt-4"
                >
                  {placingOrder ? "Placing Order..." : "Place Order"}
                </button>
              </aside>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
