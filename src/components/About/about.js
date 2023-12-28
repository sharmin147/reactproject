// import React, {useState, useEffect} from 'react';
// import Header from '../Header/header'
// import Footer from '../Footer/footer'
// import { About } from '../../Api/about';

// const Abouts = () => {
//     const [aboutData, setAboutData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const data = await About();
//           setAboutData(data);

//         } catch (error) {
//           console.error(error.message);
//         }
//       };

//       fetchData();
//     }, []);
//     return (
//         <div>


//         <Header />
//        <div className="body_overlay"></div>
//        <div className="about-area-style2 ptb--120 ">
//               <div classNameName="container">
//                     <div className="row">
//                     {aboutData.map((about, index) => (
//                      <div className='item' key={index}>
//                        <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
//                             <div className="about-content-style2 text-center has-color">
//                                 <div className="section-title-style mb-4">
//                                     <h2>Welcome to<b className="line-break"></b><span className="text-color">{about.title}</span></h2>
//                                 </div>
//                                 <p className="text-white-70">{about.description}</p>
//                               <a className="btn btn-light btn-round mt-3" href="./">Read more</a>
//                            </div>
//                         </div>
//                     </div>
//                      ))}
//             </div>
//           </div>
//              </div>
//        <Footer />
//         </div>
//     )
// }

// export default Abouts

import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Header from '../Header/header';
import Footer from '../Footer/footer';

const About = () => {


  return (
    <div>
      <Header />
      <div className="offset-search">
        <form action="#">
          <input type="text" name="search" placeholder="Sarch here..." />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>

      <div className="body_overlay"></div>

      <div className="crumbs-area">
        <div className="container">
          <div className="crumb-content">
            <h4 className="crumb-title"><span>About </span>Us</h4>
          </div>
        </div>
      </div>

      <div className="about-area ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-left-content">
                <div className="section-title">
                  <span className="text-uppercase">about us</span>
                  <h2>Welcome to</h2><h2><span>Our </span> <span className="primary-color">university</span></h2>
                </div>
                <p>Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <a href="#" className="btn btn-primary btn-round">Read more</a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="abt-right-thumb">
                <div className="abt-rt-inner">
                  <a className="expand-video" href="https://www.youtube.com/watch?v=cdfMgotGKIM"><i className="fa fa-play"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="take-toure-area ptb--120">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="section-title sec-style-two">
                <img className="title-top-shape" src="assets/images/icon/title-top-shape.png" alt="image" />
                <span className="text-uppercase">Take A Tour</span>
                <h2>Video Tour on Edification</h2>
              </div>
            </div>
          </div>
          <div className="video-area">
            <a className="expand-video" href="https://www.youtube.com/watch?v=cdfMgotGKIM"><i className="fa fa-play"></i></a>
          </div>
        </div>
      </div>

      <div className="container pb--120">
        <div className="cta-area primary-bg has-color ptb--50 pl-5 pr-5">
          <div className="row align-items-center">
            <div className="col-md-9">
              <div className="cta-content">
                <p className="mb-2">Click to Join the Advance Workshop</p>
                <h2>Training in advance networking</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="cta-btn">
                <a className="btn btn-light btn-round" href="#">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="teacher-area befr-themeoclor pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6">
              <div className="section-title">
                <span className="text-uppercase">Learn from <span className="primary-color">the best</span></span>
                <h2>Our Teachers </h2>
              </div>
            </div>
          </div>
          {/* <div className="teacher-carousel owl-carousel card-deck"> */}
          <OwlCarousel className='owl-theme' loop margin={10} nav>
            <div className="card mb-5">
              <img src="assets/images/teacher/teacher-member1.jpg" alt="image" />
              <div className="card-body teacher-content p-25">
                <h4 className="card-title mb-4"><a href="teachers.html">Patrick Garner Dony</a></h4>
                <span className="primary-color d-block mb-3">Economist</span>
                <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                <ul className="list-inline">
                  <li><a href="./"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="./"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="./"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-deviantart"></i></a></li>
                  <li><a href="#"><i className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="card mb-5">
              <img src="assets/images/teacher/teacher-member2.jpg" alt="image" />
              <div className="card-body teacher-content p-25">
                <h4 className="card-title mb-4"><a href="teachers.html">Cameron Brown</a></h4>
                <span className="primary-color d-block mb-3">Financier</span>
                <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-deviantart"></i></a></li>
                  <li><a href="#"><i className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="card mb-5">
              <img src="assets/images/teacher/teacher-member3.jpg" alt="image" />
              <div className="card-body teacher-content p-25">
                <h4 className="card-title mb-4"><a href="teachers.html">Joseph Mack Monika</a></h4>
                <span className="primary-color d-block mb-3">Languages</span>
                <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-deviantart"></i></a></li>
                  <li><a href="#"><i className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="card mb-5">
              <img src="assets/images/teacher/teacher-member4.jpg" alt="image" />
              <div className="card-body teacher-content p-25">
                <h4 className="card-title mb-4"><a href="teachers.html">Patrick Garner Dony</a></h4>
                <span className="primary-color d-block mb-3">Economist</span>
                <p className="card-text">We’re a philosophical bunch here at School site and we have thought long and hard about.</p>
                <ul className="list-inline">
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-deviantart"></i></a></li>
                  <li><a href="#"><i className="fa fa-github"></i></a></li>
                </ul>
              </div>
            </div>
          </OwlCarousel>

          {/* </div> */}
        </div>
      </div>


      <Footer />
    </div>


  )
}

export default About
