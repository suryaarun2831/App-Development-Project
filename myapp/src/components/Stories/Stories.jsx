import React, { useContext } from 'react';
import { MyContext } from '../context/Context';
import { stories_content } from '../SharedData';
import './Stories.css';

const Stories = () => {
  const { storyname } = useContext(MyContext);
  const storyData = stories_content[storyname];

  if (!storyData) {
    return <h1>Story not found</h1>;
  }

  return (
    <div className='story-container'>
      <h1 className='story-title'>Story: {storyname}</h1>
      <div className='story-content'>
        <img className='story-img' src={storyData.image} alt='Not Found'/>
        <div className='story-text'>{storyData.text}</div>
      </div>
    </div>
  );
};

export default Stories;
