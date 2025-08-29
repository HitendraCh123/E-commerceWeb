import React from 'react'
// import '../component/Contact.css'
import Man from '../../assets/Man.png'
import card from '../../assets/card.jpg'
import card2 from '../../assets/card2.jpg'
import card3 from '../../assets/card3.jpg'
import card4 from '../../assets/card4.jpg'
import testi from '../../assets/testi.jpg'
import pro from '../../assets/pro.jpg'
import girl from '../../assets/girl.jpg'
import NinthSection from '../NinthSection'
import TenthSection from '../TenthSecton'
import Footer from '../Footer'



const About = () => {
    return (
        <>
            <section>
                <div className="contact-container">
                    <div className="container">
                        <div className="contact-section">
                            <div className="contact-link" data-aos="fade-up">
                                <a href="/" >Home  </a> <span>/ About Us</span>
                            </div>
                            <h2 data-aos="fade-up">About Us</h2>
                        </div>

                    </div>

                </div>

                <div className="our-mission">
                    <div className="left-box" data-aos="fade-right">
                        <img src={Man} alt="loading" />
                    </div>
                    <div className="right-box">
                        <h5 data-aos="fade-left">OUR MISSION</h5>
                        <h2 data-aos="fade-left">Your Personal Styling Team Always Here</h2>
                        <p data-aos="fade-left">Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.</p>
                        <div className="more-detail" data-aos="fade-left" >
                            <a href="#" >MORE DETAILS</a>
                        </div>
                    </div>
                </div>
                <div className="our-team">
                    <div className="our-team-section" data-aos="fade-up" >
                        <p>Ready to help you</p>
                    </div>
                    <h3 data-aos="fade-up">Our Team</h3>
                    <div className="team-cards">
                        <div className="card" data-aos="zoom-in">
                            <img src={card} alt="loading" />
                            <div className="card-content">
                                <h4>Mike Miller</h4>
                                <p>Stylist</p>
                            </div>
                        </div>
                        <div className="card" data-aos="zoom-in">
                            <img src={card2} alt="loading" />
                            <div className="card-content">
                                <h4>Bianca Oliver</h4>
                                <p>Consultant</p>
                            </div>
                        </div>
                        <div className="card" data-aos="zoom-in">
                            <img src={card3} alt="loading" />
                            <div className="card-content">
                                <h4>Roger Jones</h4>
                                <p>Manager</p>
                            </div>
                        </div>
                        <div className="card" data-aos="zoom-in">
                            <img src={card4} alt="loading" />
                            <div className="card-content">
                                <h4>Jerry Hill</h4>
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="testimonal-section">
                        <div className="man-section">
                            <img src={testi} alt="" data-aos="fade-right" />
                        </div>
                        <div className="testi-content">
                            <h2 data-aos="fade-left" >Testimonials</h2>
                            <p data-aos="fade-left" >Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. .</p>

                            <div className="user-profile">
                                <img src={pro} alt="" />
                                <div className="profile-content2">
                                    <h6>Jane Blayck</h6>
                                    <h4>Designer</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="trend">
                        <div className="trend-left">
                            <p data-aos="fade-right">TRENDS</p>
                            <h2 data-aos="fade-right">Shop The 5 Biggest Shoe Trends</h2>
                            <div className="para" data-aos="fade-right">
                                Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.
                            </div>
                            <div className="para2" data-aos="fade-right">
                                Elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.
                            </div>
                            <div className="shopp" data-aos="fade-right">
                                <a href="#">SHOP NOW</a>

                            </div>
                        </div>
                        <div className="trend-right">
                            <div className="girl">
                                <img src={girl} alt="" data-aos="fade-left" />

                            </div>
                        </div>
                    </div>
                    <NinthSection />
                    <TenthSection />
                    <Footer/>


                </div>
            </section>


        </>
    )
}

export default About;