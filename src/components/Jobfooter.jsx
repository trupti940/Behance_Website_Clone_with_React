import React from "react";
import '../styles/Jobfooter.css'; // Ensure this path is correct

const Jobfooter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-links">
          <a href="#">More Behance</a>
          <a href="#">English</a>
          <a href="#">Try Behance Pro</a>
          <a href="#">TOU</a>
          <a href="#">Privacy</a>
          <a href="#">Community</a>
          <a href="#">Help</a>
          <a href="#">Cookie Preferences</a>
        </div>
        <div className="right-logo">
          <span>Do not sell or share my personal information</span>
          <div className="adobe-icon">Adobe</div>
        </div>
      </div>
    </footer>
  );
};

export default Jobfooter;
