import React from 'react'
import Header from '../Header/header'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

// import Course_details from '../Course_details/course_details'
const home = () => {
    return (
        <div>
            {/* header area start*/}
            <Header />
            {/* header area end */}

            {/* offset search area start */}
            <div className="offset-search">
                <form action="#">
                    <input type="text" name="search" placeholder="Sarch here..." />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            {/* offset search area end */}

            {/*  body overlay area start */}
            <div className="body_overlay"></div>
            {/* body overlay area end */}
            {/* hero area start */}
            <div className="hero-area has-color">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="hero-content">
                                <h3>Admitted to Round 54 (WDPF)</h3>
                                <h1 className="mb-5"><span className="primary-color">IDB-BISEW IT Scholarship Project,</span><b c className="line-break"></b>Building Our Successful Future</h1>
                                <p className="text-white-50">Find Your Courses & Improve Your Skills</p>
                                <form action="#">
                                    <div className="form-input mt-5">
                                        <input type="text" name="search" required placeholder="Enter your keyword..." />
                                        <button className="btn btn-primary btn-round" type="submit">Seacrh</button>
                                        <i className="fa fa-search"></i>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* hero area end */}



            {/* about area start */}
            <div className="about-area-style2 ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                            <div className="about-content-style2 text-center has-color">
                                <div className="section-title-style mb-4">
                                    <h2>Welcome to <b className="line-break"></b><span className="text-color">IDB-BISEW</span> IT Scholarship Programs</h2>
                                </div>
                                <p className="text-white-70">Eaque ipsa quae ab illo inventore veritatis
                                    et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia incidunt
                                    ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                <a className="btn btn-light btn-round mt-3" href="./">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* about area end */}


            {/* course area start */}

            <div className="course-area  ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="section-title-style2 white-title title-tb text-center">
                                <span id="career-text">build your career</span>
                                <h2 className="primary-color">Featured Courses</h2>
                            </div>
                        </div>
                    </div>
                    <OwlCarousel className='owl-theme' loop margin={10} nav>
                        <div class='item'>
                            <div className="card mb-5">
                                <div className="course-thumb">
                                    <img src="assets/images/course/cs-img1.jpg" alt="course one" />
                                    <span className="cs-price primary-bg">$150</span>
                                </div>
                                <div className="card-body  p-25">
                                    <div className="course-meta-title mb-4">
                                        <div className="course-meta-text">
                                            <h4><a href="./">Application Design Course</a></h4>
                                            <ul className="course-meta-stats">
                                                <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></li>
                                                <li>36 <i className="fa fa-comment"></i></li>
                                                <li>85 <i className="fa fa-heart"></i></li>
                                            </ul>
                                        </div>
                                        <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="course 2" /> </a>
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
                        </div>
                        <div class='item'>
                            <div className="card mb-5">
                                <div className="course-thumb">
                                    <img src="assets/images/course/cs-img2.jpg" alt="course 3" />
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
                                        <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="Course 3" /> </a>
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
                        </div>
                        <div class='item'>
                            <div className="card mb-5">
                                <div className="course-thumb">
                                    <img src="assets/images/course/cs-img3.jpg" alt="Course 4" />
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
                                        <a href="./"><img className="course-meta-thumbnail rounded-circle" src="assets/images/author/auth1.jpg" alt="Course 5" /> </a>
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
                        </div>
                    </OwlCarousel>

                </div>
            </div>
            {/* course area start */}
            <div>

                {/* take toure area start */}
                <div className="take-toure-area ptb--120">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="section-title-style2 white-title text-center">
                                    <span>Take A Look</span>
                                    <h2>Video Tour on Edification </h2>
                                </div>
                            </div>
                        </div>
                        <div className="video-area">
                            <a className="expand-video" href="https://www.youtube.com/watch?v=cdfMgotGKIM"><i className="fa fa-play"></i></a>
                        </div>
                    </div>
                </div>
                {/* take toure area end */}

                {/*teacher area start*/}

                <div className="teacher-area pb--100">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 offset-md-1">
                                <div className="section-title-style2 white-title title-tb text-center">
                                    <span id="career-text">Learn From the Best</span>
                                    <h2 className="primary-color">Our teachers</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel className='owl-theme' loop margin={10}>
                            <div className='item'>
                                <div className="card mb-5">
                                    <img src="assets/images/teacher/teacher-member1.jpg" alt="teacher 1" />
                                    <div className="card-body teacher-content p-25">
                                        <h4 className="card-title mb-4"><a href="./">Patrick Garner Dony</a></h4>
                                        <span className="primary-color d-block mb-4">Economist</span>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
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
                            <div className='item'>
                                <div className="card mb-5">
                                    <img src="assets/images/teacher/teacher-member2.jpg" alt="teacher 2" />
                                    <div className="card-body teacher-content p-25">
                                        <h4 className="card-title mb-4"><a href="./">Cameron Brown</a></h4>
                                        <span className="primary-color  d-block mb-4">Financier</span>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
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
                            <div className='item'>
                                <div className="card mb-5">
                                    <img src="assets/images/teacher/teacher-member3.jpg" alt="teacher 3" />
                                    <div className="card-body teacher-content p-25">
                                        <h4 className="card-title mb-4"><a href="./">Joseph Mack Monika</a></h4>
                                        <span className="primary-color d-block mb-4">Languages</span>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
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
                            <div cclassName='item'>
                                <div className="card mb-5">
                                    <img src="assets/images/teacher/teacher-member4.jpg" alt="teacher 4" />
                                    <div className="card-body teacher-content p-25">
                                        <h4 className="card-title mb-4"><a href="./">Patrick Garner Dony</a></h4>
                                        <span className="primary-color d-block mb-4">Economist</span>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                                        <ul className="list-inline ">
                                            <li><a href="./"><i classNames="fa fa-facebook"></i></a></li>
                                            <li><a href="./"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="./"><i className="fa fa-dribbble"></i></a></li>
                                            <li><a href="./"><i className="fa fa-deviantart"></i></a></li>
                                            <li><a href="./"><i className="fa fa-github"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

            </div>
            {/*event area*/}

            <div className="event-area  pt--120 pb--80">

                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="section-title-style2 white-title text-center">
                                <span id="career-text">JOIN WITH US</span>
                                <h2>Upcoming Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="media align-items-center mb-5">
                                <div className="media-head primary-bg">
                                    <span><sub>MAR</sub>25</span>
                                    <p>2018</p>
                                </div>
                                <div className="media-body">
                                    <h4><a href="./">Affiliate Marketing</a></h4>
                                    <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="media align-items-center mb-5">
                                <div className="media-head primary-bg">
                                    <span><sub>OCT</sub>25</span>
                                    <p>2018</p>
                                </div>
                                <div className="media-body">
                                    <h4><a href="./">Facebook Marketing</a></h4>
                                    <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="media align-items-center mb-5">
                                <div className="media-head primary-bg">
                                    <span><sub>NOV</sub>25</span>
                                    <p>2018</p>
                                </div>
                                <div class="media-body">
                                    <h4><a href="./">Edustar Autumn</a></h4>
                                    <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="media align-items-center mb-5">
                                <div className="media-head primary-bg">
                                    <span><sub>DEC</sub>25</span>
                                    <p>2018</p>
                                </div>
                                <div class="media-body">
                                    <h4><a href="./">Workshop PHP</a></h4>
                                    <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <!-- events area end -->*/}

            <div className="testimonial-area ptb--120">
                <img className="tst-bg" src="assets/images/bg/tst-bg-shape.png" alt="tst-bg-shape" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3 text-center">
                            <OwlCarousel classNameName='owl-theme owl-dot' autoplay items={1} loop margin={10}>
                                <div className="testimonial-content pb--40">
                                    <div className="section-title sec-style-two">
                                        <span className="text-uppercase primary-color mb-0">Happy students</span>
                                        <h2>Testimonial</h2>
                                    </div>
                                    <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                                    <h4>Kawsar Ahhamed</h4>
                                    <span>App Developer</span>
                                </div>
                                <div className="testimonial-content pb--40">
                                    <div className="section-title sec-style-two">
                                        <span className="text-uppercase primary-color mb-0">Happy students</span>
                                        <h2>Testimonial</h2>
                                    </div>
                                    <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                                    <h4>Kawsar Ahhamed</h4>
                                    <span>App Developer</span>
                                </div>
                                <div className="testimonial-content pb--40">
                                    <div className="section-title sec-style-two">
                                        <span className="text-uppercase primary-color mb-0">Happy students </span>
                                        <h2>Testimonial</h2>
                                    </div>
                                    <h3>‘‘ Vous devez profiter de la vie. Toujours aimez, les personnespositives penser. ‘‘</h3>
                                    <h4>Kawsar Ahhamed</h4>
                                    <span>App Developer</span>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>



            {/*blog area start*/}
            <div className="feature-blog  ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-md-1">
                            <div className="section-title-style2 white-title title-tb text-center">
                                <span>Top stories</span>
                                <h2>Blog & News</h2>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <OwlCarousel className='owl-theme' loop margin={10} >
                            {/* <div className="blog-carousel owl-carousel card-deck">  */}
                            <div className='item'>
                                <div className="card mb-5">
                                    <img className="card-img-top" src="assets/images/blog/blog-thumbnail1.jpg" alt="image" />
                                    <div className="card-body p-25">
                                        <ul className="list-inline primary-color mb-3">
                                            <li><i className="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                                            <li><i className="fa fa-comments"></i> 3 Comments</li>
                                        </ul>
                                        <h4 className="card-title mb-4"><a href="./">Aenean id ullamcorper</a></h4>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                                        <a className="btn btn-primary btn-round btn-sm" href="./"> Read More </a>
                                    </div>
                                </div>
                            </div>
                            <div className='item'>
                                <div className="card mb-5">
                                    <img className="card-img-top" src="assets/images/blog/blog-thumbnail2.jpg" alt="image" />
                                    <div className="card-body p-25">
                                        <ul className="list-inline primary-color mb-3">
                                            <li><i className="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                                            <li><i className="fa fa-comments"></i> 3 Comments</li>
                                        </ul>
                                        <h4 className="card-title mb-4"><a href="./">Click to Join the Advance</a></h4>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                                        <a className="btn btn-primary btn-round btn-sm" href="./"> Read More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5">
                                <div className='item'>
                                    <img cclassName="card-img-top" src="assets/images/blog/blog-thumbnail3.jpg" alt="image" />
                                    <div className="card-body p-25">
                                        <ul className="list-inline primary-color mb-3">
                                            <li><i className="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                                            <li><i className="fa fa-comments"></i> 3 Comments</li>
                                        </ul>
                                        <h4 className="card-title mb-4"><a href="./">The death of architecture</a></h4>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                                        <a className="btn btn-primary btn-round btn-sm" href="./"> Read More </a>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-5">
                                <div className='item'>
                                    <img className="card-img-top" src="assets/images/blog/blog-thumbnail1.jpg" alt="image" />
                                    <div className="card-body p-25">
                                        <ul className="list-inline primary-color mb-3">
                                            <li><i className="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                                            <li><i className="fa fa-comments"></i> 3 Comments</li>
                                        </ul>
                                        <h4 className="card-title mb-4"><a href="./">Aenean id ullamcorper</a></h4>
                                        <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                                        <a className="btn btn-primary btn-round btn-sm" href="./"> Read More </a>
                                    </div>
                                </div>
                            </div>

                            {/* </div> */}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            {/*cta area start*/}
            <div className="cta-area secondary-bg has-color cta-area ptb--50 ">
                <div className="container">
                    <div className="row align-items-center">
                        <div classNames="col-md-9">
                            <div className="cta-content">
                                <p className="mb-2">Click to Join the Advance Workshop</p>
                                <h2>Training in advance networking</h2>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="cta-btn">
                                <a className="btn btn-light btn-round" href="./">Join Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*cta area end*/}

            {/* Contact area

           <div className="contact-form-area pb--120">
 
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="cnt-title">
                        <h4>Get in touch <span>with us</span></h4>
                        <p>Quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut </p>
                    </div>
                </div>
            </div>
            <div className="contact-form">
                <form>
                    <div className="row">
                        <div className="col-md-4">
                            <input type="text" name="name" placeholder="Enter your name"/>
                        </div>
                        <div className="col-md-4">
                            <input type="email" name="email" placeholder="Your Email"/>
                        </div>
                        <div className="col-md-4">
                            <input type="text" name="subject" placeholder="Subject"/>
                        </div>
                        <div className="col-12">
                            <textarea name="msg" id="msg" placeholder="Your message here"></textarea>
                        </div>
                        <div className="col-12 text-center">
                            <button type="submit">SEND TO US</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
    </div> */}


            {/*footer area start */}
            <footer>
                <div className="footer-top  has-color pt--120 pb--30">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="widget widget-company">
                                    <a href="index.html"><img src="assets/images/icon/logo.png" alt="image" /></a>
                                    <div className="address">
                                        <h6>Office Address</h6>
                                        <p>London Oxford Street, 012 United Kingdom.</p>
                                    </div>
                                    <div className="address">
                                        <h6>Business Phone</h6>
                                        <p>+012 3456 7890</p>
                                    </div>
                                    <div className="address">
                                        <h6>Business Email</h6>
                                        <p>Business@themerocket.net</p>
                                    </div>
                                    <ul className="social">
                                        <li><a href="./"><i className="fa fa-facebook"></i></a></li>
                                        <li><a href="./"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="./"><i className="fa fa-dribbble"></i></a></li>
                                        <li><a href="./"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="widget footer-link">
                                    <h4 className="fwidget-title mb-5 pb-3 primary-color">Footer Menu</h4>
                                    <ul>
                                        <li><a href="./"><i className="fa fa-angle-right"></i>Case Studies</a></li>
                                        <li><a href="./"><i className="fa fa-angle-right"></i>About Us</a></li>
                                        <li><a href="./"><i className="fa fa-angle-right"></i>Our Story</a></li>
                                        <li><a href="./"><i className="fa fa-angle-right"></i>Blog Post</a></li>
                                        <li><a href="./"><i className="fa fa-angle-right"></i>Work with Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div classNamess="col-md-5">
                                <div className="widget widget-opening">
                                    <h4 className="fwidget-title mb-5 pb-3 primary-color">Working Day & time</h4>
                                    <p>Architecto beatae vitae dicta sunt ipsam voluptatem <br />
                                        quia voluptas sit aspernatur aut odit aut fugit</p>
                                    <ul>
                                        <li><span>Mon - Tus :</span>6.00 am - 10.00 pm</li>
                                        <li><span>Wed - Tur :</span>8.00 am - 6.00 pm</li>
                                        <li><span>Friday :</span>3.00 pm - 8.00 pm</li>
                                        <li><span>Sunday :</span>Closed</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <p>Copyright © 2019 <span><a className="primary-color" href="https://themeforest.net/user/pixelthemez/portfolio" target="_blank">Edification</a> </span> - All Rights Reserved. Made by <span><a className="primary-color" href="https://furioustheme.com/" target="_blank">Furioustheme</a></span></p>
                        </div>
                    </div>
                </div>
            </footer>
            {/*footer area end */}








        </div>
    )

}

export default home