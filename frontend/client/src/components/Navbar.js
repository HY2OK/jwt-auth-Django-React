import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
    const {isAuthenticated} = useSelector(state => state.user);

    const authLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link active" to="/dashboard">
                    Dashboard
                </NavLink>
            </li>
            <li className="nav-item">
                <a href="#">Logout</a>
            </li>
        </>
    );

    const guestLinks = (
        <>
            <li className="nav-item">
                <NavLink className="nav-link active" to="/login">
                    Login
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link active" to="/register">
                    Register
                </NavLink>
            </li>
        </>
    );

    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    Auth
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to="/">
                                Home
                            </NavLink>
                        </li>
                        {/* {authLinks}
                        {guestLinks} */}
                        {isAuthenticated ? authLinks : guestLinks}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
