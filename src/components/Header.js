// Header.js
import React from 'react';
import '../style.css';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="nav">
                <a href="/" className="nav-item">Home</a>
                <a href="/teacher" className="nav-item">Teacher</a>
                <a href="/student" className="nav-item">Student</a>
                <a href="/chat" className="nav-item">Chat</a>
            </div>
            <div>
                <Link className="text-decoration-none" to="/help"><button className="help-button">Help</button></Link>
                <Link className="text-decoration-none" to="/about"><button className="about-button">About</button></Link>
            </div>
        </header>
    );
};

export default Header;