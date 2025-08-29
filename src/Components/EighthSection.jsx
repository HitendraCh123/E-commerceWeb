import product5 from '../assets/product-5.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';
import { FaStar } from "react-icons/fa";



const EighthSection = () => {
    return (
        <section>
            <div className="eight-section">
                <div className="container">
                    <div className="eighth-content">
                        <p className="products">$50 ONLY!</p>
                        <div className="new-arrivals flex justify-content-between">
                            <h2>Final Sale</h2>
                            <a href="#"> VIEW ALL</a>
                        </div>
                        <div className="products">
                            <div className="product-detail" data-aos="flip-down">
                                <img src={product4} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Snapback Cap</h2>
                                <p>$40.00 $45.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="flip-down">
                                <img src={product5} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='two' /><FaStar className='two' />
                                </div>
                                <h2 className='Snapback'>Retro Sunglasses</h2>
                                <p>$55.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="flip-down">
                                <img src={product3} alt="" />
                                <div className="stars">
                                    <FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' /><FaStar className='one' />
                                </div>
                                <h2 className='Snapback'>Designer T-Shirt</h2>
                                <p>$50.00 $60.00</p>
                                <a href="#" className='addtocart'> Add to cart</a>
                            </div>
                            <div className="product-detail" data-aos="flip-down">
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

export default EighthSection;