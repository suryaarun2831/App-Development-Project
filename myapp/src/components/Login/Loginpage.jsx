import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { getUsersData } from '../API/Api';
import { MyContext } from '../context/Context';
import CusToast from '../Toaster/Toaster';
import './Loginpage.css';

const Loginpage = () => {
    const { setuserRole, setLoginStatus, loginId, setLoginId } = useContext(MyContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const register = () => {
        navigate('/register');
    };

    const login = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Both Fields are Required");
        } else {
            
            try {
                const response = await getUsersData();
                const users = response.data;
                const user = users.find(user => user.username === username && user.password === password);

                if (user) {
                    toast.success("Login Success");
                    setLoginStatus(true);
                    setLoginId(user.id);
                    setuserRole(user.role === 'user' ? 'user' : 'admin');
                    setTimeout(() => {
                        console.log(user.id);
                        console.log(loginId);
                        navigate('/home');
                    }, 2000);
                } else {
                    toast.error("Invalid Username or Password");
                }
            } catch (error) {
                toast.error(error + "Login Failed. Please Try Again");
            }
        }
    };

    return (
        <form onSubmit={login} className="login-form">
            <CusToast />
            <div className='login-total-page'>
                <div className='login-content'>
                    <div className='login-image'></div>
                    <div className='login-container'>
                        <h2>Welcome</h2>
                        <div className='input-group'>
                            <label>Enter username:</label>
                            <input 
                                type='text' 
                                className='text-box' 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </div>
                        <div className='input-group'>
                            <label>Enter password:</label>
                            <input 
                                type='password' 
                                className='text-box' 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <button type='submit' className='login-btn'>Login</button>
                        <p className='login-p'>
                            Don't have an account? 
                            <button type='button' onClick={register} className='reg-btn'>Sign Up</button>
                        </p>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Loginpage;
