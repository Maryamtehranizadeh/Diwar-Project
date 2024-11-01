import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/admin">Admin Panel</NavLink>
      <NavLink to="/auth">Login</NavLink>
      <NavLink></NavLink>
    </div>
  );
}

export default Navbar;
