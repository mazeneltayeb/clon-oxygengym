import "./our-cilent.css"

import React from "react";
import Slider from "react-slick";
import cilentOne from"../img/74655053_548796305944055_575541715089694923_n_600x600.webp"

function OurCilent() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    
  };
  return (
    <div className="our-cilent-main">
        <h2>OUR CILENT SAY</h2>
        <div className="slider-container ">
        <Slider {...settings}>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
            <div>
            <div className="cilent-div"> 
                <img src={cilentOne}/>
                <p>
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                    lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                </p>
                <h3>Mazen Mohamed</h3>
                <span>&#9733; &#9733; &#9733; &#9733; &#9733;</span>
            </div>
            </div>
        </Slider>
        </div>
    </div>
  );
}

export default OurCilent;
