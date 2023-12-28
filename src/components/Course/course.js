import React, {useState, useEffect} from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Courses } from '../../Api/course';
const Course = () => {
    const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Courses();
        setCoursesData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
    return (
        <div className="course-area  ptb--120">
            <Header />
            <div className="offset-search">
                <form action="#">
                    <input type="text" name="search" placeholder="Sarch here..."/>
                        <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
          
            <div className="body_overlay"></div>
           
            <div className="crumbs-area">
                <div className="container">
                    <div className="crumb-content">
                        <h4 className="crumb-title"><span>Our</span> Courses</h4>
                    </div>
                </div>
            </div>

        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                        <div className="section-title-style2 white-title title-tb text-center">
                           
                            <span id="white-title span">Build Your Carrier</span>
                        <h2 className="primary-color">Featured Courses</h2>
                    </div>
                </div>
            </div>
            <OwlCarousel className='owl-theme' loop margin={10} nav>
            {coursesData.map((course, index) => (
                <div class='item' key={index}>
                    <div className="card mb-5">
                        <div className="course-thumb">
                            <img src={course.image} alt="course one"/>
                            <span className="cs-price primary-bg">$150</span>
                        </div>
                        <div className="card-body  p-25"> 
                            <div className="course-meta-title mb-4">
                                <div className="course-meta-text">
                                    <h4><a href="./">{course.title}</a></h4>
                                    <ul className="course-meta-stats">
                                        <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></li>
                                        <li>36 <i className="fa fa-comment"></i></li>
                                        <li>85 <i className="fa fa-heart"></i></li>
                                    </ul>
                                </div> 
                                <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="course 2"/> </a>
                            </div>
                            <p>{course.description}</p> 
                            <ul className="course-meta-details list-inline  w-100">
                                <li> 
                                <p>Course</p>
                                <span>3 Year</span>
                                </li>
                                <li>
                                <p>Class Size</p>
                                <span>18</span>
                                </li> 
                                <li>
                                <p>Duration</p>
                                <span>1 hour</span>
                                </li>      
                            </ul>  
                    </div>
                    </div>
                </div>
            ))}
                {/* <div class='item'>
                <div className="card mb-5">
                    <div className="course-thumb">
                        <img src="assets/images/course/cs-img4.jpg" alt="course 3"/>
                        <span className="cs-price primary-bg">$150</span>
                    </div>
                    <div className="card-body  p-25"> 
                        <div className="course-meta-title mb-4">
                            <div className="course-meta-text">
                                <h4><a href="./">Data Structure & Algorithm</a></h4>
                                <ul className="course-meta-stats">
                                    <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></li>
                                    <li>36 <i className="fa fa-comment"></i></li>
                                    <li>85 <i className="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="Course 3"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul className="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Course</p>
                             <span>3 Year</span>
                            </li>
                            <li>
                             <p>Class Size</p>
                              <span>18</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div>
                </div>
                </div> */}
                {/* <div class='item'>
                <div className="card mb-5">
                    <div className="course-thumb">
                        <img src="assets/images/course/cs-img5.jpg" alt="Course 4"/>
                        <span className="cs-price primary-bg">$150</span>
                    </div>
                    <div className="card-body  p-25"> 
                        <div className="course-meta-title mb-4">
                            <div className="course-meta-text">
                                <h4><a href="./">Android App Development</a></h4>
                                <ul className="course-meta-stats">
                                    <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></li>
                                    <li>36 <i className="fa fa-comment"></i></li>
                                    <li>85 <i className="fa fa-heart"></i></li>
                                </ul>
                            </div> 
                            <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="Course 5"/> </a>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p> 
                        <ul className="course-meta-details list-inline  w-100">
                            <li> 
                             <p>Course</p>
                             <span>3 Year</span>
                            </li>
                            <li>
                             <p>Class Size</p>
                              <span>18</span>
                            </li> 
                            <li>
                             <p>Duration</p>
                              <span>1 hour</span>
                            </li>      
                        </ul>  
                  </div>
                </div>
                    </div> */}
                    {/* <div class="col-lg-4 col-md-6">
                        <div class="card mb-5">
                            <div class="course-thumb">
                                <img src="assets/images/course/cs-img6.jpg" alt="image"/>
                                    <span class="cs-price primary-bg">$150</span>
                            </div>
                            <div class="card-body  p-25">
                                <div class="course-meta-title mb-4">
                                    <div class="course-meta-text">
                                        <h4><a href="course-details.html">Application Design Course</a></h4>
                                        <ul class="course-meta-stats">
                                            <li><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star-half"></i></li>
                                            <li>36 <i class="fa fa-comment"></i></li>
                                            <li>85 <i class="fa fa-heart"></i></li>
                                        </ul>
                                    </div>
                                    <a href="course-details.html"><img class="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="image"/> </a>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sciunt. Neque quisquam est, qui dolorem ipsum tatem.</p>
                                <ul class="course-meta-details list-inline  w-100">
                                    <li>
                                        <p>Course</p>
                                        <span>3 Year</span>
                                    </li>
                                    <li>
                                        <p>Class Size</p>
                                        <span>18</span>
                                    </li>
                                    <li>
                                        <p>Duration</p>
                                        <span>1 hour</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> */}
            </OwlCarousel>
            
        </div>
        <Footer />
    </div>
    )
}

export default Course