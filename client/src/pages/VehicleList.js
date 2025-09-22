import React, { useState, useEffect } from "react";

const VehicleList = () => {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Simulate fetching data from API
    setVehicles([
      { id: 1, name: "Toyota Corolla", plate: "ABC-1234", status: "Active" },
      { id: 2, name: "Honda Civic", plate: "XYZ-5678", status: "Inactive" },
      { id: 3, name: "Suzuki Swift", plate: "LMN-9101", status: "Active" },
    ]);
  }, []);

  const filteredVehicles = vehicles.filter((v) =>
    v.name.toLowerCase().includes(search.toLowerCase()) ||
    v.plate.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
      <div className="w-full max-w-5xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Vehicle List</h1>

        <div className="mb-4 flex justify-center">
          <input
            type="text"
            placeholder="Search vehicles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-sm p-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
          />
        </div>

        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Plate</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredVehicles.map((v) => (
                <tr key={v.id}>
                  <td className="px-6 py-4">{v.id}</td>
                  <td className="px-6 py-4">{v.name}</td>
                  <td className="px-6 py-4">{v.plate}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-white ${v.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                      {v.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VehicleList;
