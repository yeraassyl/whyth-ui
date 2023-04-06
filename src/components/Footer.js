import React from 'react';
import '../style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2023 Your Company. All rights reserved.</p>
            <div>
                <a href="https://www.facebook.com" className="social-icon">Facebook</a>
                <a href="https://www.twitter.com" className="social-icon">Twitter</a>
                <a href="https://www.linkedin.com" className="social-icon">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
