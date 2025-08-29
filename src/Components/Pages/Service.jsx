import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Line } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { PiHandCoinsBold } from "react-icons/pi";
import ourMission from '../../assets/our-mission.jpg';



const Service = () => {
    return (
        <section>
            <div className="service-section">
                <div className="container">
                    <div className="service-content">
                        <div className="service-us" data-aos="fade-up">
                            <a href="/">Home</a> <span> / services</span>
                            <h1> Our Services</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="service-cards">
                    <div className="card" data-aos="fade-up">
                        <RiSecurePaymentLine className="card-icon" />
                        <h2>Secure Payment</h2>
                        <p>100% secure payment</p>
                    </div>
                    <div className="card" data-aos="fade-up">
                        <RiRefund2Line className="card-icon" />
                        <h2>30 Days Return</h2>
                        <p>If goods have problems</p>
                    </div>
                    <div className="card" data-aos="fade-up">
                        <RiCustomerService2Fill className="card-icon" />
                        <h2>24/7 Support</h2>
                        <p>Dedicated support</p>
                    </div>
                    <div className="card" data-aos="fade-up">
                        <PiHandCoinsBold className="card-icon" />
                        <h2>Free Delivery</h2>
                        <p>For all order over 80$</p>
                    </div>
                </div>
                <div className="your-personal-section">
                    <div className="your-personal-content">
                        <div className="personal-img"  data-aos="fade-right">
                            <img src={ourMission} width="546px" alt="" />
                        </div>
                        <div className="personal-text"  data-aos="fade-left">
                            <p className="mission">OUR MISSION</p>
                            <h2>Your Personal Styling Team Always Here</h2>
                            <p className="Integer">Integer at faucibus urna. Nullam condimentum leo id elit sagittis auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.</p>
                            <p className="Elementum"  data-aos="fade-left">Elementum diam elementum. Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur. Mauris a accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi.</p>
                            <a href="#" className="more">MORE DETAILS</a>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default Service;