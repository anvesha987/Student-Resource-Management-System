import { useEffect, useState } from "react";
import API from "../api/axios";
import Navbar from "../components/Navbar";
import ResourceCard from "../components/ResourceCard";
import Loader from "../components/Loader";

function ViewResources() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.get("/api/resources")
      .then((res) => setResources(res.data))
      .finally(() => setLoading(false));
  }, []);

  const deleteResource = async (id) => {
    try {
      await API.delete(`/api/resources/${id}`);
      setResources(resources.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert(
        "Delete failed: " +
          (err.response?.data?.message || err.message || "Unknown error")
      );
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 page-animate">
        <h3 className="glow-text mb-4">Resources</h3>
        {loading ? (
          <Loader />
        ) : (
          resources.map((r) => (
            <ResourceCard key={r._id} resource={r} onDelete={deleteResource} />
          ))
        )}
      </div>
    </>
  );
}

export default ViewResources;
