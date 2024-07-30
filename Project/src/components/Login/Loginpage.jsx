import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import './Loginpage.css';

const Loginpage = () => {
    const { setuserRole, setLoginStatus } = useContext(MyContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const register = () => {
        navigate('/register');
    };

    const validateUsername = (username) => username.length >= 3;
    const validatePassword = (password) => password.length >= 6;

    const login = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            setError('Both fields are required.');
        } else if (!validateUsername(username)) {
            setError('Username must be at least 3 characters long.');
        } else if (!validatePassword(password)) {
            setError('Password must be at least 6 characters long.');
        } else {
            setError('');
            try {
                const response = await axios.get('http://localhost:3001/users');
                const users = response.data;
                const user = users.find(user => user.username === username && user.password === password);

                if (user) {
                    alert('Login Successful');
                    setLoginStatus(true);
                    setuserRole(user.role === 'user' ? 'user' : 'admin');
                    navigate('/home');
                } else {
                    setError('Invalid username or password.');
                }
            } catch (error) {
                console.error(error);
                setError('Login failed. Please try again.');
            }
        }
    };

    return (
        <form onSubmit={login}>
            <div className='login-total-page'>
                <div className='login-image'></div>
                <div className='login-container'>
                    <h2>Welcome</h2>
                    {error && <p className='error'>{error}</p>}
                    <label>Enter username:</label>
                    <input 
                        type='text' 
                        className='text-box' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <label>Enter password:</label>
                    <input 
                        type='password' 
                        className='text-box' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type='submit' className='login-btn'>Login</button>
                    <p className='login-p'>
                        Don't have an account? 
                        <button type='button' onClick={register} className='reg-btn'>Sign Up</button>
                    </p>
                </div>
            </div>
        </form>
    );
};

export default Loginpage;
