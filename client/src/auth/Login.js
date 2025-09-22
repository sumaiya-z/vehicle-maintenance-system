import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: " ",
    password: " "
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    navigate("/");
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {/* Form Title */}
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Welcome Back!</h2>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>Login to your account</p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "300px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          required
        />
        <button
          type="submit"
          style={{
            padding: "12px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Login
        </button>
      </form>

      {/* Register Link */}
      <p style={{ marginTop: "15px", fontSize: "16px" }}>
        Don't have an account? <Link to="/register" style={{ color: "#007bff" }}>Sign up</Link>
      </p>
    </div>
  );
}
