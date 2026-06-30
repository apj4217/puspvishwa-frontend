import { useEffect, useState } from "react";
import API from "../../api";
import AdminSidebar from "../../components/AdminSidebar";

const emptyForm = {
  name: "",
  category: "",
  price: "",
  stock: 1,
  image: "",
  imageData: "",
  description: "",
  active: true,
};

function Products() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const response = await API.get("/products/admin/all");
      setProducts(response.data.products || []);
    } catch (error) {
      setNotice({
        type: "error",
        title: "Products Not Loaded",
        text: error.response?.data?.message || "Unable to load products.",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const updateField = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const selectImage = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((current) => ({
        ...current,
        imageData: reader.result,
        image: current.image || file.name,
      }));
    };
    reader.readAsDataURL(file);
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setForm({
      name: product.name || "",
      category: product.category || "",
      price: product.price || "",
      stock: product.stock ?? 1,
      image: product.image || "",
      imageData: "",
      description: product.description || "",
      active: product.active !== false,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetForm = () => {
    setEditingId("");
    setForm(emptyForm);
  };

  const saveProduct = async (event) => {
    event.preventDefault();
    setSaving(true);
    setNotice(null);

    try {
      const payload = {
        ...form,
        price: Number(form.price),
        stock: Number(form.stock),
      };

      const response = editingId
        ? await API.put(`/products/${editingId}`, payload)
        : await API.post("/products", payload);

      setNotice({
        type: "success",
        title: editingId ? "Product Updated" : "Product Added",
        text: response.data.message || "Product saved successfully.",
      });
      resetForm();
      loadProducts();
    } catch (error) {
      setNotice({
        type: "error",
        title: "Product Not Saved",
        text: error.response?.data?.message || "Please check product details.",
      });
    } finally {
      setSaving(false);
    }
  };

  const deleteProduct = async (id) => {
    setNotice(null);

    try {
      const response = await API.delete(`/products/${id}`);
      setNotice({
        type: "success",
        title: "Product Deleted",
        text: response.data.message || "Product removed successfully.",
      });
      loadProducts();
    } catch (error) {
      setNotice({
        type: "error",
        title: "Delete Failed",
        text: error.response?.data?.message || "Unable to delete product.",
      });
    }
  };

  return (
    <div className="pv-admin-layout">
      <AdminSidebar />
      <main className="pv-admin-main">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <h1 className="fw-bold mb-2">Products</h1>
            <p className="text-muted mb-0">
              Add, edit, upload images, and manage shop products from database.
            </p>
          </div>
          <button className="btn btn-outline-dark px-4" onClick={resetForm}>
            New Product
          </button>
        </div>

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

        <section className="pv-admin-panel mb-4">
          <h2 className="fw-bold mb-4">
            {editingId ? "Edit Product" : "Add Product"}
          </h2>
          <form onSubmit={saveProduct}>
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label fw-semibold">Product Name</label>
                <input
                  name="name"
                  className="form-control p-3"
                  value={form.name}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Category</label>
                <input
                  name="category"
                  className="form-control p-3"
                  value={form.category}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Price</label>
                <input
                  name="price"
                  type="number"
                  min="0"
                  className="form-control p-3"
                  value={form.price}
                  onChange={updateField}
                  required
                />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold">Stock</label>
                <input
                  name="stock"
                  type="number"
                  min="0"
                  className="form-control p-3"
                  value={form.stock}
                  onChange={updateField}
                />
              </div>
              <div className="col-md-5">
                <label className="form-label fw-semibold">Image URL</label>
                <input
                  name="image"
                  className="form-control p-3"
                  value={form.image}
                  onChange={updateField}
                  placeholder="https://..."
                />
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control p-3"
                  onChange={selectImage}
                />
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold">Description</label>
                <textarea
                  name="description"
                  rows="3"
                  className="form-control p-3"
                  value={form.description}
                  onChange={updateField}
                ></textarea>
              </div>
              <div className="col-12">
                <label className="form-check">
                  <input
                    type="checkbox"
                    name="active"
                    className="form-check-input"
                    checked={form.active}
                    onChange={updateField}
                  />
                  <span className="form-check-label fw-semibold">
                    Show product in shop
                  </span>
                </label>
              </div>
            </div>

            <button className="btn btn-dark px-5 py-3 fw-bold mt-4" disabled={saving}>
              {saving ? "Saving..." : editingId ? "Update Product" : "Add Product"}
            </button>
          </form>
        </section>

        <section className="pv-admin-panel">
          <div className="table-responsive">
            <table className="table align-middle pv-admin-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "58px",
                            height: "58px",
                            objectFit: "cover",
                            borderRadius: "12px",
                          }}
                        />
                        <strong>{product.name}</strong>
                      </div>
                    </td>
                    <td>{product.category}</td>
                    <td>Rs. {Number(product.price).toLocaleString("en-IN")}</td>
                    <td>{product.stock}</td>
                    <td>
                      <span className="pv-status-pill">
                        {product.active ? "Live" : "Hidden"}
                      </span>
                    </td>
                    <td>
                      <div className="d-flex gap-2">
                        <button
                          className="btn btn-sm btn-outline-dark"
                          onClick={() => editProduct(product)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => deleteProduct(product._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {!loading && products.length === 0 && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-4">
                      No database products found. Add your first product above.
                    </td>
                  </tr>
                )}

                {loading && (
                  <tr>
                    <td colSpan="6" className="text-center text-muted py-4">
                      Loading products...
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

export default Products;
