import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/axios";
import { setToken } from "../utils/auth";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser, setTokenState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/api/auth/login", form);
      setToken(res.data.token); 
      setTokenState(res.data.token); 
      setUser(res.data.user); 
      navigate("/dashboard");
    } catch {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="register-bg page-animate">
      <form
        className="neon-form"
        style={{ width: "360px" }}
        onSubmit={handleSubmit}
      >
        <h3 className="text-center mb-3" style={{ color: "#4e54c8" }}>
          Login
        </h3>
        <input
          name="email"
          placeholder="Email"
          className="form-control mb-2"
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          onChange={handleChange}
          required
        />
        <button type="submit" className="btn btn-primary w-100 mb-2">
          Login
        </button>

        <Link to="/register" className="d-block text-center">
          Don't have an account? Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
