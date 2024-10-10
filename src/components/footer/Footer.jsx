import React from 'react';
import './Footer.css';
import footerlogo from "../../assets/footerlogo.png"


function App() {
  return (
    <footer>
      <div className="footer-contentABK">
        <div className="logo-and-linksABK">
          <div className="behance-logoABK">
            <a href="#root">
              <img src={footerlogo} alt="Behance Logo" />
            </a>
          </div>
          <div className="links-containerABK">
            <div className="footer-sections-wrapperABK">
              <div className="footer-sectionABK">
                <h4>Built For Creatives</h4>
                <ul>
                  <li><a href="#">Try Behance Pro</a></li>
                  <li><a href="#">Find Inspiration</a></li>
                  <li><a href="#">Get Hired</a></li>
                  <li><a href="#">Sell Creative Assets</a></li>
                  <li><a href="#">Sell Freelance Services</a></li>
                </ul>
              </div>
              <div className="footer-sectionABK">
                <h4>Find Talent</h4>
                <ul>
                  <li><a href="#">Post a Job</a></li>
                  <li><a href="#">Graphic Designers</a></li>
                  <li><a href="#">Photographers</a></li>
                  <li><a href="#">Video Editors</a></li>
                  <li><a href="#">Web Designers</a></li>
                  <li><a href="#">Illustrators</a></li>
                </ul>
              </div>
              <div className="footer-sectionABK">
                <h4>Behance</h4>
                <ul>
                  <li><a href="#">About Behance</a></li>
                  <li><a href="#">Adobe Portfolio</a></li>
                  <li><a href="#">Download the App</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Help Center</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div className="footer-sectionABK">
                <h4>Social</h4>
                <ul className="social-iconsABK">
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i>facebook</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter" aria-hidden="true"></i>twitter</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i>instagram</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i>linkedin</a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-pinterest" aria-hidden="true"></i>pinterest</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-legalABK">
          <p className="copyrightABK"> 2024 Adobe Inc. All rights reserved.</p>
          <ul className="legal-linksABK">
            <li><a href="#">English</a></li>
            <li><a href="#">TOU</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Cookie preferences</a></li>
            <li><a href="#">Do not sell or share my personal information</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default App;