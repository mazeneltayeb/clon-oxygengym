// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from "../client/Client";

import { useState } from 'react';
import Login from "../login/login";


function Personaltraining(){
 const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

    return(
        <div>
            <Client/>
        </div>
    )
}

export default Personaltraining;