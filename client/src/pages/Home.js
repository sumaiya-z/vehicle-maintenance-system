import React, { useState, useEffect } from "react"; // added useState & useEffect
import engine from "../assets/engine.jpeg";
import truck from "../assets/truck.jpeg";
import garage from "../assets/garage.jpeg";
import { useNavigate } from "react-router-dom";

const backgroundImages = [engine, truck, garage];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Get user name from localStorage
  const userName = localStorage.getItem("userName");

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
        position: "relative", // to position profile
      }}
    >
      {/* Profile in top-left corner */}
      {userName && (
        <div style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "white",
          padding: "5px 10px",
          borderRadius: "8px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
        }}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
            alt="Profile"
            style={{ width: "35px", borderRadius: "50%" }}
          />
          <span style={{ fontWeight: "bold" }}>{userName}</span>
        </div>
      )}

      {/* Welcome Message */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        Welcome to <span style={{ color: "#007bff" }}>Vehicle Management System 🚗</span>
      </h1>
      <p style={{ fontSize: "18px", marginBottom: "20px", maxWidth: "600px" }}>
        Manage your vehicles, spare parts, and reminders all in one place.
      </p>

      {/* Rotating Image */}
      <img
        src={backgroundImages[currentImage]}
        alt="Vehicle"
        style={{
          width: "300px",
          height: "auto",
          borderRadius: "10px",
          marginBottom: "20px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
        }}
      />

      {/* Button */}
      <button
        onClick={() => navigate("/products")}
        style={{
          padding: "15px 30px",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#007bff",
          color: "white",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    </div>
  );
}
