import { useState, useRef } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";

function UploadResource() {
  const [form, setForm] = useState({ title: "", subject: "", file: null });
  const [loading, setLoading] = useState(false);
  const fileRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", form.title);
    data.append("subject", form.subject);
    data.append("file", form.file);

    try {
      await API.post("/api/resources", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Uploaded successfully!");

      setForm({ title: "", subject: "", file: null });
      fileRef.current.value = "";
    } catch (err) {
      console.error(err);
      alert("Upload failed: " + err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 page-animate d-flex justify-content-center">
        <form
          className="neon-form"
          style={{ width: "400px" }}
          onSubmit={handleSubmit}
        >
          <h4 className="glow-text text-center mb-3">Upload Resource</h4>

          <input
            className="form-control mb-2"
            placeholder="Title"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />

          <input
            className="form-control mb-2"
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            required
          />

          <input
            type="file"
            ref={fileRef}
            className="form-control mb-3"
            onChange={(e) => setForm({ ...form, file: e.target.files[0] })}
            required
          />

          <button className="btn btn-success w-100" disabled={loading}>
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </>
  );
}

export default UploadResource;
