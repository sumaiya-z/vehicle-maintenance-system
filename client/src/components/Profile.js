// src/components/Profile.js
import React from "react";

export default function Profile() {
  const userName = localStorage.getItem("userName"); // get saved name

  if (!userName) return null; // hide if not logged in

  return (
    <div style={{
      position: "fixed",
      top: "10px",
      left: "10px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "white",
      padding: "5px 10px",
      borderRadius: "8px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      zIndex: 1000
    }}>
      <img
        src="https://cdn-icons-png.flaticon.com/512/147/147144.png" // default icon
        alt="Profile"
        style={{ width: "35px", borderRadius: "50%" }}
      />
      <span style={{ fontWeight: "bold" }}>{userName}</span>
    </div>
  );
}
