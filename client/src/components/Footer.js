// src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-200">
      &copy; {new Date().getFullYear()} Vehicle Management System
    </footer>
  );
};

export default Footer;
