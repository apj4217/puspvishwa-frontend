import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/orders")
      .then((response) => setOrders(response.data.orders || []))
      .catch((requestError) =>
        setError(requestError.response?.data?.message || "Unable to load orders")
      )
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <h1 className="fw-bold mb-2">Orders</h1>
        <p className="text-muted mb-4">
          Review order values, payment modes, and fulfillment status.
        </p>

        <section className="pv-admin-panel">
          {error && <div className="alert alert-danger">{error}</div>}

          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order.userId}</td>
                    <td>₹ {order.totalPrice}</td>
                    <td>{order.paymentMethod}</td>
                    <td>
                      <span className="pv-status-pill">
                        {order.orderStatus || "Processing"}
                      </span>
                    </td>
                  </tr>
                ))}

                {!loading && orders.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-4">
                      No orders found.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td colSpan="4" className="text-center text-muted py-4">
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