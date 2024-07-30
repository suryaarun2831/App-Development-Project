import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import './Quiz.css';
const Quiz = () => {
  useEffect(()=>{
    ScrollReveal().reveal('.quiz-div .quiz-section',{
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        easing: 'ease-in-out',
        interval: 200,
    });
  },[]);
    const navigate=useNavigate();
  return (
    <>
    <div className='quiz-div'>
        <div className='quiz-section' onClick={()=>{navigate('/Question')}}>
                
        </div>
    </div>
    </>
  )
}

export default Quiz