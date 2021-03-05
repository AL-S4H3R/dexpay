import React, { Children } from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AuthRoute = ({component: Component, ...rest}) => {
    const { currentUser } = useAuth()
    return(
        <Route
            {...rest}
            render={props => {
                return currentUser !== null
                ? <Component {...props}/>
                : <Redirect to="/login"/>
            }}
        >
        </Route>
    )
}

export default AuthRoute