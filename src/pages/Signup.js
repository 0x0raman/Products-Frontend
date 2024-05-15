import React from 'react';
import { useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Signup = () => {
    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();
        const { username, password } = event.target.elements;

        try {
            await authService.register(username.value, password.value);
            navigate('/');
        } catch (error) {
            console.error('Signup failed', error);
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;