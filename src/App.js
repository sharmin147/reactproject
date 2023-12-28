
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './index.css';
import Home from './components/Home/home';
import Course from './components/Course/course';
import Course_details from './components/Course_details/course_details';
import About from './components/About/about';
import Teacher from './components/Teacher/teacher';
import Teacher_details from './components/Teacher_details/teacher_details';
import Events from './components/Events/events';
import Blog from './components/Blog/blog';
import Blog_details from './components/Blog_details/blog_details';
import Contact from './components/Contact/contact';
import Signin from './components/Admin/Signin/signin';
import Register from './components/Admin/Register/register';
import Dashboard from './components/Admin/Dashboard/dashboard';
import Protected from './components/Protected'
import Teachers from './components/Admin/Teachers/Teachers';
import Courses from './components/Admin/Courses/courses';
import Blogs from './components/Admin/Blogs/blogs';
import Contacts from './components/Admin/Contacts/contacts';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/course" element={<Course />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Teacher" element={<Teacher />} />
        <Route path="/events" element={<Events />} />
        <Route path="/Course_details" element={<Course_details />} />
        <Route path="/Blog_details" element={<Blog_details />} />
        <Route path="/Teacher_details" element={<Teacher_details />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Dashboard" element={<Dashboard />} />

        <Route
          path="/dashboard"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path="/teachers"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Teachers />
            </Protected>
          }
        />
         <Route
          path="/courses"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Courses />
            </Protected>
          }
        />
        <Route
          path="/blogs"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Blogs />
            </Protected>
          }
        />
        
         <Route
          path="/contacts"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Contacts />
            </Protected>
          }
        />
        
       


      </Routes>
    </BrowserRouter>

  );
}
export default App;



// import React from "react";
// import {useState} from 'react'
// import './App.css'
// import Header from './Header'
// import Sidebar from './Sidebar'
// import Home from './Home'
// function App() {

//   const[openSidebarToggle,setOpenSidebarToggle]=useState(false)
//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }
//    return(
//     <div className="grid-container">
// <Header  OpenSidebar={OpenSidebar}/>
// <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
// <Home />
//     </div>
//    )
// }
// export default App 



