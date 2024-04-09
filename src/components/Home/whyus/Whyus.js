import "./whyus.css"
import swna from"./img/swna.jpg"
import equipment from"./img/equipment.jpg"
import training from"./img/training.jpg"
// import demble from"./img/dumbel.jpg"
import food from "./img/food.jpg"
// import { IoIosBicycle } from "react-icons/io";
// import { GiShinyApple } from "react-icons/gi";
// import { FaHeartbeat } from "react-icons/fa";

// import { LuDumbbell } from "react-icons/lu";

// import icone1 from "./img/equipment.png"
function Whyus(){
return(

<div className="main-whyus">
    <div className="whyus-question text-center">
        <span>WHY CHOSE US?</span>
        <h2>PUSH YOUR LIMITS FORWARD</h2>
    </div>
    <div className="whyus-answer container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="icon-img">
                {/* <IoIosBicycle /> */}
                <img src={equipment}/>
                </div>
                <h4 className="text-center">Modern equipment</h4>
                <p className="text-center">Modern equipment Modern equipment Modern equipment Modern equipment Modern equipment</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="icon-img">
                {/* <GiShinyApple /> */}
                <img src={food}/>
                </div>
                <h4 className="text-center">Healthy nutrition plan</h4>
                <p className="text-center">Modern equipment Modern equipment Modern equipment Modern equipment Modern equipment</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="icon-img">
                {/* <LuDumbbell /> */}
                <img src={training}/>
                </div>
                <h4 className="text-center">Proffesponal training plan</h4>
                <p className="text-center">Modern equipment Modern equipment Modern equipment Modern equipment Modern equipment</p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <div className="icon-img">
                {/* <FaHeartbeat /> */}
                <img src={swna}/>
                </div>
                <h4 className="text-center" >Unique to your needs</h4>
                <p className="text-center">Modern equipment Modern equipment Modern equipment Modern equipment Modern equipment</p>
            </div>
        </div>
    </div>
</div>

)
}

export default Whyus;