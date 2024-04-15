// import { useEffect, useState } from "react";
import "./client.css"
// import HomeButton from "../HomeButton";
import avatar from "./avatar.jfif"
function Client(){

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
        <div className="main-client">
            <div className="navbar-client">
                <div className="avatar-client">
                    <img src={avatar} alt=""/>
                </div>
                <ul>
                    <li>My Info</li>
                    <li>Work Out</li>
                    <li>Diet Plan</li>
                </ul>
            </div>
        </div>
    )
}
export default Client;