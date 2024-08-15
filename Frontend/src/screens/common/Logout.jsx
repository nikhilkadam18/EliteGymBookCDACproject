import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { NavLink, useHistory } from 'react-router-dom';

const Logout = () => {
    const [mobile, setMobile] = useState(true);
    const history = useHistory();

    const handleLogout = () => {
        sessionStorage.setItem('LoginStatus', 0);
        history.push("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <NavLink to="/" className="navbar-brand">
                EliteGymClub
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={() => setMobile(!mobile)}
                >
                    <FaBars />
                </button>
                <div className={`collapse navbar-collapse ${mobile ? 'show' : ''}`}>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button 
                                className="btn btn-danger btn-lg" 
                                onClick={handleLogout}>
                                LOG OUT
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Logout;
