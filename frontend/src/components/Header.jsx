import React from 'react';
import '../index.css';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';


const Header = () => {
    const toggleMenu = () => {
        document.querySelector('.nav').classList.toggle('active');
    };

    return (
        <header id="header">
            <div className="logo">
                <img src={Logo} alt="portfolio-logo" />
            </div>
            <div className="menu-toggle" onClick={toggleMenu}>
                <i className="fa fa-solid fa-bars"></i>
            </div>
            <nav className="nav">
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
