import React from 'react'

const footer = () => {
    return (
        <div>
            {/*<!-- footer area start -->*/}
                <footer>
                    <div className="footer-top  has-color pt--120 pb--30">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="widget widget-company">
                                        <a href="./"><img src="assets/images/icon/logo.png" alt="footer" /></a>
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
                                <div className="col-md-5">
                                    <div className="widget widget-opening">
                                        <h4 className="fwidget-title mb-5 pb-3 primary-color">Working Day & time</h4>
                                        <p>Architecto beatae vitae dicta sunt ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
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
                                <p>Copyright © 2019 </p>
                            </div>
                        </div>
                    </div>
                </footer>
            {/*<!-- footer area end -->*/}  
        </div>
        )
    }
    
    export default footer