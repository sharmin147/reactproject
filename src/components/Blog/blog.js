import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Blogs } from '../../Api/blog';
const Blog = () => {

  const [blogData, setblogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Blogs();
        setblogData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      {/*blog area start*/}


      <Header />

      <div className="body_overlay"></div>

      <div className="crumbs-area">
        <div className="container">
          <div className="crumb-content">
            <h4 className="crumb-title"><span>Blog</span> & News</h4>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="section-title-style2 black-title title-tb text-center">
              <h2>Blog & News</h2>
            </div>
          </div>
        </div>

        <div className="row">

          {blogData.map((blog, index) => (
            <div className='col-sm-4' key={index}>
              {/* <div className="blog-carousel owl-carousel card-deck">  */}
              <div className='item'>
                <div className="card mb-5">
                  <img className="card-img-top" src={blog.image} alt="image" />
                  <div className="card-body p-25">
                    <ul className="list-inline primary-color mb-3">
                      <li><i className="fa fa-clock-o"></i> AUGUST 6, 2017</li>
                      <li><i className="fa fa-comments"></i> 3 Comments</li>
                    </ul>
                    <h4 className="card-title mb-4"><a href="./">{blog.title}</a></h4>
                    <p className="card-text">{blog.short_description}</p>
                    <a className="btn btn-primary btn-round btn-sm" href={`/blog_details?id=${blog.id}`}> Read More </a>
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>{/*blog-carousel*/}

      </div>
      <Footer />
    </div>

  )

}

export default Blog


