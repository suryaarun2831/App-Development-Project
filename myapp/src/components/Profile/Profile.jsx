import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersData,updateUserData } from '../API/Api';
import { MyContext } from '../context/Context';
import './Profile.css';

const ProfilePage = () => {
    const navigate = useNavigate();
    const { setuserRole, loginId } = useContext(MyContext);
    const [isEditing, setIsEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [password, setPassword] = useState('');
  const [role,setRole]=useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      if (loginId) {
        try {
          const res = await getUsersData();
          setUsers(res.data);
          const user = res.data.find(user => user.id === loginId);
          if (user) {
            setUsername(user.username);
            setEmail(user.email);
            setPassword(user.password);
            setRole(user.role);
          } else {
            console.log("User not found for loginId:", loginId);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("User Not Found");
      }
    };

    fetchUserData();
  }, [loginId]);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async() => {
        if (loginId) {
            try {
                const userData={
                  username,
                  email,
                  password,
                  role
                }
                await updateUserData(userData);
              } catch (error) {
                console.error('Error updating user:', error);
              }
        }
    };

    const handleLogoutClick = () => {
        setuserRole('');
        navigate('/');
    };

    return (
        <div className="profile-page">
            <div className="profile-card">
                <h2>Profile</h2>
                <div className="profile-info">
                    <label>Username:</label>
                    {isEditing ? 
                        <input 
                            type="text" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                        : <p>{username}</p>
                    }
                </div>
                <div className="profile-info">
                    <label>Email:</label>
                    {isEditing ? (
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    ) : (
                        <p>{email}</p>
                    )}
                </div>
                <div className="profile-actions">
                    {isEditing ? (
                        <button onClick={handleSaveClick}>Save</button>
                    ) : (
                        <button onClick={handleEditClick}>Edit</button>
                    )}
                    <button onClick={handleLogoutClick}>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
