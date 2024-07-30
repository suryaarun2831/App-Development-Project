import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [role,setRole]=useState('role');

    const navigate = useNavigate();

    const Login = () => {
        navigate('/');
    }

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    const validatePassword = () => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return re.test(String(password));
    }

    const validateConfirmPassword = () => {
        return password === confirmPassword;
    }

    const validateName = () => {
        return username.length > 2;
    }

    const register = (event) => {
        event.preventDefault();
        if (!validateName()) {
            setError('Name must be more than 2 characters.');
        } else if (!validateEmail(email)) {
            setError('Invalid email format.');
        } else if (!validatePassword()) {
            setError('Password must strong,at least one uppercase,lowercase,number,special character.');
        } else if (!validateConfirmPassword()) {
            setError('Passwords do not match.');
        } else {
            setError('');
            axios.post('http://localhost:3001/users', {
                username,
                email,
                password,
                role
            })
            .then((response) => {
                console.log(response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setError('Registration failed. Please try again.');
            });
        }
    }

    return (
        <>
            <form onSubmit={register}>
            <div className='login-image'>
            </div>
                <div className="register-container">
                    <h2>Register</h2>
                    {error && <p className='error'>{error}</p>}
                    <input 
                        type="text" 
                        className='text-box-rgs' 
                        placeholder="Enter your name" 
                        value={username}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        className='text-box-rgs'  
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className='text-box-rgs' 
                        placeholder="Enter your password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        className='text-box-rgs'  
                        placeholder="Confirm password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className='submit-btn'>Create Account</button>
                    <p>Already have an account?
                        <button type="button" onClick={Login} className='reg-btn'>Login</button>
                    </p>
                </div>
            </form>
        </>
    );
}

export default Register;
