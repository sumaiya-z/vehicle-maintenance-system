import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1rem', background: '#333', color: '#fff' }}>
      <Link to="/">Home</Link>
      <Link to="/" style={{ marginRight: '1rem', color: '#fff' }}>Vehicle List</Link>
      <Link to="/add-vehicle" style={{ marginRight: '1rem', color: '#fff' }}>Add Vehicle</Link>
      <Link to="/spare-parts" style={{ marginRight: '1rem', color: '#fff' }}>Spare Parts</Link>
      <Link to="/reminders" style={{ color: '#fff' }}>Reminders</Link>
    </nav>
  );
};

export default Navbar;
