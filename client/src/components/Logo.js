import React from "react";
import logo from "../assets/sapumal-logo.png"; // adjust file name if different

export default function Logo() {
  return (
    <div
      style={{
        position: "absolute",
        top: "10px",
        left: "10px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      <img
        src={logo}
        alt="Sapumal Logo"
        style={{ width: "50px", height: "auto", borderRadius: "8px" }}
      />
      <span style={{ fontWeight: "bold", fontSize: "18px" }}>Sapumal</span>
    </div>
  );
}
