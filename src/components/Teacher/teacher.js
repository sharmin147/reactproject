import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Teachers } from '../../Api/teacher';
const Teacher = () => {

    const [TeacherData, setTeachersData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Teachers();
                setTeachersData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            {/*teacher area start*/}
            <Header />
            <div className="offset-search">
                <form action="#">
                    <input type="text" name="search" placeholder="Sarch here..." />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

            <div className="body_overlay"></div>

            <div className="crumbs-area">
                <div className="container">
                    <div className="crumb-content">
                        <h4 className="crumb-title"><span>Our</span> Teachers</h4>
                    </div>
                </div>
            </div>
            <div className="teacher-area pb--100 pt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="section-title-style2 white-title title-tb text-center">
                                <span id="white-title span">Learn from the best</span>
                                <h2 className="primary-color">Our teachers</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {TeacherData.map((teachers, index) => (
                            <div className='col-sm-4' key={index}>

                                <div className="card mb-5">

                                    <div className='item'>
                                        <img src={teachers.image} alt="teacher 1" />
                                        <div className="card-body teacher-content p-25">
                                            <h4 className="card-title mb-4"><a href="./">{teachers.title}</a></h4>
                                            <span className="primary-color d-block mb-4">{teachers.position}</span>
                                            <p className="card-text">{teachers.description}</p>
                                            <ul className="list-inline ">
                                                <li><a href="./"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="./"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="./"><i className="fa fa-dribbble"></i></a></li>
                                                <li><a href="./"><i className="fa fa-deviantart"></i></a></li>
                                                <li><a href="./"><i className="fa fa-github"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                                
                                
                            </div>
                        ))}

                  </div>
            </div>
        </div>
            <Footer />
    </div>
    )
}

export default Teacher