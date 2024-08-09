import axios from 'axios';
const API_URL='http://localhost:8080';

export const getUsersData = async() => {
    try
    {
        return await axios.get(`${API_URL}/login`);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const updateUserData=async(userData)=>{
    try
    {
        return await axios.get(`${API_URL}/edit`);
    }
    catch(error)
    {
        console.log(error);
    }
}

export const postUserData = async(userData) => {
    try {
        return await axios.post(`${API_URL}/register`, userData);
    } catch (error) {
        console.error("Error during user registration:", error);
        throw error;
    }
}
export const DeleteUser = async(id)=>{
    try
    {
        axios.delete(`${API_URL}/delete/${id}`);
    }
    catch(error)
    {console.log("Error");}
}
export const GetStories = async()=>{
    try
    {
        return axios.get(`${API_URL}/api/stories`);
    }
    catch(error)
    {console.log("error");}
}
export const PostStories = async(stories)=>{
    try
    {
        axios.post(`${API_URL}/api/stories`,stories);
    }
    catch(error)
    {console.log("error")}
}
export const editStories = async(story,id)=>{
    try
    {
        axios.put(`${API_URL}/api/stories/${id}`,story);
    }
    catch(error)
    {console.log("error")}
}
export const DeleteStories = async(id)=>{
    try{
        await axios.delete(`${API_URL}/api/stories/${id}`);
    }
    catch(error)
    {console.log("error");}
}