import "./pricingPlan.css"
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
function PricingPlan(){
    return(
<div className="main-pricingPlan ">
    <h1 className="text-center">CHOOSE YOUR PRICING PLAN</h1>
    <div className="plan-container row gap-3">
        <div className="one-month col-lg-4 col-md-6 col-sm-12">
            <h4>1 Month unlimited</h4>
            <div className="price">
                <h1>350 EGP</h1>
                <h6>SINGLE CLASS</h6>
            </div>
            <div>
                <h6><span><FaCheck  size={12}  color="green" /></span> Free riding</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Unlimited equipment</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Personal Trainer</h6>
                <h6><span className="x"><ImCross size={10}  color="red"/></span>  Weigth losing classes</h6>
                <h6><span className="x"><ImCross size={10}  color="red"/></span>  Month to Month</h6>
                <h6><span className="x"><ImCross size={10}  color="red"/></span>  No time restriction</h6>
            </div>
            <button>ENROLL NOW</button>
        </div>
        <div className="six-month col-lg-4 col-md-6 col-sm-12">
            <h4>6 Month unlimited</h4>
            <div className="price">
                <h1>1200 EGP</h1>
                <h6>SINGLE CLASS</h6>
            </div>
            <div>
                <h6><span><FaCheck  size={12}  color="green" /></span> Free riding</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Unlimited equipment</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Personal Trainer</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span>  Weigth losing classes</h6>
                <h6><span className="x"><ImCross size={10}  color="red"/></span>  Month to Month</h6>
                <h6><span className="x"><ImCross size={10}  color="red"/></span>  No time restriction</h6>
            </div>
            <button>ENROLL NOW</button>
        </div>
        <div className="one-year col-lg-4 col-md-6 col-sm-12">
            <h4>12 Month unlimited</h4>
            <div className="price">
                <h1>3000 EGP</h1>
                <h6>SINGLE CLASS</h6>
            </div>
            <div>
                <h6><span><FaCheck  size={12}  color="green" /></span> Free riding</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Unlimited equipment</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span> Personal Trainer</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span>  Weigth losing classes</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span>  Month to Month</h6>
                <h6><span><FaCheck  size={12}  color="green" /></span>  No time restriction</h6>
            </div>
            <button>ENROLL NOW</button>
        </div>
    </div>
</div>
    )
}


export default PricingPlan;