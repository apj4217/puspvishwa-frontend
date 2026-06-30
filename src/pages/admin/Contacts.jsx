import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    API.get("/contact")
      .then((response) => setContacts(response.data.contacts || []))
      .catch((error) =>
        setNotice({
          type: "error",
          title: "Enquiries Not Loaded",
          text: error.response?.data?.message || "Unable to load enquiries.",
        })
      )
      .finally(() => setLoading(false));
  }, []);

  const whatsappLink = (contact) => {
    const phone = String(contact.phone || "").replace(/\D/g, "").slice(-10);
    const message = encodeURIComponent(
      `Hello ${contact.name}, thank you for contacting Apj's Florals about ${contact.eventType}. How can we help you further?`
    );

    return `https://wa.me/91${phone}?text=${message}`;
  };

  const deleteContact = async (id) => {
    try {
      const response = await API.delete(`/contact/${id}`);
      setContacts((current) => current.filter((contact) => contact._id !== id));
      setNotice({
        type: "success",
        title: "Enquiry Deleted",
        text: response.data.message || "Enquiry removed successfully.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "Unable to delete enquiry.",
      });
    }
  };

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <h1 className="fw-bold mb-2">Contact Requests</h1>
        <p className="text-muted mb-4">
          Customer event enquiries, messages, and quick WhatsApp follow-up.
        </p>

        {notice && (
          <div className={`pv-form-message ${notice.type} mb-4`}>
            <i className="bi bi-exclamation-circle"></i>
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
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Event</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id}>
                    <td>
                      <strong>{contact.name}</strong>
                      <small className="d-block text-muted">
                        {contact.createdAt
                          ? new Date(contact.createdAt).toLocaleDateString("en-IN")
                          : "New enquiry"}
                      </small>
                    </td>
                    <td>
                      <a href={`mailto:${contact.email}`} className="text-dark">
                        {contact.email}
                      </a>
                      <small className="d-block text-muted">{contact.phone}</small>
                    </td>
                    <td>{contact.eventType}</td>
                    <td style={{ minWidth: "260px" }}>{contact.message}</td>
                    <td>
                      <div className="d-flex flex-wrap gap-2">
                        <a
                          href={whatsappLink(contact)}
                          target="_blank"
                          rel="noreferrer"
                          className="btn btn-sm btn-success"
                        >
                          <i className="bi bi-whatsapp me-1"></i>
                          Reply
                        </a>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteContact(contact._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!loading && contacts.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No enquiries found.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      Loading enquiries...
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

export default Contacts;
