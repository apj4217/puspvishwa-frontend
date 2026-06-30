import { useEffect, useMemo, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

const orderStatuses = [
  "Processing",
  "Confirmed",
  "Decorating",
  "Out for Delivery",
  "Completed",
  "Cancelled",
];

const formatPrice = (value) =>
  `Rs. ${Number(value || 0).toLocaleString("en-IN")}`;

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  const loadOrders = async () => {
    try {
      setLoading(true);
      const response = await API.get("/orders");
      setOrders(response.data.orders || []);
    } catch (error) {
      setNotice({
        type: "error",
        title: "Orders Not Loaded",
        text: error.response?.data?.message || "Unable to load orders.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const stats = useMemo(() => {
    const revenue = orders.reduce(
      (total, order) => total + Number(order.totalPrice || 0),
      0
    );
    const pending = orders.filter(
      (order) => !["Completed", "Cancelled"].includes(order.orderStatus)
    ).length;

    return {
      total: orders.length,
      revenue,
      pending,
      completed: orders.filter((order) => order.orderStatus === "Completed").length,
    };
  }, [orders]);

  const updateStatus = async (orderId, status) => {
    try {
      const response = await API.put(`/orders/${orderId}`, { status });
      setOrders((current) =>
        current.map((order) =>
          order._id === orderId ? response.data.order : order
        )
      );
      setNotice({
        type: "success",
        title: "Order Status Updated",
        text: `This order is now marked as ${status}.`,
      });
    } catch (error) {
      setNotice({
        type: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Unable to update order status.",
      });
    }
  };

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <span className="badge bg-dark px-4 py-2 mb-3">Order Studio</span>
            <h1 className="fw-bold mb-2">Orders</h1>
            <p className="text-muted mb-0">
              Track customers, products, payments, and fulfillment status clearly.
            </p>
          </div>
          <button className="btn btn-outline-dark px-4 py-2" onClick={loadOrders}>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Refresh
          </button>
        </div>

        {notice && (
          <div className={`pv-form-message ${notice.type} mb-4`} role="status">
            <i
              className={`bi ${
                notice.type === "success"
                  ? "bi-check-circle"
                  : "bi-exclamation-circle"
              }`}
            ></i>
            <div>
              <strong>{notice.title}</strong>
              <span>{notice.text}</span>
            </div>
          </div>
        )}

        <div className="row g-4 mb-4">
          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-receipt"></i>
              <span>Total Orders</span>
              <strong>{loading ? "..." : stats.total}</strong>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-hourglass-split"></i>
              <span>Active Orders</span>
              <strong>{loading ? "..." : stats.pending}</strong>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-check2-circle"></i>
              <span>Completed</span>
              <strong>{loading ? "..." : stats.completed}</strong>
            </div>
          </div>
          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-currency-rupee"></i>
              <span>Revenue</span>
              <strong>{loading ? "..." : formatPrice(stats.revenue)}</strong>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-4">
          {orders.map((order) => {
            const customerName = order.userId?.name || "Customer";
            const customerEmail = order.userId?.email || String(order.userId || "");
            const products = order.products || [];

            return (
              <section className="pv-admin-order-card" key={order._id}>
                <div className="pv-admin-order-head">
                  <div>
                    <small>ORDER ID</small>
                    <strong>#{String(order._id).slice(-8).toUpperCase()}</strong>
                    <span>
                      {order.createdAt
                        ? new Date(order.createdAt).toLocaleString("en-IN")
                        : "Recently placed"}
                    </span>
                  </div>
                  <div className="text-lg-end">
                    <small>TOTAL VALUE</small>
                    <strong>{formatPrice(order.totalPrice)}</strong>
                    <span>{products.length} product entries</span>
                  </div>
                </div>

                <div className="pv-admin-order-grid">
                  <div className="pv-order-info-box">
                    <small>CUSTOMER</small>
                    <strong>{customerName}</strong>
                    <span>{customerEmail}</span>
                    {order.shippingAddress && (
                      <p className="mb-0 mt-2">{order.shippingAddress}</p>
                    )}
                  </div>

                  <div className="pv-order-info-box">
                    <small>PAYMENT</small>
                    <strong>{order.paymentMethod || "COD"}</strong>
                    <span>{order.paymentStatus || "Pending"}</span>
                    {order.paymentId && <p className="mb-0 mt-2">{order.paymentId}</p>}
                  </div>

                  <div className="pv-order-info-box">
                    <small>FULFILLMENT</small>
                    <select
                      className="form-select mt-2"
                      value={order.orderStatus || "Processing"}
                      onChange={(event) =>
                        updateStatus(order._id, event.target.value)
                      }
                    >
                      {orderStatuses.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="pv-admin-products-list">
                  {products.map((product) => (
                    <div className="pv-admin-product-line" key={product.productId}>
                      {product.image && (
                        <img src={product.image} alt={product.name || "Product"} />
                      )}
                      <div>
                        <strong>{product.name || product.productId}</strong>
                        <span>
                          Qty {product.quantity} x {formatPrice(product.price)}
                        </span>
                      </div>
                    </div>
                  ))}

                  {products.length === 0 && (
                    <p className="text-muted mb-0">No product details stored.</p>
                  )}
                </div>
              </section>
            );
          })}

          {!loading && orders.length === 0 && (
            <section className="text-center pv-empty-state shadow-lg">
              <i className="bi bi-receipt display-4"></i>
              <h2 className="fw-bold mt-3">No orders found</h2>
              <p className="text-muted mb-0">
                New customer orders will appear here.
              </p>
            </section>
          )}

          {loading && (
            <section className="text-center pv-admin-panel">
              <p className="text-muted mb-0">Loading orders...</p>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

export default Orders;
