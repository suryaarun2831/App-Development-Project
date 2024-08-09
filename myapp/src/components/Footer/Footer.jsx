import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <>
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li><Link to="/new-releases">New Releases</Link></li>
              <li><Link to="/best-sellers">Best Sellers</Link></li>
              <li><Link to="/graphic-novels">Graphic Novels</Link></li>
              <li><Link to="/manga">Manga</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Explore</h3>
            <ul>
              <li><Link to="/genres">Genres</Link></li>
              <li><Link to="/publishers">Publishers</Link></li>
              <li><Link to="/authors">Authors</Link></li>
              <li><Link to="/characters">Characters</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>About</h3>
            <ul>
              <li><Link to="/our-story">Our Story</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Legal</h3>
            <ul>
              <li><Link to="/terms-of-service">Terms of Service</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy">Cookie Policy</Link></li>
              <li><Link to="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Connect</h3>
            <ul className="social-icons">
              <li><Link to="/instagram"><FaInstagram /></Link></li>
              <li><Link to="/twitter"><FaTwitter /></Link></li>
              <li><Link to="/facebook"><FaFacebook /></Link></li>
              <li><Link to="/youtube"><FaYoutube /></Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className='copyright'>&copy; 2024 Comic Book Store. All rights reserved.</p>
          <div>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;