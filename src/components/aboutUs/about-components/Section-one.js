import "./section-one.css"
import vedioAbout from "../vedio/vedio-about.mp4"

function SectionOne(){
    return(
        <div className="main-section-one row gap-3">
            <div className="what-we col-lg-4 cl-md-4 col-sm-12">
                <h3>WHAT ARE WE AND WHAT WE HAVE DONE <span>?</span></h3>
                <p >
                    whate we have done whate we have done whate we have done whate we have done whate we have done
                    whate we have done whate we have done whate we have done whate we have done whate we have done
                    whate we have done whate we have done whate we have done whate we have done whate we have done 
                </p>
            </div>
            <div className="about-vedio col-lg-7 cl-md-7 col-sm-12">
                <video controls muted loop autoPlay>
                    <source src={vedioAbout}/>
                </video>
            </div>
        </div>
    )
}

export default SectionOne;