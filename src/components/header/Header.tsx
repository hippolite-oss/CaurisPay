import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./header.css";
import logo from "../../assets/logo-cauris.svg";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bascule Dark / Light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        {/* Logo */}
        <div className="navbar-logo">
          <img src={logo} alt="Logo CaurisPay"/>
          <span className="navbar-brand">CaurisPay</span>
        </div>

       
        {/* Hamburger */}
        <button
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
          aria-expanded={isMenuOpen}
        >
          <span></span><span></span><span></span>
        </button>

        {/* Menu */}
        <div className={`navbar-content ${isMenuOpen ? "open" : ""}`}>
          <nav className="navbar-links">
            <ScrollLink to="products" smooth duration={600} offset={-70} onClick={closeMenu}>Products</ScrollLink>
            <ScrollLink to="customers" smooth duration={600} offset={-70} onClick={closeMenu}>Customers</ScrollLink>
            <ScrollLink to="pricing" smooth duration={600} offset={-70} onClick={closeMenu}>Pricing</ScrollLink>
            <ScrollLink to="learn" smooth duration={600} offset={-70} onClick={closeMenu}>Learn</ScrollLink>
          </nav>

          <div className="navbar-buttons">
            <Link to="/connexion" className="btn login" onClick={closeMenu}>Login</Link>
            <Link to="/inscription" className="btn signup" onClick={closeMenu}>Sign Up</Link>
          </div>
        </div>
         {/* Dark/Light Button */}
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? "☀️" : "🌙"}
        </button>

      </header>

      {/* Overlay */}
      <div className={`navbar-overlay ${isMenuOpen ? "open" : ""}`} onClick={closeMenu}></div>
    </>
  );
};

export default Header;
