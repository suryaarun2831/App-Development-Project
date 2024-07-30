import React, { createContext, useState } from 'react';
export const MyContext = createContext();
const MyProvider = ({ children }) => {
  const [loginstatus, setLoginStatus] = useState(false);
  const [storyname, setStoryname] = useState('');
  const [userRole,setuserRole]=useState('');
  return (
    <MyContext.Provider value={{ loginstatus, setLoginStatus,storyname, setStoryname,userRole,setuserRole}}>
      {children}
    </MyContext.Provider>
  );
};  

export default MyProvider;
