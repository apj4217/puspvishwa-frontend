import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notice, setNotice] = useState(null);

  const loadSubscribers = async () => {
    try {
      setLoading(true);
      const response = await API.get("/subscribers");
      setSubscribers(response.data.subscribers || []);
    } catch (error) {
      setNotice({
        type: "error",
        title: "Subscribers Not Loaded",
        text: error.response?.data?.message || "Unable to load subscribers.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscribers();
  }, []);

  const toggleSubscriber = async (subscriber) => {
    try {
      const response = await API.put(`/subscribers/${subscriber._id}`, {
        active: !subscriber.active,
      });

      setSubscribers((current) =>
        current.map((item) =>
          item._id === subscriber._id ? response.data.subscriber : item
        )
      );
      setNotice({
        type: "success",
        title: "Subscriber Updated",
        text: response.data.message || "Subscriber status updated.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        title: "Update Failed",
        text: error.response?.data?.message || "Unable to update subscriber.",
      });
    }
  };

  const deleteSubscriber = async (id) => {
    try {
      const response = await API.delete(`/subscribers/${id}`);
      setSubscribers((current) => current.filter((item) => item._id !== id));
      setNotice({
        type: "success",
        title: "Subscriber Deleted",
        text: response.data.message || "Subscriber removed successfully.",
      });
    } catch (error) {
      setNotice({
        type: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "Unable to delete subscriber.",
      });
    }
  };

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
          <div>
            <span className="badge bg-dark px-4 py-2 mb-3">Audience</span>
            <h1 className="fw-bold mb-2">Subscribers</h1>
            <p className="text-muted mb-0">
              Stay Connected footer emails saved directly from the website.
            </p>
          </div>
          <button className="btn btn-outline-dark px-4 py-2" onClick={loadSubscribers}>
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

        <section className="pv-admin-panel">
          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Source</th>
                  <th>Status</th>
                  <th>Joined</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((subscriber) => (
                  <tr key={subscriber._id}>
                    <td>
                      <a href={`mailto:${subscriber.email}`} className="text-dark fw-bold">
                        {subscriber.email}
                      </a>
                    </td>
                    <td>{subscriber.source || "footer"}</td>
                    <td>
                      <span className="pv-status-pill">
                        {subscriber.active ? "Active" : "Paused"}
                      </span>
                    </td>
                    <td>
                      {subscriber.createdAt
                        ? new Date(subscriber.createdAt).toLocaleDateString("en-IN")
                        : "Recently"}
                    </td>
                    <td>
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => toggleSubscriber(subscriber)}
                        >
                          {subscriber.active ? "Pause" : "Activate"}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteSubscriber(subscriber._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!loading && subscribers.length === 0 && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      No subscribers found.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td colSpan="5" className="text-center text-muted py-4">
                      Loading subscribers...
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

export default Subscribers;
