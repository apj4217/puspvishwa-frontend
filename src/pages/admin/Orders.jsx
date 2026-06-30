import { useEffect, useState } from "react";
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
        title: "Order Updated",
        text: response.data.message || "Order status updated.",
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
        <h1 className="fw-bold mb-2">Orders</h1>
        <p className="text-muted mb-4">
          Review order values, payment modes, and update fulfillment status.
        </p>

        {notice && (
          <div className={`pv-form-message ${notice.type} mb-4`}>
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

        <section className="pv-admin-panel">
          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead>
                <tr>
                  <th>Customer</th>
                  <th>Products</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <strong>{order.userId?.name || "Customer"}</strong>
                      <small className="d-block text-muted">
                        {order.userId?.email || order.userId}
                      </small>
                    </td>
                    <td>
                      {(order.products || []).map((product) => (
                        <small className="d-block" key={product.productId}>
                          {product.name || product.productId} x {product.quantity}
                        </small>
                      ))}
                    </td>
                    <td>Rs. {Number(order.totalPrice || 0).toLocaleString("en-IN")}</td>
                    <td>
                      <strong>{order.paymentMethod}</strong>
                      <small className="d-block text-muted">
                        {order.paymentStatus || "Pending"}
                      </small>
                    </td>
                    <td>
                      <select
                        className="form-select"
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
                    </td>
                  </tr>
                ))}

                {!loading && orders.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No orders found.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      Loading orders...
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Orders;
