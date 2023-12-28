import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './testimonial.css';

const Testimonial = () => {
    return (
       
        <div className="testimonial-area ptb--120">
            
        <img className="tst-bg" src="assets/images/bg/tst-bg-shape.png" alt="tst-bg-shape"/>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 text-center">
                    <OwlCarousel className='owl-theme owl-dot' autoplay items={1} loop margin={10}>
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


    )
}

export default Testimonial