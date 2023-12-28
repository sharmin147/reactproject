import React, { useState, useEffect } from 'react';

import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Blog_detail } from '../../Api/blog_detail';
import { Comments } from '../../Api/comment';
const Blog_details = () => {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id');
    const [blogData, setblogData] = useState([]);
    const [CommentData, setCommentData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Blog_detail(id);
                setblogData(data);
                const cdata = await Comments(id);
                setCommentData(cdata);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData(); console.log(blogData)
    }, []);

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/react_api/comment_save.php?blog_id=' + id, inputs).then(function (response) {
            window.location.reload()
        });
    }

    return (
        <div>
            <Header />
            <div className="crumbs-area">
                <div className="container">
                    <div className="crumb-content">
                        <h4 className="crumb-title"><span>By</span> {blogData.author}</h4>
                    </div>
                </div>
            </div>

            <div className="blog-details-area ptb--120">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-8 col-md-8">
                            <div className="course-details">
                                <div className="cs-thumb mb-5">
                                    <img src={blogData.image} alt="image" />
                                </div>
                                <div className="cs-content">
                                    <div className="blog-top-meta">
                                        <ul>
                                            <li><i className="fa fa-user"></i>By <span>{blogData.author}</span></li>
                                            <li><i className="fa fa-tag"></i> CSE , GMAT</li>
                                            <li><i className="fa fa-comment-o"></i>({CommentData.length}) <span>Comments</span></li>
                                        </ul>
                                    </div>
                                    <h3 className="mb-4">{blogData.title}</h3>
                                    {blogData.description}
                                </div>
                            </div>

                            <div className="comment-area">
                                <h4 className="comment-title">Comments <span>({CommentData.length})</span></h4>
                                <ul className="comment-list">
                                    {CommentData.map((com, index) => (
                                        <li className="comment-info-inner" key={index}>
                                            <article>
                                                <div className="comment-thumb">
                                                    <img src="assets/images/author/cs-comment-auth3.jpg" alt="image" />
                                                </div>
                                                <div className="comment-content">
                                                    <h4>{com.name}</h4>
                                                    <p>{com.comment}</p>
                                                    <div className="cs-cmnt-meta">
                                                        <ul>
                                                            <li> {com.created_at}</li>
                                                            <li><span>BY</span> {com.name}</li>
                                                        </ul>
                                                        <a href="#">REPLY <i className="fa fa-long-arrow-right"></i></a>
                                                    </div>
                                                </div>
                                            </article>
                                        </li>
                                    ))}
                                </ul>
                            </div>



                            <div className="leave-comment-area">
                                <h4 className="comment-title">Leave Your Comment</h4>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" name="email" onChange={handleChange} placeholder="Your Email" />
                                        </div>
                                    </div>
                                    <textarea name="comment" onChange={handleChange} id="comment" placeholder="Your message here"></textarea>
                                    <button className="btn btn-primary btn-round" type="submit">Post Comment <i className="fa fa-long-arrow-right"></i></button>
                                </form>
                            </div>

                        </div>


                        <div className="col-lg-4 col-md-4">
                            <div className="sidebar">

                                <div className="widget widget-search">
                                    <h4 className="widget-title">Search</h4>
                                    <form>
                                        <input type="text" name="search" placeholder="Search..." />
                                        <button type="submit"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>

                                <div className="widget widget-category">
                                    <h4 className="widget-title">Categories</h4>
                                    <ul className="list">
                                        <li><a href="#">GMAT</a></li>
                                        <li><a href="#">BUSINESS</a></li>
                                        <li><a href="#">CSE</a></li>
                                        <li><a href="#">PYTHON</a></li>
                                        <li><a href="#">IELTS</a></li>
                                    </ul>
                                </div>

                                <div className="widget widget-course">
                                    <h4 className="widget-title">Popular Posts</h4>
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

            <Footer />
        </div>


    )
}

export default Blog_details