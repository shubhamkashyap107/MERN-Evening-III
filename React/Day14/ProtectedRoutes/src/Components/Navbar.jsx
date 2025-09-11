import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "12px 20px",
    backgroundColor: "#1e3a8a", // blue
    color: "white",
    fontWeight: "500",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px",
    padding: "6px 12px",
    borderRadius: "6px",
    transition: "0.3s",
  };

  const linkHoverStyle = {
    backgroundColor: "#2563eb", // darker blue
  };

  return (
    <nav style={navStyle}>
      <Link to="/home" style={linkStyle}>
        Home
      </Link>
      <Link to="/about" style={linkStyle}>
        About
      </Link>
      <Link to="/profile" style={linkStyle}>
        Profile
      </Link>
      <Link to="/login" style={linkStyle}>
        Login
      </Link>
      <Link to="/signup" style={linkStyle}>
        Signup
      </Link>
    </nav>
  );
};

export default Navbar;
