import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import { stories } from '../SharedData';
import { MyContext } from '../context/Context';
import './StoriesHome.css';

const StoriesHome = () => {
  useEffect(()=>{
    ScrollReveal().reveal('.subs-card-div',{
        origin: 'bottom',
        distance: '20px',
        duration: 300, 
        easing: 'ease-in-out',
        interval: 500,
      }
    )
  },[]);
  const { setStoryname } = useContext(MyContext);
  const navigate = useNavigate();
  
  const navigateStory = (title) => {
    setStoryname(title);
    navigate('/story-page');
  };

  return (
    <>
    <div className="story">

    <div className="story-des">
        <h1 className="video-tag">Tangled</h1>
        <p>
            In the magical kingdom of Corona, a spirited young woman named Rapunzel lives a secluded life in a hidden tower, her hair holding the secret to eternal youth. Raised by the cunning Mother Gothel, Rapunzel dreams of seeing the floating lanterns that fill the sky on her birthday every year.
        </p>
        <p>
            Her adventure begins when she encounters Flynn Rider, a charming thief seeking refuge. Striking a deal with him, Rapunzel embarks on a journey to see the lanterns and discover the world outside. Along the way, they meet delightful characters like the steadfast horse Maximus and the chameleon Pascal.
        </p>
        <p>
            As Rapunzel uncovers the truth about her royal heritage and the mysteries surrounding her past, she learns about bravery, love, and her true identity. "Tangled" is a heartwarming tale of adventure, self-discovery, and the magic of finding one's own path. One of our most-read and cherished stories, "Tangled" continues to enchant readers of all ages!
        </p>
    </div>
</div>

    <div className='subs-container'>
      <p className="p1">Subscription</p>
         <div className="subs-card-div">
          {stories.slice(12,16).map((story) => (
            <div
            key={story.id}
            className="story-card"
            >
              <div className={`card-image ${story.imageClass}`}></div>
              <h2 >{story.title}</h2>
              <p>{story.description}</p>
              <p></p>
              <button className="btn" onClick={()=>{navigateStory(story.title)}}>
                BUY NOW
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default StoriesHome;
