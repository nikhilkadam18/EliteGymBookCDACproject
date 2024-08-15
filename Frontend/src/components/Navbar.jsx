import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [mobile, setMobile] = useState(true);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
            <div className="container">
                <NavLink to="/" className="navbar-brand" style={{ fontSize: '1.2rem' }}>EliteGymBook</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMobile(!mobile)}
                    aria-controls="navbarNav"
                    aria-expanded={!mobile ? "true" : "false"}
                    aria-label="Toggle navigation"
                >
                    <FaBars />
                </button>

                <div className={`collapse navbar-collapse ${mobile ? 'collapse' : 'show'}`} id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item" id='nav-items'>
                            <NavLink exact to="/" activeClassName="current" className="nav-link" style={{ fontSize: '1rem' }}>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="current" className="nav-link" style={{ fontSize: '1.22rem' }}>
                                AboutUs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/price" activeClassName="current" className="nav-link" style={{ fontSize: '1.22rem' }}>
                                Membership
                            </NavLink>
                        </li>
                        
                        <li className="nav-item">
                            <NavLink to="/login" className="nav-link btn btn-primary btn-sm ml-lg-3" style={{ fontSize: '1.22rem' }}>
                                Join Now
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
