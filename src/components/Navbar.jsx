
import React, { useState } from 'react';
import '../styles/Navbar.css'; 
import downArrow from '../assets/down-arrow.svg'; 
import adobeLogo from '../assets/adobe-logo.png'; 
import { Link } from 'react-router-dom';

function Navbar() {
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const [freelancerDropdownOpen, setFreelancerDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false); // New state for mobile nav

  const handleExploreMouseEnter = () => {
    setExploreDropdownOpen(true);
  };

  const handleExploreMouseLeave = () => {
    setExploreDropdownOpen(false);
  };

  const handleFreelancerMouseEnter = () => {
    setFreelancerDropdownOpen(true);
  };

  const handleFreelancerMouseLeave = () => {
    setFreelancerDropdownOpen(false);
  };

  // Toggle mobile nav on hamburger click
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen); // Toggle between true and false
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="tlogo">Behance</a>

        <div className="dropdown"
          onMouseEnter={handleExploreMouseEnter}
          onMouseLeave={handleExploreMouseLeave}>
          <a href="#" className="nav-item explore-link">
            Explore
            <img src={downArrow} alt="down arrow" />
          </a>
          {exploreDropdownOpen && (
            <div className="dropdown-content">
              <a href="/Search & Explore" className="explore">Search & Explore</a>
              <a href="/Curated Galleries" className="curatedG">Curated Galleries</a>
              <hr />
              <a href="/Best of Behance">Best of Behance</a>
              <a href="/Graphic Design">Graphic Design</a>
              <a href="/Illustration">Illustration</a>
              <a href="/Photography">Photography</a>
              <a href="/UI/UX">UI/UX</a>
              <a href="/3D Art">3D Art</a>
            </div>
          )}
        </div>

        <Link to="/assets" className="nav-item">Assets</Link>
        <Link to="/jobs" className="nav-item">Jobs</Link>
        <a href="/behance-pro" className="nav-item">Behance <span className="highlight">PRO</span></a>

        <div className="dropdown"
          onMouseEnter={handleFreelancerMouseEnter}
          onMouseLeave={handleFreelancerMouseLeave}>
          <a href="/hire-freelancers" className="nav-item">
            Hire Freelancers <img src={downArrow} alt="down arrow" />
          </a>
          {freelancerDropdownOpen && (
            <div className="freelancer-dropdown">
              <a href="/Hiring on Behance" className="hiring">Hiring on Behance</a>
              <a href="/Find Creatives" className="creatives">Find Creatives</a>
              <a href="/My Freelance Projects" className="freelance-projects">My freelance Projects</a>
              <a href="/New Freelance Projects" className="newfreelance-projects">New Freelance Projects</a>
              <hr />
              <a href="/Logo Designers">Logo Designers</a>
              <a href="/Brand Designers">Brand Designers</a>
              <a href="/Website Designers">Website Designers</a>
              <a href="/Illustrators">Illustrators</a>
              <a href="/Social Media Designers">Social Media Designers</a>
            </div>
          )}
        </div>
      </div>

      <div className="navbar-center">
        <i className="fas fa-search search-icon"></i>
        <input type="text" className="search-input" placeholder="Search...." />
      </div>

      <div className="navbar-right">
        <i className="fa-solid fa-bell" style={{ color: '#0a0a0a', marginRight: '10px' }}></i> {/* Adjust margin for bell */}
        <Link to="/login" className="login-button">Log In</Link>
        <Link to="/signup" className="signup-button">Sign Up</Link>
        <p><img src={adobeLogo} className="adobe-logo" alt="Adobe" /></p>
      </div>

      <div className="hamburger-icon" onClick={toggleMobileNav}>
        <i className="fa fa-bars"></i>
      </div>

      {/* Mobile nav */}
      {mobileNavOpen && (
        <div className="mobile-nav">
          <Link to="/assets" className="nav-item">Assets</Link>
          <Link to="/jobs" className="nav-item">Jobs</Link>
          <Link to="/hire-freelancers" className="nav-item">Hire Freelancers</Link>
          <a href="/behance-pro" className="nav-item">Behance <span className="highlight">PRO</span></a> {/* Added Behance PRO */}
          <Link to="/login" className="nav-item">Log In</Link>
          <Link to="/signup" className="nav-item">Sign Up</Link>
          
        </div>
      )}
    </nav>
  );
}

export default Navbar;

