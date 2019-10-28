import React from 'react'
import auth from './auth'

const LandingPage = props => {

    

    return ( 
        <div> 
            <h1>Landing Page </h1>
            <button onClick = { () => {
                auth.login( () => {
                    console.log("jajajaja entrare xD")
                    props.history.push('/app')
                })
            } }>Login</button>
        </div> 
    )
}

export default LandingPage