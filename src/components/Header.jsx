import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">Men Parfume</span>
          </div>
          
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <a href="#hero" onClick={() => setIsMenuOpen(false)}>Beranda</a>
            <a href="#why" onClick={() => setIsMenuOpen(false)}>Keunggulan</a>
            <a href="#products" onClick={() => setIsMenuOpen(false)}>Koleksi</a>
            <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Ulasan</a>
            <a href="#cta" onClick={() => setIsMenuOpen(false)} className="nav-cta">
              Belanja Sekarang
            </a>
          </nav>

          <button className="menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
