import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./assets/images/bg/slider.jpg";
import './assets/css/magnific-popup.css';
import './assets/css/slicknav.min.css';
import './assets/css/typography.css';
import './assets/css/default-css.css';
import './assets/css/styles.css';
import './assets/css/responsive.css';
import { logout } from "../Admin/Auth/auth";
function Header() {
  const navigate = useNavigate();
  const [isSignedIn, setIsSignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });

  const signout = () => {
    setIsSignedIn(false);
    logout();
    navigate("/home");
  }




  return (
    <div id="header">
      <div className="header-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-sm-6 d-block d-lg-none">
              <div className="logo">
                <a href="./"><img src="assets/images/icon/logo.png" alt="logo" /></a>
              </div>
            </div>
            <div className="col-lg-9 offset-lg-1 d-none d-lg-block">
              <div className="main-menu menu-style2">
                <nav>
                  <ul id="m_menu_active">
                    <li className="active">
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about">About</Link>
                    </li>
                    <li>
                      <Link to="/course">Courses</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/course">courses</Link>
                        </li>
                        <li>
                          <Link to="/course_details">course details</Link>
                        </li>
                      </ul>

                    </li>
                    <li>
                      <Link to="/teacher">Teachers</Link>
                      <ul className="submenu">
                        <li>
                          <Link to="/teacher">Teachers</Link>
                        </li>
                        <li>
                          <Link to="/teacher_details">Teacher Details</Link>
                        </li>
                      </ul>

                    </li>
                    <li className="middle-logo">
                      <Link to="/">
                        <img src="assets/images/icon/logo-middle.png" alt="logo" />
                        <img
                          className="hb-bottom-shape"
                          src="assets/images/icon/hb-bottom-shape.png"
                          alt="logo"
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-2 col-sm-5">
              <div className="header-bottom-right-style-2">
                {isSignedIn ? (
                  <ul>
                    <li><a className="btn btn-primary btn-round active" href=".#" onClick={signout}>Sign out</a></li>
                  </ul>
                ) : (
                  <ul>
                    <li><a className="btn btn-light btn-round" href="./signin">Signin</a></li>
                    <li><a className="btn btn-primary btn-round active" href="./register">REGISTER</a></li>
                  </ul>
                )}
              </div>

            </div>
            <div className="col-12 d-block d-lg-none">
              <div id="mobile_menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Header