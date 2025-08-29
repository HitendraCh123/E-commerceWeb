import { RiApps2Line } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosCall } from "react-icons/io";


import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <section>
            <div className="header">
                <div className="upper-header">
                    <header>
                        <div className="container">
                            <div className="top-header flex justify-content-between align-items-center p-2">
                                <div className="holiday">
                                    Holiday Offer Now Up to <span style={{ color: "orange" }}>50% OFF! 🎉 </span>
                                </div>
                                <div className="social-media flex justify-content-between">
                                    <i className="pi pi-facebook"></i>
                                    <i className="pi pi-twitter"></i>
                                    <a href="https://www.instagram.com/hanu_chaudhary_025/"> <i className="pi pi-instagram"></i></a>
                                    <a href="mailto:hanuchaudhary25@gmail.com"> <i class="fa fa-envelope-o" aria-hidden="true"></i></a>
                                     <a href="tel:+917906292145" className="call-icon"> <IoIosCall /></a> 
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
                <div className="bottom-header">
                    <div className="container">
                        <div className="bottom-content flex align-items-center justify-content-between">
                            <div className="fashion flex align-items-center ">
                                <i className="pi pi-shopping-bag text-3xl bag-icon pr-2"></i>
                                <div>
                                    <h2 className="text-xl font-bold">Fashion</h2>
                                    <span className="text-sm template">  Template</span>
                                </div>
                            </div>
                            <div className="header-items flex" >
                                <nav className="nav-list">
                                    <ul className="tabs">
                                        <li> <NavLink className="no-underline text-700" to="/"> <RiApps2Line className="home-icon" />Home</NavLink></li>
                                        <li> <NavLink className="no-underline link-nav" to="/about"> About</NavLink></li>
                                        <li> <NavLink className="no-underline link-nav" to="/service"> Service</NavLink></li>
                                        <li className=" elements"> <NavLink className="no-underline link-nav"> Elements <IoMdArrowDropdown /></NavLink>
                                            <div className="elements-down">
                                                <div className="elements-content">
                                                    <div className="elements1">
                                                        <h2>Elements 1</h2>
                                                        <ul>
                                                            <li> Accordions & Toggles  </li>
                                                            <li> Tabs  </li>
                                                            <li> Icons  </li>
                                                            <li> Pagination  </li>
                                                            <li> Cards  </li>
                                                            <li> Carousels  </li>
                                                            <li> Modals  </li>
                                                            <li> Placeholders  </li>
                                                            <li>Medias   </li>
                                                            <li>Maps   </li>
                                                            <li>Forms   </li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <h2>Elements 2</h2>
                                                        <ul>
                                                            <li>Buttons  </li>
                                                            <li>Badges  </li>
                                                            <li>Lists   </li>
                                                            <li>Offcanvas  </li>
                                                            <li>Image Frames     </li>
                                                            <li>Testimonials   </li>
                                                            <li> Modals       </li>
                                                            <li>Blockquotes  </li>
                                                            <li>Borders </li>
                                                            <li>Process </li>
                                                            <li>Countdowns </li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <h2>Elements 3</h2>
                                                        <ul>
                                                            <li>Call to Action  </li>
                                                            <li>Pricing Tables    </li>
                                                            <li>Tables  </li>
                                                            <li>Progress Bars     </li>
                                                            <li>Colors   </li>
                                                            <li>Dropdowns     </li>
                                                            <li>Tooltips & Popovers   </li>
                                                            <li>Sticky Elements    </li>
                                                            <li>Typography </li>
                                                            <li>Alerts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <div className="four-element">
                                                            <h2 className="dark-div"> DIV  </h2>
                                                            <ul>
                                                                <li> Multi-Purpose  </li>
                                                            </ul>
                                                            <h2 className="Powerful">And Powerful Bootstrap based</h2>
                                                            <p>Template with 180+ Valid Multi-Page & One-Page Layouts</p>
                                                            <a href="#"> GET STARTED</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </li>
                                        <li className="extra"> <NavLink className="no-underline link-nav"> Extra Page <IoMdArrowDropdown /></NavLink>
                                            <div className="elements-down">
                                                <div className="elements-content">
                                                    <div className="elements1">
                                                        <h2>Elements 1</h2>
                                                        <ul>
                                                            <li> Accordions & Toggles  </li>
                                                            <li> Tabs  </li>
                                                            <li> Icons  </li>
                                                            <li> Pagination  </li>
                                                            <li> Cards  </li>
                                                            <li> Carousels  </li>
                                                            <li> Modals  </li>
                                                            <li> Placeholders  </li>
                                                            <li>Medias   </li>
                                                            <li>Maps   </li>
                                                            <li>Forms   </li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <h2>Elements 2</h2>
                                                        <ul>
                                                            <li>Buttons  </li>
                                                            <li>Badges  </li>
                                                            <li>Lists   </li>
                                                            <li>Offcanvas  </li>
                                                            <li>Image Frames     </li>
                                                            <li>Testimonials   </li>
                                                            <li> Modals       </li>
                                                            <li>Blockquotes  </li>
                                                            <li>Borders </li>
                                                            <li>Process </li>
                                                            <li>Countdowns </li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <h2>Elements 3</h2>
                                                        <ul>
                                                            <li>Call to Action  </li>
                                                            <li>Pricing Tables    </li>
                                                            <li>Tables  </li>
                                                            <li>Progress Bars     </li>
                                                            <li>Colors   </li>
                                                            <li>Dropdowns     </li>
                                                            <li>Tooltips & Popovers   </li>
                                                            <li>Sticky Elements    </li>
                                                            <li>Typography </li>
                                                            <li>Alerts</li>
                                                        </ul>
                                                    </div>
                                                    <div className="elements1">
                                                        <div className="four-element">
                                                            <h2 className="dark-div"> DIV  </h2>
                                                            <ul>
                                                                <li> Multi-Purpose  </li>
                                                            </ul>
                                                            <h2 className="Powerful">And Powerful Bootstrap based</h2>
                                                            <p>Template with 180+ Valid Multi-Page & One-Page Layouts</p>
                                                            <a href="#"> GET STARTED</a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </li>
                                        <li> <NavLink className="no-underline link-nav" to="/contact"> Contact</NavLink></li>

                                    </ul>
                                </nav>
                                <div className="icon pl-4">
                                    <ul className="header-icon">
                                        <li> <NavLink className="no-underline link-nav" to="/search"> <i class="fa fa-search contact-icon" aria-hidden="true"></i> </NavLink></li>
                                        <li> <i class="fa fa-user-circle-o contact-icon" aria-hidden="true"></i></li>
                                        <li><IoBag className="contact-icon" /> </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
export default Header;