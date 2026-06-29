import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/auth/users")
      .then((response) => setUsers(response.data.users || []))
      .catch((requestError) => setError(requestError.response?.data?.message || "Unable to load users"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <h1 className="fw-bold mb-2">Users</h1>
        <p className="text-muted mb-4">Registered customer and administrator accounts.</p>
        <section className="pv-admin-panel">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead><tr><th>Name</th><th>Email</th><th>Role</th></tr></thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user._id}><td>{user.name}</td><td>{user.email}</td><td><span className="pv-status-pill">{user.role}</span></td></tr>
                ))}
                {!loading && users.length === 0 && <tr><td colSpan="3" className="text-center text-muted py-4">No users found.</td></tr>}
                {loading && <tr><td colSpan="3" className="text-center text-muted py-4">Loading users...</td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Users;
