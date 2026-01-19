import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="neon-hero d-flex align-items-center">
        <div className="container text-center text-white">
          <h1 className="hero-title">Student Resource Management Portal</h1>
          <p className="lead mt-3">
            Store, share and manage your academic resources securely.
          </p>
          <div className="mt-4">
            <Link to="/register" className="btn hero-btn me-3">
              Get Started
            </Link>
            <Link to="/login" className="btn hero-btn">
              Login
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center fw-bold mb-4">Why Use This Portal?</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="neon-card">
              <h5>Secure Uploads</h5>
              <p>All your files are protected using JWT authentication.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="neon-card">
              <h5>Easy Access</h5>
              <p>View and download resources anytime, anywhere.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="neon-card">
              <h5>Personal Dashboard</h5>
              <p>Each user sees only their own uploaded resources.</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="neon-footer">
        <p>© 2026 Student Resource Management System | MERN Stack Project</p>
      </footer>
    </>
  );
}

export default Home;
