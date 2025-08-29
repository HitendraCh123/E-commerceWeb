import { RiPriceTag3Line } from "react-icons/ri";
import { RiShieldCheckFill } from "react-icons/ri";
import { FaTruck } from "react-icons/fa";
import girlsImg from '../assets/Think-Acadmic.png';



const SecondSection = () => {
    return (
        <section>
            <div className="section-second">
                <div className="container">
                    <div className="second-content flex justify-content-between">
                        <div className="second-text" data-aos="fade-right">
                            <h1 className="pt-4"> Embrace the Extraordinary with Website</h1>
                            <p className="Mauris"> Mauris vitae ultricies leo integer malesuada tempor orci dapibus ultrices diam in arcu cursus euismod purus viverra accumsan.</p>
                            <div className="features flex" data-aos="fade-up">
                                <div className="top-brand flex justify-content-between">
                                    <RiPriceTag3Line className="brand-icon" />
                                    <span className="brand-section"> <h3> Top Brands</h3>
                                        <p className="brand-para">Brands Collection</p></span>

                                </div>
                                <div className="top-brand flex ">
                                    <RiShieldCheckFill className="brand-icon" />
                                    <span className="brand-section"> <h3> High Quality</h3>
                                        <p className="brand-para">Luxury Redefined</p></span>

                                </div> <div className="top-brand flex">
                                    <FaTruck className="brand-icon" />
                                    <span className="brand-section"> <h3> Free Delivery </h3>
                                        <p className="brand-para">Every Order</p></span>
                                </div>
                            </div>
                            <a href="#" className="explore-shop"> EXPLORE SHOP</a>

                        </div>
                        <div className="photo-section" data-aos="fade-left">
                            <img src={girlsImg} width="546px" height="680px" alt="" />

                        </div>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default SecondSection;