import React from 'react'
import { useParams, useLocation, useNavigate  } from 'react-router-dom'

function User() {
    let {fname, lname} = useParams()
    let location = useLocation()
    let navigate = useNavigate ()
    console.log(location, navigate);
    return (
        <div>
            <h1>User {fname} {lname} page</h1>
            <h3> my location is: {location.pathname}</h3>
            {location.pathname == `/user/hmp/p` ? <button onClick={() => navigate('/')}>vv</button> : <h4>dsdsf</h4>}
        </div>
    )
}

export default User
