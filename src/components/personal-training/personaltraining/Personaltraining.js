import Client from "../client/Client";
import Login from "../login/login";
import useToken from "../useToken";


function Personaltraining(){
  
  const { token, setToken } = useToken();

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