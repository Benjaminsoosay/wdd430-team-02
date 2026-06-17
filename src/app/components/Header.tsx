"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const headerStyles = {
    backgroundColor: darkMode ? "#1a1a1a" : "#fffcf8",
    borderBottom: darkMode ? "1px solid #333" : "3px solid #e4d9cf",
    padding: "1rem 1.5rem",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
    transition: "background-color 0.3s ease, border-color 0.3s ease"
  };

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const,
    gap: "1rem"
  };

  const logoStyles = {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: darkMode ? "#e8dfd6" : "#2b2520"
  };

  const logoSpanStyles = {
    color: "#7c5f4b"
  };

  const navStyles = {
    display: "flex",
    flexWrap: "wrap" as const,
    alignItems: "center",
    gap: "1.5rem"
  };

  const linkStyles = {
    color: darkMode ? "#b5a89b" : "#4d3e33",
    textDecoration: "none",
    fontWeight: 500,
    transition: "color 0.3s ease",
    fontSize: "0.95rem"
  };

  const linkHoverStyles = {
    color: "#7c5f4b"
  };

  const buttonStyles = {
    backgroundColor: darkMode ? "#333" : "#f4ede7",
    color: darkMode ? "#e8dfd6" : "#2b2520",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "1.2rem",
    transition: "background-color 0.3s ease"
  };

  const signInStyles = {
    backgroundColor: "#7c5f4b",
    color: "white",
    padding: "0.5rem 1.5rem",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    fontSize: "0.9rem",
    fontWeight: 600,
    textDecoration: "none",
    transition: "background-color 0.3s ease"
  };

  const mobileMenuStyles = {
    display: "flex",
    flexDirection: "row" as const,
    alignItems: "center",
    gap: "1.5rem",
    flexWrap: "wrap" as const
  };

  return (
    <header style={headerStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <div style={logoStyles}>
          <span style={logoSpanStyles}>Handcrafted</span>
          <span>Haven</span>
        </div>

        {/* Navigation */}
        <div style={mobileMenuStyles}>
          <Link href="#" style={linkStyles}>Home</Link>
          <Link href="#" style={linkStyles}>Marketplace</Link>
          <Link href="#" style={linkStyles}>Sell</Link>
          <Link href="#" style={linkStyles}>About</Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            style={buttonStyles}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          {/* Sign In Button */}
          <Link href="#" style={signInStyles}>
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
}