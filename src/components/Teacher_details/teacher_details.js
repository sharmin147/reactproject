import React from 'react'

import Header from '../Header/header';
import Footer from '../Footer/footer';

const Teacher_details = () => {
    return (
        <div>
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
                        <h4 className="crumb-title"><span>Our</span> teachers</h4>
                    </div>
                </div>
            </div>

             {/* teacher details area start  */}
            <div className="teacher-details pt--120 pb--60">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="tch-left-thumb">
                                <img src="assets/images/teacher/tch-left-thumb.jpg" alt="image"/>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="teacher-contenttchd-content pl-5 pb-5">
                                <h3>Monika</h3>
                                <span>CSE Deperment Head</span>
                                <ul className="list-inline mt-4 mb-4">
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-deviantart"></i></a></li>
                                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                                </ul>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo <span>inventore</span> veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet voluptatem.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- teacher details area end --> */}
              
            <div className="related-course pb--40">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="section-title">
                                <h3>Monikas <span className="primary-color">other </span> courses</h3>
                            </div>
                        </div>
                    </div>
                    <div className="course-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="w-cs-single">
                                    <img src="assets/images/course/cs-small-thumb1.jpg" alt="image"/>
                                        <div className="fix">
                                            <p className="mb-0"><a href="#">Ui / Ux Design</a></p>
                                            <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="w-cs-single">
                                    <img src="assets/images/course/cs-small-thumb2.jpg" alt="image"/>
                                        <div className="fix">
                                            <p className="mb-0"><a href="#">Learn Java</a></p>
                                            <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="w-cs-single">
                                    <img src="assets/images/course/cs-small-thumb3.jpg" alt="image"/>
                                        <div className="fix">
                                            <p className="mb-0"><a href="#">C++</a></p>
                                            <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="w-cs-single">
                                    <img src="assets/images/course/cs-small-thumb4.jpg" alt="image"/>
                                        <div className="fix">
                                            <p className="mb-0"><a href="#">Seo</a></p>
                                            <span><i className="fa fa-clock-o"></i> AUGUST 6, 2017</span>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    )
}

export default Teacher_details