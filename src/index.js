import React from 'react'
import {render} from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import User from './views/User'
import Login from './views/Login'
import './index.css'
import { AuthContextProvider } from './context/AuthContext'
import Signup from './views/Signup'
import AuthRoute from './routes/AuthRoute'
import KYC from './views/KYC'

function App() {
    return(
        <div>
            <AuthContextProvider>
            <Switch>
                <AuthRoute>
                    <Route exact path="/" component={User} />
                    <Route path="/kyc" component={KYC} />
                </AuthRoute>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup}/>
            </Switch>
            </AuthContextProvider>
        </div>
    )
}

const root = document.getElementById('root')

render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    root
)