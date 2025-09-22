import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6">
      <h2 className="text-3xl font-bold mb-8">Choose a Section</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link
          to="/vehicles"
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-2">🚘 Vehicle List</h2>
        </Link>
        <Link
          to="/spare-parts"
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-2">🔧 Spare Parts</h2>
        </Link>
        <Link
          to="/reminders"
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl"
        >
          <h2 className="text-xl font-semibold mb-2">⏰ Reminders</h2>
        </Link>
      </div>
    </div>
  );
};

export default Products;
