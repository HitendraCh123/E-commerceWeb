import { RiSecurePaymentLine } from "react-icons/ri";
import { RiRefund2Fill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { RiHandCoinLine } from "react-icons/ri";





const ThirdSection = () => {
    return (
        <section>
            <div className="third-section pt-3">
                <div className="container">
                    <div className="third-content flex justify-content-between" data-aos="fade-up">
                        <div className="poliocy align-items-center text-center" >
                            <RiSecurePaymentLine className="policy-icon" />
                            <h2>Secure Payment</h2>
                            <p>100% secure payment</p>
                        </div>
                        <div className="poliocy align-items-center text-center">
                           <RiRefund2Fill className="policy-icon" />
                            <h2>30 Days Return</h2>
                            <p>If goods have problems</p>
                        </div>
                        <div className="poliocy align-items-center text-center">
                            <RiCustomerService2Fill  className="policy-icon" />
                            <h2>24/7 Support</h2>
                            <p>Dedicated support</p>
                        </div>
                        <div className="poliocy align-items-center text-center">
                            <RiHandCoinLine className="policy-icon" />
                            <h2>Free Delivery</h2>
                            <p>For all order over 80$</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
export default ThirdSection;