import React from 'react'
import Header from '../Header/header';
import Footer from '../Footer/footer';

const events = () => {
    return (
        <div>
        
       {/* <!-- events area start -->*/}
    <div className="event-area  pt--120 pb--80">
   <Header />
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="section-title-style2 black-title text-center">
                        <span>Join with us</span>
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
        <Footer />
    </div>
   {/* <!-- events area end -->*/ }
        
        </div>
    
         )
        }
        
        export default events