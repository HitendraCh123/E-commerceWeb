import jackets from '../assets/jackets.jpg';
import sweater from '../assets/sweater.jpg';
import accessories from '../assets/accessories.jpg';
import { FaStar } from "react-icons/fa";

import product5 from '../assets/product-5.jpg';
import product6 from '../assets/product-6.jpg';
import product7 from '../assets/product-7.jpg';
import product8 from '../assets/product-8.jpg';



const FifthSection = () => {
    return (
        <section>
            <div className="Fifth-section">
                <div className="container">
                    <div className="fifth-content">
                        <img src={jackets} width="340px" height="510px" alt="" />
                        <img src={sweater} width="340px" height="510px" alt="" />
                        <img src={accessories} width="340px" height="510px" alt="" />
                    </div>
                </div>
            </div>
            <div className="popular-product">
                <p className='popular'>Check out popular products</p>
                <h2>Popular Products</h2>

                <div className="products-section2">
                    <div className="container">
                        <div className="products" data-aos="zoom-out-down">
                            <div className="product-detail">
                                <img src={product5} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Snapback Cap</h2>
                                <p>$40.00 $45.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail">
                                <img src={product6} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Retro Sunglasses</h2>
                                <p>$55.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail">
                                <img src={product7} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' />
                                </div>
                                <h2 className='Snapback'>Designer T-Shirt</h2>
                                <p>$50.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail">
                                <img src={product8} alt="" />
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

export default FifthSection;