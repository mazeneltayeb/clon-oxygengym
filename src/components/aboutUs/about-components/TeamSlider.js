import "./our-team.css"

import React from "react";
import Slider from "react-slick";
import coachOne from"../img/74655053_548796305944055_575541715089694923_n_600x600.webp"
export default function TeamSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      };
  return (
 <div className="slider-container">
    <Slider {...settings}>
      <div >
        <h3>
          <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
      <div>
      <h3>
      <div className="team-card" style={{backgroundImage:`url(${coachOne})`}}>
                <div className="team-img" >
                </div>
                <div className="coach-info">
                    <h3>
                        Coach One
                    </h3>
                    <p>
                    coach-info coach-info coach-info coach-info coach-info
                    coach-info coach-info coach-info  coach-info coach-info
                    </p>
                    <button>
                        View More
                    </button>
                </div>
          </div>
        </h3>
      </div>
    </Slider>
    </div>
  );
}
