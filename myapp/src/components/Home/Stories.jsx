import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import './Stories.css';
const Stories = () => {
  const navigate=useNavigate();
  const {userRole}=useContext(MyContext);
  useEffect(()=>{
    if(userRole==='')
    {
        navigate('/');
    }
    });
  return (
    <>
        
    </>
  )
}

export default Stories