import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

const Loginpage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const Register = () => {
        navigate('/register');
    }

    const validateUsername = (username) => {
        return username.length >= 3;
    }

    const validatePassword = (password) => {
        return password.length >= 6;
    }

    const login = async (e) => {
        e.preventDefault();
        if (username === '' || password === '') {
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
                    navigate('/home');
                } else {
                    console.log(username+' '+password);
                    setError('Invalid username or password.');
                }
            } catch (error) {
                console.error(error);
                setError('Login failed. Please try again.');
            }
        }
    }
    return (
        <>
            <form onSubmit={login}>
                    <div className='login-container'>
                        <h2>Welcome</h2>
                        {error && <p className='error'>{error}</p>}
                        <label>Enter username :</label>
                        <input 
                            type='text' 
                            className='text-box' 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        <label>Enter password :</label>
                        <input 
                            type='password' 
                            className='text-box' 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                        <button type='submit' className='login-btn'>Login</button>
                        <p className='login-p'>Don't have an account? 
                            <button type='button' onClick={Register} className='reg-btn'>Sign Up</button>
                        </p>
                    </div>
            </form>
        </>
    );
}

export default Loginpage;
