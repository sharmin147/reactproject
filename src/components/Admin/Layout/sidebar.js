import React from "react";
import './layout.css';



function Sidebar() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div className="col-3">
      <div className="dashboard-sidebar">
        <div className="dashboard-user-image">
          <img width={50} src={`http://localhost/react_api/${userLogged.image}`} alt="" />
        </div>

        <a className="navbar-brand" href="#">
          Hi! {userLogged.name}
        </a>
        <hr style={{ background: "#fffffff" }} />
      

        <a href="javascript:void(0)" className="dashboard-nav-link">
          <i class="fas fa-tachometer-alt"></i> Admin Dashboard
        </a>
        <a href="./courses" className="dashboard-nav-link">
          <i class="fas fa-book"></i> Course
        </a>
        <a href="./teachers" className="dashboard-nav-link">
          <i class="fas fa-chalkboard-teacher"></i> Teacher
        </a>
       <a href="./blogs" className="dashboard-nav-link">
          <i className="fas fa-pencil-alt"></i> Blog
        </a>
       
       
 <a href="./contacts" className="dashboard-nav-link">
          <i class="fas fa-envelope"></i> Contact
        </a>
        <a href="./settings" className="dashboard-nav-link">
          <i className="fas fa-cogs"></i> Settings
        </a>

       </div>
    </div>
  )
}

export default Sidebar;


