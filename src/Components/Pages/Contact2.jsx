import contactus from '../../assets/Conatct-us.jpg'
import SixthSection from '../SixthSection';

const Contact2 = () => {
    return (
        <section>
            <div className="contact-two-section">
                <div className="container">
                    <div className="contact-two">
                        <div className="imge-side" data-aos="fade-right">
                            <img src={contactus} width="534px" height="801px" alt="" />
                        </div>
                        <div className="form">
                            <h2 data-aos="fade-left">Contact with us</h2>
                            <p data-aos="fade-left">First & Last Name</p>
                            <input type="text" data-aos="fade-left" placeholder='Enter Your Name' />
                            <p data-aos="fade-left"> Email address</p>
                            <input type="email" data-aos="fade-left" placeholder='name@gmail.com' />
                            <p data-aos="fade-left">Subject</p>
                            <input type="text" data-aos="fade-left" placeholder='Enter Your Subject' />
                            <p data-aos="fade-left"> Comment or Message *</p>
                            <textarea placeholder="Enter Your Comment"  data-aos="fade-left"className='comment' id=""></textarea> <br />
                            <div className='msg'> <a href="#">Send Messaege</a></div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )
}

export default Contact2;