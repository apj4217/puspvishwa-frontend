import { useEffect, useMemo, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/Adminsidebar";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const [usersResponse, ordersResponse, contactsResponse] =
          await Promise.all([
            API.get("/auth/users"),
            API.get("/orders"),
            API.get("/contact"),
          ]);

        setUsers(usersResponse.data.users || []);
        setOrders(ordersResponse.data.orders || []);
        setContacts(contactsResponse.data.contacts || []);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboard();
  }, []);

  const revenue = useMemo(
    () => orders.reduce((total, order) => total + Number(order.totalPrice || 0), 0),
    [orders]
  );

  const recentOrders = orders.slice(0, 5);
  const recentContacts = contacts.slice(0, 4);

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />

      <main className="pv-admin-main">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <span className="badge bg-dark px-4 py-2 mb-3">
              Admin Studio
            </span>
            <h1 className="fw-bold mb-1">
              Business Dashboard
            </h1>
            <p className="text-muted mb-0">
              Manage orders, customers, and event enquiries from one premium workspace.
            </p>
          </div>

          <div className="pv-admin-date">
            <i className="bi bi-calendar3 me-2"></i>
            Today
          </div>
        </div>

        <div className="row g-4">
          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-people"></i>
              <span>Total Users</span>
              <strong>{loading ? "..." : users.length}</strong>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-bag-check"></i>
              <span>Total Orders</span>
              <strong>{loading ? "..." : orders.length}</strong>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-envelope-paper"></i>
              <span>Contact Requests</span>
              <strong>{loading ? "..." : contacts.length}</strong>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="pv-stat-card">
              <i className="bi bi-currency-rupee"></i>
              <span>Total Revenue</span>
              <strong>{loading ? "..." : `₹${revenue.toLocaleString("en-IN")}`}</strong>
            </div>
          </div>
        </div>

        <div className="row g-4 mt-2">
          <div className="col-xl-7">
            <section className="pv-admin-panel">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h2 className="fw-bold mb-0">
                  Recent Orders
                </h2>
                <span className="text-muted">
                  Latest {recentOrders.length}
                </span>
              </div>

              <div className="table-responsive">
                <table className="table align-middle pv-admin-table">
                  <thead>
                    <tr>
                      <th>Customer</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Payment</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order) => (
                      <tr key={order._id}>
                        <td>{order.userId}</td>
                        <td>₹ {order.totalPrice}</td>
                        <td>
                          <span className="pv-status-pill">
                            {order.orderStatus || "Processing"}
                          </span>
                        </td>
                        <td>{order.paymentMethod || "COD"}</td>
                      </tr>
                    ))}
                    {!loading && recentOrders.length === 0 && (
                      <tr>
                        <td colSpan="4" className="text-center text-muted py-4">
                          No orders yet.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="col-xl-5">
            <section className="pv-admin-panel">
              <h2 className="fw-bold mb-3">
                New Enquiries
              </h2>

              <div className="d-flex flex-column gap-3">
                {recentContacts.map((contact) => (
                  <div className="pv-enquiry-item" key={contact._id}>
                    <strong>{contact.name}</strong>
                    <span>{contact.eventType}</span>
                    <small>{contact.phone}</small>
                  </div>
                ))}

                {!loading && recentContacts.length === 0 && (
                  <p className="text-muted mb-0">
                    No contact requests yet.
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
