
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Header from '../Header/header';
import Footer from '../Footer/footer';

const Contact = () => {

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/react_api/contact.php', inputs).then(function (response) {
            console.log(response.data);
            navigate('/contact');
        });
    }
    return (
        <div>
            {/*contact form area start*/}

            <Header />


            {/*contact form area end*/}
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
                        <h4 className="crumb-title"><span>Contact </span>Us</h4>
                    </div>
                </div>
            </div>

            <div className="contact-info ptb--120">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="cnt-info">
                                <h4>Contact Info</h4>
                                <p>PO Box CT16133 Collins Street West, Victoria 8007, Australia.</p>
                                <ul className="address">
                                    <li><i className="fa fa-phone"></i>+1 (2) 345 6789</li>
                                    <li><i className="fa fa-phone"></i>+1 (2) 345 6789</li>
                                    <li><i className="fa fa-envelope"></i>contact@yourdomain.com</li>
                                </ul>
                                <ul className="social list-inline mt-5">
                                    <li><a href="./"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="./"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="./"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="./"><i className="fa fa-instagram"></i></a></li>
                                    <li><a href="./"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="./"><i className="fa fa-google-plus"></i></a></li>
                                    <li><a href="./"><i className="fa fa-youtube"></i></a></li>
                                    <li><a href="./"><i className="fa fa-skype"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div id="google-map"></div>
                        </div>
                    </div>
                </div>
            </div>

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
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-4">
                                    <input type="text" name="name" onChange={handleChange} placeholder="Enter your name" />
                                </div>
                                <div className="col-md-4">
                                    <input type="email" name="email" onChange={handleChange} placeholder="Your Email" />
                                </div>
                                <div className="col-md-4">
                                    <input type="text" name="subject" onChange={handleChange} placeholder="Subject" />
                                </div>
                                <div className="col-12">
                                    <textarea name="message" id="msg" onChange={handleChange} placeholder="Your message here"></textarea>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit">SEND TO US</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


            <Footer />
        </div>

    )
}

export default Contact