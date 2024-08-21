// import { useEffect, useState } from "react";
import "./client.css"
// import HomeButton from "../HomeButton";
import avatar from "./avatar.jfif"
import { Link} from "react-router-dom";
import { motion } from "framer-motion";
function Client(){
// const location = useLocation()
    const handleLogOut= ()=>{
        if(window.confirm("are you sure")) {
            localStorage.removeItem("token")
            window.location.href = "https://oxgengym-ismailia.netlify.app";
            // window.location.reload()
        }
       }
    // document.querySelector(".nav-container").style.opacity="0"

        // const tokenString = localStorage.getItem('token');
        // const userToken = JSON.parse(tokenString);
   
// console.log(userToken)

// const [info, setInfo] = useState()

// useEffect(()=>{
//     fetch("https://fakestoreapi.com/users")
// .then(res =>{
//    return res.json()
// } )
// .then(data=>setInfo(data)) 

// },[])


    return(
        <motion.div
            initial={{opacity:0,}}
            animate={{opacity:"100%",}}
            exit={{opacity:0,}}
            className="main-client"
        >
            <div className="navbar-client">
                <div className="avatar-client">
                    <img src={avatar} alt=""/>
                </div>
                <ul>
                    <li>
                       <Link to="/">
                            Home
                       </Link>
                    </li>
                    <li>My Info</li>
                    <li>Work Out</li>
                    <li>Diet Plan</li>
                    <Link className="logOut" onClick={handleLogOut}>Log Out</Link>
                </ul>
            </div>
        </motion.div>
    )
}
export default Client;