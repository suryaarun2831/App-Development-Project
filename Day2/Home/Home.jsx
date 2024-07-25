import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpeg';
import './Home.css';
const Home = () => {
  useEffect(()=>{
    ScrollReveal().reveal('.story-card',
      {
        origin: 'right',
        distance: '20px',
        duration: 600,
        easing: 'ease-in-out',
        interval: 200,
      }
    );
  },[]);
  return (
    <>
       <div className='home-div1'>
        <h1 className='home-h1'>Learning for everyone</h1>
      </div>
      <div className='home-div2'>
          <p className='p3'>Personalize a bestSeller</p>
          <div className='story-card-div'>
              <div className='story-card'>
                <div className='card-image1'></div>
                <h2>Me and My Big Brother</h2>
                <p>A story about growing up together</p>
                <button className='btn'>Personalize</button>
              </div>
              <div className='story-card'>
                <div className='card-image2'></div>
                  <h2>First Birthday For You</h2>
                <p>Perfect for baby's first birthday</p>
                <button className='btn'>Personalize</button>
              </div>
              <div className='story-card'>
                <div className='card-image3'></div> 
                <h2>I'm a Name-O-Saurus</h2>
                <p>A stomping,romping dinosaur adventure</p>
                <button className='btn'>Personalize</button>
              </div>
              <div className='story-card'>
                <div className='card-image4'></div>
                <h2>When You Were Born</h2>
                <p>A story to celebrate a new baby Personalize</p>
                <button className='btn'>Personalize</button>
                <p></p>
              </div>
          </div>
        <p className='p1'>New Story!</p>
        <p className='p2'>I DON’T WANT A HAIRCUT</p>
        <div className='story'>
          <Link to='/haircut'><img src={image1} alt='Image' /></Link>
          <p className='story-des'>
            Sammy and haircuts did not get along. In fact, he decided one day that he would never get another haircut again. But, soon Sammy realized that avoiding the barber, and letting your hair get longer, and longer, and longer… wasn’t all it’s cracked up to be. Turns out, when you can’t see what you’re eating, you might end up eating napkins instead of pancakes! And nobody wants to find potato chips in their hair! This illustrated story for kids is a fun lesson for anyone who doesn’t like haircuts!
          </p>
        </div>
        <p className='p1'>STORY OF THE MONTH: JULY</p>
        <p className='p2'>THE GUARDIANS OF LORE</p>
        <div className='story'>
          <Link to='/'><img src={image2} alt='Image' /></Link>
          <p className='story-des'>
            While drawing in class at Stagwood School, 12-year old Cal sees a frog staring at him through the window. Stranger than that, is the fact that this frog happens to be wearing glasses.
          </p>
          <p className='story-des'>
            Cal and his best friend, Soy, learn that the frog (who prefers the name Deli) has sought them out for a reason. When a school administrator named Ream reveals himself to be a dragon, the boys discover that fairytales are real, and that there is magic afoot in Stagwood. With Ream on their tail, the trio must unearth a powerful tool protected by riddles and rile (the magic that fuels nightmares) to save the fate of all fairytales past. But, before Cal can defeat Ream, he has to deal with Soy's knack for arguing with magical creatures, discover the truth about Deli's identity, and earn his place as the hero of the story. The Guardians of Lore is a middle grade novel that centers around two life-long friends, infusing humor and fantasy-based riddles into a modern fairytale.
          </p>
          <p className='story-des'>
            One of our most-read and fun stories of all time!
          </p>
        </div>
      </div>
    </>
  )
}
export default Home