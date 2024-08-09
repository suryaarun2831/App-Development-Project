import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Loginpage from '../Login/Loginpage';
import Navbar from '../Navbar/Navbar';
import ProfilePage from '../Profile/Profile';
import Question from '../Quiz/Question';
import Quiz from '../Quiz/Quiz';
import Result from '../Quiz/Result';
import Register from '../Register/Register';
import Books from '../Stories/Books';
import Stories from '../Stories/Stories';
import User from '../Users/User';
const Router = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/', '/register'];
  return (
    <>
         {!hideNavbarRoutes.includes(location.pathname) && <Navbar />}
         <div className='main-content'>
        <Routes>
            <Route path='/' element={<Loginpage/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/quiz' element={<Quiz/>}/>
            <Route path='/Question' element={<Question/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/story-page' element={<Stories/>}/>
            <Route path='/books' element={<Books/>}/>
            <Route path='/user' element={<User/>}/>
            <Route path='/profile' element={<ProfilePage/>}/>
        </Routes>
         </div>
         {!hideNavbarRoutes.includes(location.pathname) && <Footer />}
    </>
  )
}

export default Router;