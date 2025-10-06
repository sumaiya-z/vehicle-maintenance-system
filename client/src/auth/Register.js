import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    password: " "
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Registration successful!");

    // Save user details in localStorage
    localStorage.setItem("user", JSON.stringify({ name: formData.name, email: formData.email }));

    navigate("/login");
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
      <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>Create Account</h2>
      <p style={{ fontSize: "18px", marginBottom: "20px" }}>Sign up to get started</p>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ width: "300px", display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          style={{ padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
          required
        />
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
          Register
        </button>
      </form>

      {/* Login Link */}
      <p style={{ marginTop: "15px", fontSize: "16px" }}>
        Already have an account? <Link to="/login" style={{ color: "#007bff" }}>Login</Link>
      </p>
    </div>
  );
}
