import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="container mt-5 page-animate text-center">
        <h2 className="glow-text mb-4">Dashboard</h2>

        <div className="row justify-content-center g-4">
          <div className="col-md-4" onClick={() => navigate("/upload")}>
            <div className="neon-card p-4 text-center">
              <i className="bi bi-cloud-upload-fill fs-1 text-primary"></i>
              <h5 className="mt-3 glow-text">Upload Resource</h5>
            </div>
          </div>

          <div className="col-md-4" onClick={() => navigate("/resources")}>
            <div className="neon-card p-4 text-center">
              <i className="bi bi-card-list fs-1 text-info"></i>
              <h5 className="mt-3 glow-text">View Resources</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
