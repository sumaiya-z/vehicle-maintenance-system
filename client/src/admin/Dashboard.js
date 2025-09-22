// src/admin/Dashboard.js
import React, { useState, useEffect } from "react";

const Dashboard = () => {
  // Dummy data for summary
  const [stats, setStats] = useState({
    totalVehicles: 12,
    activeVehicles: 8,
    totalParts: 30,
    reminders: 5,
  });

  // Example: simulate fetching data
  useEffect(() => {
    // You can replace this with real API calls later
    console.log("Dashboard data loaded");
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <p className="text-gray-700 mb-8">
        Overview of your Vehicle Management System.
      </p>

      {/* Summary cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Vehicles */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Total Vehicles</h2>
          <p className="mt-2 text-2xl font-bold text-gray-800">{stats.totalVehicles}</p>
        </div>

        {/* Active Vehicles */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Active Vehicles</h2>
          <p className="mt-2 text-2xl font-bold text-green-600">{stats.activeVehicles}</p>
        </div>

        {/* Total Spare Parts */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Total Spare Parts</h2>
          <p className="mt-2 text-2xl font-bold text-gray-800">{stats.totalParts}</p>
        </div>

        {/* Reminders */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500 text-sm font-medium uppercase">Reminders</h2>
          <p className="mt-2 text-2xl font-bold text-red-500">{stats.reminders}</p>
        </div>
      </div>

      {/* Optional: Quick links */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="bg-indigo-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold">Manage Vehicles</h3>
          <p className="text-gray-600 text-sm mt-1">View and edit all vehicles in your system.</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg shadow">
          <h3 className="font-semibold">Manage Spare Parts</h3>
          <p className="text-gray-600 text-sm mt-1">Track your spare parts inventory.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

