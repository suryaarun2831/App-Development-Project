import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MyContext } from '../context/Context';
import './Navbar.css';
const Navbar = () => {
  const {userRole,setuserRole,loginstatus}=useContext(MyContext);
  console.log(userRole);
  return (
    <div className='nav-div'>
        <p className='heading'>WonderBooks</p>
        <div className='nav-links'>
            <ul>
                <li><Link  to='/home'>Home</Link></li>
                <li><Link  to='/about'>About</Link></li>
                <li><Link  to='/contact'>Contact</Link></li>
                <li><Link  to='/quiz'>Quiz</Link></li>
                {userRole === 'admin' && <li><Link to='/user'>Users</Link></li>}
                <li><Link  to='/stories'>Stories</Link></li>
                {!loginstatus ? <li><Link to='/'>Login/Signin</Link></li> : <li><Link to='/' style={{color:'red'}}
                 onClick={()=>{setuserRole('')}}>LogOut</Link></li>}
            </ul>
        </div>
    </div>
  );
}

export default Navbar;