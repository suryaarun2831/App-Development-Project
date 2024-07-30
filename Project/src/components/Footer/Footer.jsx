// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="logo-section">
                    <h2>WonderBooks</h2>
                    <p>Your portal to endless fun and learning!</p>
                </div>
                <div className="footer-links">
                    <h3>Explore</h3>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/stories">Stories</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="resource-links">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="/support">Support</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/terms">Terms of Service</a></li>
                        <li><a href="/community">Community Guidelines</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 @WonderBooks. All rights reserved.</p>
                <p>Follow us on:</p>
                <div className="social-icons">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
