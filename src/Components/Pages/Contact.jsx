import Header from "../Header";
import SixthSection from "../SixthSection";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";


const Contact = () => {
    return (
        <section>
            <div className="contact-section">
                <div className="container">
                    <div className="contact-content">
                        <div className="contact-us" data-aos="fade-up">
                            <a href="/">Home</a> <span> / Contact Us</span>
                            <h1> Contact Us</h1>
                        </div>
                    </div>
                </div>
            </div>
            <Contact2 />
            <Contact3/>

        </section>
    )
}
export default Contact;