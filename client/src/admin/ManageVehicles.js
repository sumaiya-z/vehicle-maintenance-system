// src/admin/ManageVehicles.js
import React, { useState } from "react";

const ManageVehicles = () => {
  const [vehicles, setVehicles] = useState([
    { id: 1, name: "Toyota Corolla", plate: "ABC-1234", status: "Active" },
    { id: 2, name: "Honda Civic", plate: "XYZ-5678", status: "Inactive" },
    { id: 3, name: "Suzuki Swift", plate: "LMN-9101", status: "Active" },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Vehicles</h1>
      <p className="text-gray-700 mb-6">Add, edit, or remove vehicles from your system here.</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Plate Number</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id}>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.plate}</td>
                <td className="px-6 py-4 whitespace-nowrap">{vehicle.status}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Vehicle Button */}
      <div className="mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Vehicle
        </button>
      </div>
    </div>
  );
};

export default ManageVehicles;

