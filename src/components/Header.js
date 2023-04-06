// Header.js
import React from 'react';
import { useState } from 'react';
// import {Link} from 'react-router-dom';
// import styles from './Header.module.css';
import '../style.css';

const Header = () => {
    const [isDark, setIsDark] = useState(false);

    const handleThemeSwitch = () => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle('dark-theme');
    };

    return (
        // <header className={styles.header}>
        //     <div className={styles.container}>
        //         <div className={styles.headerContent}>
        //             <h1 className={styles.logo}>Chat App</h1>
        //             <nav className={styles.navigation} id="main-navigation">
        //                 <Link to="/">Select Role</Link>
        //                 <Link to="/teacher">Teacher</Link>
        //                 <Link to="/student">Student</Link>
        //                 <Link to="/chat">Chat</Link>
        //             </nav>
        //             <button
        //                 className={styles.themeSwitcher}
        //                 onClick={handleThemeSwitch}
        //             >
        //                 {isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
        //             </button>
        //             <button className={styles.navToggle} id="nav-toggle">
        //                 <span></span>
        //                 <span></span>
        //                 <span></span>
        //             </button>
        //         </div>
        //     </div>
        // </header>
        <header className="header">
            <div className="logo">Your Logo</div>
            <button className="sign-button">Sign In</button>
        </header>
    );
};

export default Header;