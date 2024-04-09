import TeamSlider from "./TeamSlider";
import "./our-team.css"
function Ourteam(){
    return(
        <div className="main-our-team">
            <div>
                <div>
                    <h5>OUR TEAM</h5>
                    <h3>TRAIN WITH EXPERTS</h3>
                </div>
                <div>
                    
                </div>
            </div>
            <div className="our-team-slider">
                <TeamSlider/>
            </div>
       </div>
    )
}
export default Ourteam;



{/* <SwiperSlide>
<div className="team-card">
    <div className="team-img">
        <img src={coachOne}/>
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
</SwiperSlide> */}