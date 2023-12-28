import React, { useState, useEffect } from 'react';

import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Course_detail } from '../../Api/course_details';
const Course_details = () => {

    const [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    const [courseData, setcourseData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Course_detail(id);
                setcourseData(data);

             } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
    

    return (
        <div>
            <Header />

            {/*course area start*/}
            <div className="course-area ptb--120">
                <div className="container">
                    <div className="row">
                    
                        <div className="col-lg-8 col-md-8">
                            <div className="course-details">
                                <div className="cs-thumb mb-5">
                                    <img src="assets/images/course/course-details.jpg" alt="image" />
                                    <span className="cs-price">$150</span>
                                    <div className="csd-hv-info has-color align-items-center">
                                        <div className="course-dt-info">
                                            <ul className="course-meta-details list-inline  w-100">
                                                <li>
                                                    <p>Course</p>
                                                    <span>3 Year</span>
                                                </li>
                                                <li>
                                                    <p>className Size</p>
                                                    <span>18</span>
                                                </li>
                                                <li>
                                                    <p>Duration</p>
                                                    <span>1 hour</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <ul className="course-meta-stats">
                                            <li><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star-half"></i></li>
                                            <li>36 <i className="fa fa-comment"></i></li>
                                            <li>85 <i className="fa fa-heart"></i></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cs-content">
                                    <h3 className="mb-4"><a href="#">Excepteur sint occaecat cupidatat non proident </a></h3>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore voluptatem.</p>
                                    <div className="cs-post-share">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="tags">
                                                    <h4>TAG</h4>
                                                    <ul className="list-inline">
                                                        <li><a href="#">Marketing</a></li>
                                                        <li><a href="#">Adda</a></li>
                                                        <li><a href="#">Cafe</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="cs-share-right">
                                                    <ul className="cs-social">
                                                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                                    </ul>
                                                    <div className="cs-post-author">By <span>Sajib</span></div>
                                                    <div className="cs-comments">45 COMMENT</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="post-author-info">
                                        <div className="thumb">
                                            <img src="assets/images/author/cs-post-author1.jpg" alt="image" />
                                        </div>
                                        <div className="fix">
                                            <h4>Rebeka</h4>
                                            <p>Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. onsectetur adipiscing elit. faucibus risus, a euismod lorem hendrerit ac nisi</p>
                                            <ul className="social">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="comment-area">
                                <h4 className="comment-title">Comments <span>(03)</span></h4>
                                <ul className="comment-list">
                                    <li className="comment-info-inner">
                                        <article>
                                            <div className="comment-thumb">
                                                <img src="assets/images/author/cs-comment-auth1.jpg" alt="image" />
                                            </div>
                                            <div className="comment-content">
                                                <h4>Tomas</h4>
                                                <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                <div className="cs-cmnt-meta">
                                                    <ul>
                                                        <li>AUGUST 6, 2018</li>
                                                        <li><span>BY </span> Hasin Haydar</li>
                                                    </ul>
                                                    <a href="#">REPLY <i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </article>
                                        <ul className="children">
                                            <li className="comment-info-inner">
                                                <article>
                                                    <div className="comment-thumb">
                                                        <img src="assets/images/author/cs-comment-auth2.jpg" alt="image" />
                                                    </div>
                                                    <div className="comment-content">
                                                        <h4>John doe</h4>
                                                        <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                        <div className="cs-cmnt-meta">
                                                            <ul>
                                                                <li>AUGUST 6, 2018</li>
                                                                <li><span>BY </span> Hasin Haydar</li>
                                                            </ul>
                                                            <a href="#">REPLY <i className="fa fa-long-arrow-right"></i></a>
                                                        </div>
                                                    </div>
                                                </article>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="comment-info-inner">
                                        <article>
                                            <div className="comment-thumb">
                                                <img src="assets/images/author/cs-comment-auth3.jpg" alt="image" />
                                            </div>
                                            <div className="comment-content">
                                                <h4>Shila khan</h4>
                                                <p>Ed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                <div className="cs-cmnt-meta">
                                                    <ul>
                                                        <li>AUGUST 6, 2018</li>
                                                        <li><span>BY </span> Hasin Haydar</li>
                                                    </ul>
                                                    <a href="#">REPLY <i className="fa fa-long-arrow-right"></i></a>
                                                </div>
                                            </div>
                                        </article>
                                    </li>
                                </ul>
                            </div>

                            {/*leave comment area start*/}
                            <div className="leave-comment-area">
                                <h4 className="comment-title">Leave Your Comment</h4>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="Name" placeholder="Enter your name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <textarea name="msg" id="msg" placeholder="Your message here"></textarea>
                                    <button className="btn btn-primary btn-round" type="submit">Post Comment<i className="fa fa-long-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>

                        {/* sidebar start */}
                        <div className="col-lg-4 col-md-4">
                            <div className="sidebar">

                                <div className="widget widget-instructor">
                                    <h4 className="widget-title">Course instructor</h4>
                                    <div className="instructor">
                                        <div className="post-author-info">
                                            <div className="thumb">
                                                <img src="assets/images/author/cs-post-author1.jpg" alt="image" />
                                            </div>
                                            <h5>Rebeka</h5>
                                            <p>Aenean id ullamcorper libero. Vestibulum imperdiet nibh vel magna lacinia ultrices.</p>
                                            <ul className="social">
                                                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                                                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>


                                <div className="widget widget-offer">
                                    <h4 className="widget-title">Special Offer</h4>
                                    <div className="wd-offer">
                                        <div className="text">
                                            <h4>Get 50% OFF</h4>
                                            <a href="#">Get Now</a>
                                        </div>
                                    </div>
                                </div>


                                <div className="widget widget-course">
                                    <h4 className="widget-title">Latest Courses</h4>
                                    <div className="course-list">
                                        <div className="w-cs-single">
                                            <img src="assets/images/course/cs-small-thumb1.jpg" alt="image" />
                                            <div className="fix">
                                                <p><a href="#">Ui / Ux Design</a></p>
                                                <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                            </div>
                                        </div>
                                        <div className="w-cs-single">
                                            <img src="assets/images/course/cs-small-thumb2.jpg" alt="image" />
                                            <div className="fix">
                                                <p><a href="#">Learn Java</a></p>
                                                <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                            </div>
                                        </div>
                                        <div className="w-cs-single">
                                            <img src="assets/images/course/cs-small-thumb3.jpg" alt="image" />
                                            <div className="fix">
                                                <p><a href="#">C++</a></p>
                                                <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                            </div>
                                        </div>
                                        <div className="w-cs-single">
                                            <img src="assets/images/course/cs-small-thumb4.jpg" alt="image" />
                                            <div className="fix">
                                                <p><a href="#">Seo</a></p>
                                                <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                            </div>
                                        </div>
                                        <div className="w-cs-single">
                                            <img src="assets/images/course/cs-small-thumb5.jpg" alt="image" />
                                            <div className="fix">
                                                <p><a href="#">Python</a></p>
                                                <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="widget widget-subscribe">
                                    <h4 className="widget-title">Subcribe</h4>
                                    <div className="subscribe">
                                        <p>Subscribe to my Newsletter</p>
                                        <form>
                                            <input type="email" name="email" placeholder="Email address" />
                                            <button type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>


                                <div className="widget widget-tag">
                                    <h4 className="widget-title">Tag Cloud</h4>
                                    <ul className="widget-tags">
                                        <li><a href="#">Marketing</a></li>
                                        <li><a href="#">Cactus</a></li>
                                        <li><a href="#">Indoor</a></li>
                                        <li><a href="#">Plants</a></li>
                                        <li><a href="#">Potted</a></li>
                                        <li><a href="#">Business Event</a></li>
                                        <li><a href="#">Cafe</a></li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <!-- course area end --> */}


            <Footer />
        </div>


    )
}

export default Course_details