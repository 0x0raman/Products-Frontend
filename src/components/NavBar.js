import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const NavBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        authService.logout();
        navigate('/');
    };

    return (
        <nav>
            <ul>
                <li><Link to="/">Login</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default NavBar;