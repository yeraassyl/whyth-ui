// Header.js
import React from 'react';
import {useState} from 'react';
import '../style.css';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    const handleThemeSwitch = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark-theme');
    };

    return (
        <header className="header">
            <div className="nav">
                <a href="/" className="nav-item">Your Logo</a>
                <a href="/chat" className="nav-item">Chat</a>
                <a href="/teacher" className="nav-item">Teacher</a>
                <a href="/student" className="nav-item">Student</a>
            </div>
            <div>
                <button className="help-button">Help</button>
                <button className="about-button">About</button>
            </div>
        </header>
    );
};

export default Header;