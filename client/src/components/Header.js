import React from "react";
import Logo from "./Logo";
import { FaUserCircle } from "react-icons/fa";

export default function Header() {
  // Get logged in user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between", // logo left, profile right
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#f5f5f5",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      {/* Sapumal Logo */}
      <Logo />

      {/* Profile */}
      {user && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "white",
            padding: "5px 10px",
            borderRadius: "8px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          <FaUserCircle size={32} style={{ color: "#007bff" }} />
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            {user.name}
          </span>
        </div>
      )}
    </div>
  );
}
