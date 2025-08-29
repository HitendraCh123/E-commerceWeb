import news1 from '../assets/news-1.jpg';
import news2 from '../assets/news-2.jpg';
import news3 from '../assets/news-3.jpg';


const SixthSection = () => {
    return (
        <section>
        <div className="sixth-section">
            <div className="container">
                <div className="sixth-content">
                <div className="popular-product">
                    <p className='popular'>Check out popular products</p>
                    <h2>Popular Products</h2>
                </div>
                <div className="customer-view">
                    <div className="first-user" data-aos="fade-right">
                        <img src={news1} alt="" />
                        <h3 className='Lobortis'>Lobortis Elementum Nibhtellus Molestie Mauris</h3>
                        <p className='lorem-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…</p>
                        <h4 className='lifestyle'>IN <span style={{color:"blue"}}> LIFESTYLE </span>/ON JUNE 15, 2024</h4>
                    </div>
                    <div className="first-user">
                        <img src={news2} alt="" />
                        <h3 className='Lobortis'>Condimentum Odvenenatis Vestibulum Dapibus</h3>
                        <p className='lorem-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…</p>
                        <h4 className='lifestyle'>IN <span style={{color:"blue"}}>  TREND </span> /ON JUNE 15, 2024</h4>
                    </div>
                    <div className="first-user" data-aos="fade-left">
                        <img src={news3} alt="" />
                        <h3 className='Lobortis'>Accumsan Tortor Posuere Acut Consequat</h3>
                        <p className='lorem-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore…</p>
                        <h4 className='lifestyle'>IN <span style={{color:"blue"}}> LIFESTYLE </span>/ON JUNE 15, 2024</h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}
export default SixthSection;