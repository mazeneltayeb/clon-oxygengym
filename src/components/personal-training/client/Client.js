import { useEffect, useState } from "react";
import "./client.css"

function Client(){


        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
   
// console.log(userToken)

const [info, setInfo] = useState()

useEffect(()=>{
    fetch("https://fakestoreapi.com/users")
.then(res =>{
   return res.json()
} )
.then(data=>setInfo(data)) 
    // console.log(info)
},[])


    return(
        <div className="main-client">
            <h1>Client Page</h1>
           {info && console.log(info[1].email)
           }
        </div>
    )
}
export default Client;