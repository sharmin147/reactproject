import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import reportWebVitals from './reportWebVitals';
// import Home from './components/Home/home';
// import Course from './components/Course/course';
// import Course_details from './components/Course_details/course_details';
// import About from './components/About/about';
// import Teacher from './components/Teacher/teacher';
// import Teacher_details from './components/Teacher_details/teacher_details';
// import Events from './components/Events/events';
// import Blog from './components/Blog/blog';
// import Blog_details from './components/Blog_details/blog_details';
// import Contact from './components/Contact/contact';

// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/course",
//     element: <Course />
//   },
//   {
//     path: "/course_details",
//     element: <Course_details />
//   },
 
//   {
//     path: "/teacher",
//     element: <Teacher />
//   },
//   {
//     path: "/teacher_details",
//     element: <Teacher_details />
//   },
//   {
//     path: "/events",
//     element: <Events />
//   },
//   {
//     path: "/blog",
//     element: <Blog />

//   },
//   {
//     path: "/blog_details",
//     element: <Blog_details />

//   },
//   {
//     path: "/contact",
//     element: <Contact />
//   },

// ]);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>

// );


// reportWebVitals();

