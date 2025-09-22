// src/admin/AdminLayout.js
import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div>
      <header>
        <h1>Admin Panel</h1>
        {/* You can add admin navbar/sidebar here later */}
      </header>
      <main>
        <Outlet /> {/* Nested routes will render here */}
      </main>
    </div>
  );
};

export default AdminLayout;
