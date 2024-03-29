import React, { useState, useEffect } from 'react';
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaDev } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <FaDev className="navbar-icon" />
                            Rasmus
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog" className="nav-links" onClick={closeMobileMenu}>
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projects" className="nav-links" onClick={closeMobileMenu}>
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/fifa" className="btn-link">
                                        <Button buttonStyle="btn--outline">FIFA</Button>
                                    </Link>
                                ) : (
                                    <Link to="/fifa" className="btn-link">
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={closeMobileMenu}>
                                            FIFA
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
}

export default Navbar;
