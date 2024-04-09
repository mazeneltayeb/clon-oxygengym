import "./footer.css"
import { IoLocationSharp } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from "../../../img/logo.png"
function Footer (){
    return(
        <div className="main-footer">
            <div className="frist row row-gap-2">
                <div className="location col-lg-4 col-md-6 col-sm-12" >
                    <div className="icon-frist-footer">
                       <IoLocationSharp size={30} />
                    </div>
                    <p>33 Sabry Mebda street elsheikh zayed  front of Ismailia Medical Complex,ismailia </p>
                </div>
                <div className="number col-lg-4 col-md-6 col-sm-12" >
                    <div className="icon-frist-footer">
                       <IoPhonePortraitOutline size={30} />
                    </div>
                    <p>01002955430 | 01202955430 </p>
                </div>
                <div className="email col-lg-4 col-md-6 col-sm-12" >
                    <div className="icon-frist-footer">
                       <MdEmail size={30} />
                    </div>
                    <p>oxygengym@gmail.com</p>
                </div>
            </div>
            <div className="second row row-gap-3">
                <div className="logo-and-link col-lg-4 col-md-6 col-sm-12">
                    <div className="logo-footer">
                        <img 
                        style={{ height:"100px" }} 
                        src={logo}
                        />
                        {/* <h1>Oxygen Gym</h1> */}
                    </div>
                    <p >
                        lorem lorem lorem lorem lorem lorem lorem lorem lorem
                        lorem lorem lorem lorem lorem lorem lorem lorem 
                        lorem lorem lorem lorem lorem lorem lorem 
                    </p>
                    <div className="social-media">
                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100076172525576">
                            <FaFacebookF size={30}  />
                        </a>
                        <a target="_blank"  href="https://www.instagram.com/oxygengym.eg/?hl=ar">
                            <FaInstagram size={35} />
                        </a>
                        <a target="_blank"  href="https://www.youtube.com/@oxygengyms7713">
                            <FaYoutube size={40} />
                        </a>
                    </div>
                </div>
                <div className="tips-guides col-lg-4 col-md-6 col-sm-12">
                    <h1>Tips & Guides</h1>
                    <div>
                        <p>
                            Physical fitness may help prevent depression,anxiety
                        </p>
                        <span>
                            3 min read | 20 Comment
                        </span>
                    </div>
                    <hr/>
                    <div>
                        <p>
                            fitness: The best exercise to lose belly fat and tone up....
                        </p>
                        <span>
                             3 min read | 20 Comment
                        </span>
                    </div>
                </div>
                <div className="map col-lg-4 col-md-6 col-sm-12">
                    <iframe
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=30.619818569920486,%2032.28941476554706+(My%20Business%20Name)&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        frameBorder="0"
                        style={{ border: 0 ,height:"250px" }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                        title="Humanity First Indonesia"
                     />
                </div>
            </div>
        </div>
    )
}
export default Footer;