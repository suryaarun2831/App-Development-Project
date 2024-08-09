import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dora from '../../assets/cards/dora.jpg';
import harry_potter from '../../assets/cards/harry_potter.jpg';
import dreenald from '../../assets/Home-images/dreaanald.jpg';
import hunger_games from '../../assets/Home-images/hunger-games.jpg';
import land_of_stories from '../../assets/Home-images/land_of_stories.jpg';
import maze from '../../assets/Home-images/maze-runner.jpg';
import nevermoon from '../../assets/Home-images/nevermoon.jpg';
import percy from '../../assets/Home-images/percy-jackson.jpg';
import { DeleteStories, GetStories, PostStories } from '../API/Api';
import { MyContext } from '../context/Context';
import './Books.css';

const Books = () => {
  const [story, setStory] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newStory, setNewStory] = useState({ title: '', description: '', img: '' });
  const { userRole } = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userRole === '') {
      navigate('/');
    }
  }, [userRole, navigate]);

  const fetchData = useCallback(async () => {
    try {
      const res = await GetStories();
      if (res && res.data) {
        setStory(res.data);
      } else {
        console.error('Invalid response from GetStories:', res);
      }
    } catch (error) {
      console.error('Error fetching stories:', error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStory({ ...newStory, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await PostStories(newStory); 
      setStory([...story, newStory]);
      setShowModal(false);
      setNewStory({ title: '', description: '',img:''});
    } catch (error) {
      console.error('Error posting story:', error.response ? error.response.data : error.message);
      setShowModal(false);
    }
  };

  const DeleteStoryFunction = async (id) => {
    console.log("Deleting story with ID:", id);
    if (!id) {
      console.error("No ID provided for deletion");
      return;
    }
    try {
      await DeleteStories(id);
      setStory(story=> story.filter(story => story.id !== id));
    } catch (error) {
      console.error('Error deleting story:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <div className="book-container">
          <h1 className='book-h1'>Children's Popular (Age 5-15)</h1>
        <div className='story-explore-content'>
          {story.map((user, index) => (
            <div className='story-explore-card' key={index}>
              <p><img src={`${user.img}`} height={'300px'} width={'220px'}></img></p>
              <p>{user.title}</p>
              <p>{user.description}</p>
              {userRole === 'admin' ? (
                <>
                  <button className='book-edit-btn'>Edit</button>
                  <button className='book-del-btn' onClick={()=> DeleteStoryFunction(index+1)}>Delete</button>
                </>
              ) : (
                <button className='book-btn'>Read More</button>
              )}
            </div>
          ))}
        </div>
      </div>
      {userRole === 'admin' && (
        <button
          style={{
            width: '150px',
            backgroundColor: 'black',
            padding: '10px',
            border: 'none',
            margin: '2% 45%',
            color: 'white',
            fontSize: '16px',
            borderRadius: '10px'
          }}
          onClick={() => setShowModal(true)}
        >
          Add Story
        </button>
      )}
          <h1 className='book-h1'>Popular Stories (Age 15-25)</h1>
        <div className="book-card-div">
          {data1.map((d) => (
            <div className="book-card" key={d.name}>
              <div className="img-div">
                <div>
                  <img src={d.img} alt={d.name} height="300px" width="200px" />
                </div>
                <div className="contents">
                  <p>{d.name}</p>
                  <p>{d.review}</p>
                  <div className='books-btn'>
                    {userRole === 'admin' ? (
                      <>
                        <button className='book-edit-btn'>Edit</button>
                        <button className='book-del-btn'>Delete</button>
                      </>
                    ) : (
                      <button className='book-btn'>Read More</button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <h2>Add New Story</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Title:
                <input
                  type='text'
                  name='title'
                  value={newStory.title}
                  onChange={handleInputChange}
                  required
                  style={{width:'180px',marginLeft:'20px'}}
                />
              </label>
              <label style={{display:'block'}}>
                Description:
                <input
                  name='description'
                  value={newStory.description}
                  onChange={handleInputChange}
                  required
                  style={{width:'180px',marginLeft:'50px',height:'30px'}}
                />
              </label>
              <label style={{ display: 'block' }}>
                Image URL:
                <input
                  type='text'
                  name='img'
                  value={newStory.img}
                  onChange={handleInputChange}
                  required
                  style={{ width: '180px', marginLeft: '20px', height: '30px' }}
                />
              </label>
              <button type='submit'>Save</button>
              <button style={{color:'red',fontSize:'16px',color:'white',backgroundColor:'#ff6347',padding:'10px',border:'none',borderRadius:'6px',marginLeft:'20px'}} onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

const data1 = [
  {
    name: 'The Hunger Games',
    img: hunger_games,
    review: '⭐4.8/5'
  },
  {
    name: 'Harry Potter',
    img: harry_potter,
    review: '⭐4.9/5'
  },
  {
    name: 'Dora Saves The Forest',
    img: dora,
    review: '⭐4.7/5'
  },
  {
    name: 'The Land of Stories',
    img: land_of_stories,
    review: '⭐4.6/5'
  },
  {
    name: 'The Maze Runner',
    img: maze,
    review: '⭐4.8/5'
  },
  {
    name: 'The Nevermoor',
    img: nevermoon,
    review: '⭐4.1/5'
  },
  {
    name: 'Dreenald',
    img: dreenald,
    review: '⭐4.3/5'
  },
  {
    name: 'The Percy Jackson',
    img: percy,
    review: '⭐4.1/5'
  },
];

export default Books;
