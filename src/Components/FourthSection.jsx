import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';

import { FaStar } from "react-icons/fa";


const FourthSection = () => {
    return (
        <section>
            <div className="Fourth-section">
                <div className="container">
                    <div className="fourth-content">
                        <p className="products">Check out latest products</p>
                        <div className="new-arrivals flex justify-content-between">
                            <h2>New Arrivals</h2>
                            <a href="#"> VIEW ALL</a>
                        </div>
                        <div className="products">
                            <div className="product-detail" data-aos="fade-up-right">
                                <img src={product1} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Snapback Cap</h2>
                                <p>$40.00 $45.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="fade-up-left">
                                <img src={product2} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Retro Sunglasses</h2>
                                <p>$55.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="fade-down-right">
                                <img src={product3} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' />
                                </div>
                                <h2 className='Snapback'>Designer T-Shirt</h2>
                                <p>$50.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="fade-down-left">
                                <img src={product4} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Blue Shoes</h2>
                                <p>$60.00 $70.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default FourthSection;