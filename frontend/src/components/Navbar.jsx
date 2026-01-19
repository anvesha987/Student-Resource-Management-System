import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const { token, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow mb-4">
      <div className="container">
        <Link
          to="/dashboard"
          className="navbar-brand d-flex align-items-center"
        >
          <i className="bi bi-mortarboard-fill me-2 fs-3"></i>
          <span className="glow-text fs-4 fw-bold">Student Portal</span>
        </Link>

        {token && (
          <div className="d-flex align-items-center">
            <Link
              to="/upload"
              className="btn btn-light me-2 d-flex align-items-center"
            >
              <i className="bi bi-cloud-upload-fill me-1"></i> Upload
            </Link>
            <Link
              to="/resources"
              className="btn btn-light me-2 d-flex align-items-center"
            >
              <i className="bi bi-card-list me-1"></i> Resources
            </Link>
            <button
              onClick={handleLogout}
              className="btn btn-danger d-flex align-items-center"
            >
              <i className="bi bi-box-arrow-right me-1"></i> Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
