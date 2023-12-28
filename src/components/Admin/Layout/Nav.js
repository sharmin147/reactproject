import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './layout.css';

function Nav() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    const [searchValue, setSearchValue] = useState("");
    const handleSearchInputChange = (e) => {
        setSearchValue(e.target.value);
    };
const handleSearchSubmit = () => {
   
        console.log("Search value:", searchValue);
    };

    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    HI!! {userLogged.name}
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="./Teachers">
                                Teachers
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Courses">
                                Courses
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Blogs">
                                Blogs
                            </a>
                        </li>
                       
                       
                        <li className="nav-item">
                            <a className="nav-link" href="./Contacts">
                                Contacts
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="./Settings">
                                Setting
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Nav;



