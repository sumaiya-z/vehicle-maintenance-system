// src/admin/ManageParts.js
import React, { useState } from "react";

const ManageParts = () => {
  const [parts, setParts] = useState([
    { id: 1, name: "Brake Pads", quantity: 50, vehicle: "Toyota Corolla" },
    { id: 2, name: "Oil Filter", quantity: 30, vehicle: "Honda Civic" },
    { id: 3, name: "Air Filter", quantity: 25, vehicle: "Suzuki Swift" },
  ]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Manage Spare Parts</h1>
      <p className="text-gray-700 mb-6">Track and manage spare parts inventory here.</p>

      {/* Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Part Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vehicle</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {parts.map((part) => (
              <tr key={part.id}>
                <td className="px-6 py-4 whitespace-nowrap">{part.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{part.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{part.quantity}</td>
                <td className="px-6 py-4 whitespace-nowrap">{part.vehicle}</td>
                <td className="px-6 py-4 whitespace-nowrap flex gap-2">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Part Button */}
      <div className="mt-6">
        <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Add Part
        </button>
      </div>
    </div>
  );
};

export default ManageParts;
