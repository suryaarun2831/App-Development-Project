import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/Context';
import { stories } from '../SharedData';
import './Home.css';
const Home = () => {
  const [homestory,sethomestory]=useState([]);
  const {setStoryname,userRole}=useContext(MyContext);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('message-enter');
  useEffect(()=>{
    if(userRole==='')
    {
        navigate('/');
    }
    });
  useEffect(()=>{
    axios.get('http://localhost:3001/stories').then(res => sethomestory(res.data)).catch(error => console.error('Error'));
  },[]);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimationClass('message-exit');
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimationClass('message-enter');
      }, 500); 
    }, 3000);
  
    return () => clearInterval(intervalId);
  },[]);
  const messages = [
    'Learning for Everyone!',
    'Discover the Magic of Stories!',
    'Inspire Your Imagination!',
    'Adventure Awaits!',
    'Unleash Your Creativity!',
    'Where Stories Come Alive!',
    'Explore, Learn, and Grow!',
    'Find Your Next Favorite Tale!',
  ];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const navigateStory=(title)=>{
    setStoryname(title);
    navigate('/story-page');
  }
  return (  
    <>
      <div class="home_div1">
            <div class="Home">
                <h1>Hi, we're WonderBooks.</h1>
                <h4>Home to 97 million people who spend over 26 billion minutes a month engaged in original stories,
                   WonderBooks has democratized storytelling for a new generation of diverse Gen-Z writers and their fans.</h4>
                <h1 className={`home-h1 ${animationClass}`} >{messages[currentMessageIndex]}</h1>
            </div>
            <div className='Home-img'>
            </div>
        </div>
          <h1 className='div2-h1'>Get Discovered</h1>
        <div className="home-div2">
          {stories.slice(0,8).map((story) => (
            <div key={story.id} className="story-card">
            <div className={`card-image ${story.imageClass}`}></div>
            {/* <h2>{story.title}</h2> */}
            {/* {userRole==='admin' ?
            <div className='admin-buttons'>
            <button  className='story-edit-btn'>Edit</button>
            <button className='story-delete-btn'>Delete</button>
            </div>
            :
            <button className="personalize-btn"  onClick={()=>{navigateStory(story.title)}}>
            Personalize
          </button>
            } */}
            </div>  
            ))}  
        </div>

        <div className='home-div3'>
        <div className='Explore-Home'>
           
            <h1>Explore More</h1>
            <p>Looking for more magical tales and exciting adventures? There's so much more to explore!</p>
            <div className='story-card-div'>
              <div className='explore-div1'></div>
              <div className='explore-div2'></div>
              <div className='explore-div3'></div>
              <div className='explore-div4'></div>
              <div className='explore-div5'></div>
            </div>
        </div>
          <h1 className="Comics">Comics</h1>
            <div className='story-card-div'>
              <div className='explore-div6'></div>
              <div className='explore-div7'></div>
              <div className='explore-div8'></div>
              <div className='explore-div9'></div>
              <div className='explore-div10'></div>
            </div>
      </div>
      <div className="impact-section">
          <div className="overlay">
            <div className="impact-content">
              <h1>Our Impact Last Year</h1>
              <div className="impact-stats">
                <div className="stat">
                  <h2>10,000+</h2>
                  <p>People attended</p>
                </div>
                <div className="stat">
                  <h2>300+</h2>
                  <p>Story Hours</p>
                </div>
                <div className="stat">
                  <h2>46</h2>
                  <p>States participated</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
}
export default Home;