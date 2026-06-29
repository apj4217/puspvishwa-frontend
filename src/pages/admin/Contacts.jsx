import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/contact")
      .then((response) => setContacts(response.data.contacts || []))
      .catch((requestError) => setError(requestError.response?.data?.message || "Unable to load enquiries"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <h1 className="fw-bold mb-2">Contact Requests</h1>
        <p className="text-muted mb-4">Customer event enquiries and messages.</p>
        <section className="pv-admin-panel">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead><tr><th>Name</th><th>Email</th><th>Phone</th><th>Event</th><th>Message</th></tr></thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}><td>{contact.name}</td><td>{contact.email}</td><td>{contact.phone}</td><td>{contact.eventType}</td><td>{contact.message}</td></tr>
                ))}
                {!loading && contacts.length === 0 && <tr><td colSpan="5" className="text-center text-muted py-4">No enquiries found.</td></tr>}
                {loading && <tr><td colSpan="5" className="text-center text-muted py-4">Loading enquiries...</td></tr>}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contacts;
