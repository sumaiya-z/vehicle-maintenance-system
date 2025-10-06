import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header"; // ✅ Added import

// VMS Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import VehicleList from "./pages/VehicleList";
import AddVehicle from "./pages/AddVehicle";
import SpareParts from "./pages/SpareParts";
import Reminders from "./pages/Reminders";

// Auth Pages
import Login from "./auth/Login";
import Register from "./auth/Register";
import Signup from "./pages/Signup";

// Admin Pages
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import ManageVehicles from "./admin/ManageVehicles";
import ManageParts from "./admin/ManageParts";

function App() {
  const location = useLocation();
  const [count, setCount] = useState(0);

  // Check if current route is admin
  const isAdminRoute = location.pathname.startsWith("/admin");

  // Check if current route is auth
  const isAuthRoute = ["/login", "/register", "/signup"].includes(location.pathname);

  return (
    <div className="bg-gradient-to-tr from-indigo-500/30 to-pink-500/30 min-h-screen">
      <Header /> {/* ✅ Added Header at the top */}

      {/* Show Navbar only if not admin/auth */}
      {!isAdminRoute && !isAuthRoute && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/vehicles" element={<VehicleList />} />
        <Route path="/add-vehicle" element={<AddVehicle />} />
        <Route path="/spare-parts" element={<SpareParts />} />
        <Route path="/reminders" element={<Reminders />} />

        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="vehicles" element={<ManageVehicles />} />
          <Route path="parts" element={<ManageParts />} />
        </Route>
      </Routes>

      {/* Show Footer only if not admin/auth */}
      {!isAdminRoute && !isAuthRoute && <Footer />}
    </div>
  );
}

export default App;
