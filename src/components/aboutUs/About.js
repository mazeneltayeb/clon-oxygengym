import Footer from "../Home/footer/Footer";
import Main from "./about-components/Main";
import OurCilent from "./about-components/OurCilent";
import Ourteam from "./about-components/Ourteam";
import SectionOne from "./about-components/Section-one";
import "./about.css"
import { motion } from "framer-motion";
function About (){
    return(
        <motion.div
        className="about-store"
        initial={{opacity:0,}}
        animate={{opacity:"100%",}}
        exit={{opacity:0,}}
        >
                <Main/>
                <SectionOne/>
                <Ourteam/>
                <OurCilent/>
                <Footer/>
        </motion.div>
    )

}
export default About;