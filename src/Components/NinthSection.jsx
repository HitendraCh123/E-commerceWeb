import { MdOutlineTimer } from "react-icons/md";
import { GoGift } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineRefresh } from "react-icons/hi";




const NinthSection = () => {
    return (
        <section>
            <div className="ninth-section">
                <div className="container">
                    <div className="ninth-content">
                        <div className="benefits">
                            <MdOutlineTimer className="time" />
                            <h3>10 minute grocery now</h3>
                            <p>Mauris vitae ultricies leo integer malesuada. Odio tempor orci dapibus ultrices in Egestas</p>
                        </div>
                        <div className="benefits">
                            <GoGift className="time" />
                            <h3>Best Prices & Offers</h3>
                            <p>Tempor orci dapibus ultrices in Egestas Mauris vitae ultricies leo integer malesuada Odio</p>
                        </div>
                        <div className="benefits">
                            <FiShoppingCart className="time" />
                            <h3>Wide Assortment</h3>
                            <p>Mauris vitae ultricies leo integer malesuada. Odio tempor orci dapibus ultrices in Egestas</p>
                        </div>
                        <div className="benefits">
                            <HiOutlineRefresh className="time" />
                            <h3>Easy Returns</h3>
                            <p>Malesuada Odio Mauris vitae ultricies Tempor orci dapibus ultrices in Egestas leo integer policy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NinthSection;