
// import About from "../aboutUs/About";
// import Store from "../store/Store";
import Navbar from "../navbar/Navbar";
import Footer from "./footer/Footer";
import "./home.css"
import PricingPlan from "./pricingPlan/PricingPlan";
import ControlledCarousel from "./slider";
import Whyus from "./whyus/Whyus";
import { motion } from "framer-motion";
function Home (){
    return(
<div className="main-home"> 
<   Navbar/>
        <motion.div
            initial={{opacity:0,}}
            animate={{opacity:"100%",}}
            exit={{opacity:0,}}
        >
        <ControlledCarousel/>
        <Whyus/>
        <PricingPlan/>
        <Footer/>
        </motion.div>
    </div>
    )
}

export default Home;