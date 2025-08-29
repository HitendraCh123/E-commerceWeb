import { FaPaypal } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { RiMastercardLine } from "react-icons/ri";
import { RiBitCoinLine } from "react-icons/ri";
import { RiBankCardLine } from "react-icons/ri";
import { AiOutlineApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";


const Footer = () => {
    return (
        <footer>
            <div className="main">
                <div className="footer-section">
                    <div className="container">
                        <div className="footer-content">
                            <div className="first-foot">
                                <div className="left-foot">
                                    <p>Payment Partners </p>
                                    <FaPaypal className="footer-icon" />
                                    <SiVisa className="footer-icon" />
                                    <RiMastercardLine className="footer-icon" />
                                    <RiBitCoinLine className="footer-icon" />
                                    <RiBankCardLine className="footer-icon" />

                                </div>
                                <div className="left-foot">
                                    <p>Get deliveries with App </p>
                                    <AiOutlineApple className="footer-icon" />
                                    <FaGooglePlay className="footer-icon" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="footer-section2">
                    <div className="container">
                        <div className="footer-content">
                            <div className="second-foot">
                                <div className="left-foot">
                                    <p>Copyright ©<span style={{color:"black"}}>  Website Name </span>2025</p>
                                </div>
                                <div className="left-foot">
                                    <p>Follow us </p>
                                     <i className="pi pi-facebook"></i>
                                    <i className="pi pi-twitter"></i>
                                    <i className="pi pi-instagram"></i>
                                    <i class="fa fa-envelope-o" aria-hidden="true"></i>
                                <IoIosCall className="call-icon" />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </footer>
    )
}
export default Footer;