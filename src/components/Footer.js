import React from 'react';
import '../style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2023 Something something. All rights reserved.</p>
            <div>
                <a href="https://github.com/yeraassyl" className="social-icon">Github</a>
                <a href="https://t.me/yeraassyl" className="social-icon">Telegram</a>
                <a href="https://www.linkedin.com/in/yerassyl" className="social-icon">LinkedIn</a>
            </div>
        </footer>
    );
};

export default Footer;
