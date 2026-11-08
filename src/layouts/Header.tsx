import { useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";
import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          LOGO
        </Link>

        {/* Desktop navigation */}
        <nav className="desktop-nav">
          <NavLink to="/projects">PROJECTS</NavLink>
          <NavLink to="/about">ABOUT ME</NavLink>
        </nav>

        <NavLink to="/contacts" className="desktop-contact">
          CONTACTS
        </NavLink>

        {/* Hamburger button */}
        <button
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Full-screen mobile overlay */}
      <nav
        id="mobile-navigation"
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="mobile-nav-links">
          <Link to="/projects" onClick={closeMenu}>
            PROJECTS
          </Link>
          <Link to="/about" onClick={closeMenu}>
            ABOUT ME
          </Link>
          <Link to="/contacts" onClick={closeMenu}>
            CONTACTS
          </Link>
        </div>
      </nav>
    </header>
  );
};
