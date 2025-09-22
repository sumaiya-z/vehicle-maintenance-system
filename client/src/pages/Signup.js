import React, { useState } from "react";
import image from "../assets/login.jpeg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    alert("Signup successful!");
  };

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Left Side - Image */}
        <div className="hidden md:block w-1/2">
          <img
            src={image}
            alt="Signup"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center text-gray-700">
            Sign Up
          </h2>
          <p className="text-center text-gray-500 mb-6">Create your account</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded mt-1 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-tr from-indigo-500 to-pink-500 text-white p-3 rounded hover:opacity-90 transition text-lg"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-gray-500 mt-4">
            Already have an account?
            <Link to="/login" className="text-indigo-500 hover:underline ml-1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
