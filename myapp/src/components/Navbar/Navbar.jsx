import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import './Navbar.css';

const Navbar = () => {
  const navigate=useNavigate();
  const { userRole, loginstatus } = useContext(MyContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='navbar-container'>
      <p className='navbar-heading'>WonderBooks</p>
      <div className='hamburger' onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <ul className='navbar-list'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/quiz'>Quiz</Link></li>
          {userRole === 'admin' && <li><Link to='/user'>Users</Link></li>}
          <li><Link to='/books'>Books</Link></li>
          {userRole !== 'admin' && <li><Link to='/about'>About</Link></li>}
          {userRole !== 'admin' && <li><Link to='/contact'>Contact</Link></li>}
          
          {!loginstatus ? 
          <>
          <li><Link to='/'>Login</Link></li>
          </>
          :
          <>
          <li>
          <div className='nav-profile' onClick={()=>{navigate('/profile');}}></div>
            </li>
          </>
          }
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
