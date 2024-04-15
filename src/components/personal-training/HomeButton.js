import { Link } from "react-router-dom"
import "./homeButton.css"
import { MdHome } from "react-icons/md";

function HomeButton(){
    return(
      <Link className="back-to-home">
        <MdHome />
      </Link>      
    )
}

export default HomeButton;