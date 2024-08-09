import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import './About.css';

const About=()=> {
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
    <section className="about">
      <h2 className='about-h2'>About Us</h2>
      <p>Welcome to <strong>WonderBooks</strong>, where imagination meets education! Our mission is to create a magical space where children can explore the wonders of storytelling while learning valuable lessons.</p>
      <h3>Our Vision</h3>
      <p>At WonderBooks, we believe that every story is a journey that can inspire, educate, and entertain. Our goal is to ignite children's creativity and curiosity by offering a diverse range of interactive stories and educational activities.</p>
      <h1 className="Comics" style={{textAlign:'center'}}>Developers</h1>
      <div className='creater-container'>
        <div className='creater-card'> 
          <div className='sunil-img'></div>
          <h1>Sunil</h1>
          <p>SpringBoot</p>
        </div>
        <div className='creater-card'> 
          <div className='surya-img'></div>
          <h1>Surya</h1>
          <p>Front-end</p>
        </div>
        <div className='creater-card'> 
          <div className='yokesh-img'></div>
          <h1>Yokesh</h1>
          <p>UI Design</p>
        </div>
      </div>
    </section>
    </>
  );
}

export default About;
