import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

function Navbar({ currentRoute, navigateTo, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { label: 'Home', hash: '#home' },
    { label: 'Revenue Systems', hash: '#revenue-systems' },
    { label: 'Solutions', hash: '#solutions' },
    { label: 'About', hash: '#about' },
    { label: 'Contact', hash: '#contact' },
  ];

  const handleLinkClick = (hash, e) => {
    e.preventDefault();
    navigateTo(hash);
  };

  return (
    <header className="navbar-header">
      <div className="container navbar-container">
        {/* Premium Logo */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick('#home', e)}
          className="navbar-logo-link"
        >
          <img
            src="/image.png"
            alt="LeadZenix Logo"
            className="navbar-logo-img"
          />
        </a>
        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={(e) => handleLinkClick(link.hash, e)}
              className={`nav-link ${currentRoute === link.hash ? 'active' : ''}`}
            >
              {link.label}
              {currentRoute === link.hash && <span className="nav-indicator" />}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta">
          <a
            href="https://cal.com/leadzenix/free-ai-consultation"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm-padding"
          >
            Book Your Free Call
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Burger Button */}
        <button
          className="burger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={(e) => handleLinkClick(link.hash, e)}
                className={`mobile-nav-link ${currentRoute === link.hash ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://cal.com/leadzenix/free-ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mobile-cta"
            >
              Book Your Free Call
              <ArrowRight size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
