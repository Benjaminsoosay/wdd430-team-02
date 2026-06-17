'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Shop' },
    { href: '/artisans', label: 'Artisans' },
    { href: '/about', label: 'About' },
  ]

  const navStyles = {
    backgroundColor: "#7c5f4b",
    color: "white",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
    padding: "0.75rem 1.5rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.15)"
  }

  const containerStyles = {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap" as const
  }

  const logoStyles = {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "white",
    textDecoration: "none",
    transition: "color 0.3s ease"
  }

  const desktopMenuStyles = {
    display: "flex",
    gap: "1.5rem",
    alignItems: "center"
  }

  const linkStyles = {
    color: "white",
    textDecoration: "none",
    padding: "0.3rem 0",
    transition: "color 0.3s ease",
    fontSize: "0.95rem"
  }

  const activeLinkStyles = {
    color: "#f0dcc8",
    borderBottom: "2px solid #f0dcc8",
    paddingBottom: "0.3rem"
  }

  const cartStyles = {
    backgroundColor: "rgba(255,255,255,0.15)",
    color: "white",
    padding: "0.4rem 1rem",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontSize: "0.9rem",
    transition: "background-color 0.3s ease"
  }

  const mobileButtonStyles = {
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    fontSize: "1.8rem",
    cursor: "pointer",
    padding: "0.2rem 0.5rem"
  }

  const mobileMenuStyles = {
    backgroundColor: "#6b4f3d",
    padding: "1rem 1.5rem",
    marginTop: "0.5rem",
    borderRadius: "0.5rem"
  }

  const mobileLinkStyles = {
    display: "block",
    color: "white",
    textDecoration: "none",
    padding: "0.75rem 0",
    borderBottom: "1px solid rgba(255,255,255,0.15)",
    transition: "color 0.3s ease"
  }

  const mobileCartStyles = {
    display: "block",
    width: "100%",
    textAlign: "left" as const,
    backgroundColor: "transparent",
    color: "white",
    border: "none",
    padding: "0.75rem 0",
    cursor: "pointer",
    fontSize: "0.95rem",
    borderBottom: "1px solid rgba(255,255,255,0.15)"
  }

  return (
    <nav style={navStyles}>
      <div style={containerStyles}>
        {/* Logo */}
        <Link href="/" style={logoStyles}>
          Handcrafted Haven
        </Link>

        {/* Desktop Menu */}
        <div style={desktopMenuStyles}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                ...linkStyles,
                ...(pathname === link.href ? activeLinkStyles : {})
              }}
              onMouseEnter={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "#f0dcc8"
                }
              }}
              onMouseLeave={(e) => {
                if (pathname !== link.href) {
                  e.currentTarget.style.color = "white"
                }
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cart Icon - Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button style={cartStyles}>
            🛒 Cart (0)
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={mobileButtonStyles}
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div style={mobileMenuStyles}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              style={mobileLinkStyles}
            >
              {link.label}
            </Link>
          ))}
          <button style={mobileCartStyles}>
            🛒 Cart (0)
          </button>
        </div>
      )}
    </nav>
  )
}