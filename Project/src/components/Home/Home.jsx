import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video from '../../assets/tangled.mp4';
import { MyContext } from '../context/Context';
import { stories } from '../SharedData';
import './Home.css';
const Home = () => {
  const {setStoryname,userRole}=useContext(MyContext);
  const navigate = useNavigate();
  const [animationClass, setAnimationClass] = useState('message-enter');

  useEffect(() => {
    // ScrollReveal().reveal('.story-card', {
    //   origin: 'right',
    //   distance: '20px',
    //   duration: 300, 
    //   easing: 'ease-in-out',
    //   interval: 200,
    // });

    const intervalId = setInterval(() => {
      setAnimationClass('message-exit');
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimationClass('message-enter');
      }, 500); 
    }, 3000);
  
    return () => clearInterval(intervalId);
  });
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
      <div className="home-div1">
        <video autoPlay loop muted src={video} alt="Hero" className="video" />
      </div>
      <div className="home-div2">
        <h1 className={`home-h1 ${animationClass}`} >{messages[currentMessageIndex]}</h1>
        <p className="p3">Personalize a Best Seller</p>
        <div className="story-card-div" style={{backgroundColor:'brown'}}>
          {stories.slice(0, 4).map((story) => (
            <div
              key={story.id}
              className="story-card"
              
            >
              <div className={`card-image ${story.imageClass}`}></div>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              {userRole==='admin' ?
              <div className='admin-buttons'>
              <button  className='story-edit-btn'>Edit</button>
              <button className='story-delete-btn'>Delete</button>
              </div>
              :
               <button className="btn"  onClick={()=>{navigateStory(story.title)}}>
               Personalize
             </button>
              }
            </div>
          ))}
        </div>
        <div className="story-card-div" style={{backgroundColor:'brown'}}>
          {stories.slice(4,8).map((story) => (
            <div
              key={story.id}
              className="story-card"
            >
              <div className={`card-image ${story.imageClass}`}></div>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              {userRole==='admin' ?
              <div className='admin-buttons'>
               <button  className='story-edit-btn'>Edit</button>
               <button className='story-delete-btn'>Delete</button>
              </div>
              :
               <button className="btn"  onClick={()=>{navigateStory(story.title)}}>
               Personalize
             </button>
              }
            </div>
          ))}
        </div>
          <p className="p1">Comics</p>
         <div className="story-card-div">
          {stories.slice(8,12).map((story) => (
            <div
              key={story.id}
              className="story-card"
            >
              <div className={`card-image ${story.imageClass}`}></div>
              <h2>{story.title}</h2>
              <p>{story.description}</p>
              {userRole==='admin' ?
              <div className='admin-buttons'>
               <button  className='story-edit-btn'>Edit</button>
               <button className='story-delete-btn'>Delete</button>
              </div>
              :
               <button className="btn"  onClick={()=>{navigateStory(story.title)}}>
               Personalize
             </button>
              }
            </div>
          ))}
        </div>  
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
    </>
  );
}
export default Home;
