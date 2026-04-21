import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <nav id="main-nav" className={`navbar ${isScrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <div className="logo">
          <Link to="/">
            <div className="logo-circle">
              <img src="/assets/Himalayan_Yoga_Academy.png" alt="Himalayan Yoga Academy Logo" />
            </div>
            <span className="logo-text">Himalayan Yoga <br /><small>Academy</small></span>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className={isHome ? 'active' : ''}>Home</Link></li>
          <li><a href={isHome ? '#about' : '/#about'}>About</a></li>
          <li><a href={isHome ? '#training' : '/#training'}>Training</a></li>
          <li><a href={isHome ? '#retreats' : '/#retreats'}>Retreats</a></li>
          <li><a href={isHome ? '#team' : '/#team'}>Our Gurus</a></li>
          <li><a href="#contact" className="btn-nav">Book Now</a></li>
        </ul>
        <div className="mobile-menu-btn" id="mobile-menu-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
