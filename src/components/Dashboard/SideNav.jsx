import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
import { useHistory } from 'react-router-dom'

const SideNav = () => {

    const history = useHistory()
    const { logout } = useAuth()
    const logoutHandler = async () => {
        try{
            await logout()
            history.push('/login')
        }
        catch(err){

        }
    }

    return(
        <div className="px-8 py-4 space-y-8">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
            </style>
            <div>
                <h2 style={{fontFamily:"'DotGothic16', sans-serif"}} className="text-4xl tracking-wider font-semibold text-start">
                    d3xPA¥ 
                </h2>
            </div>
            <div className="space-y-4 text-lg" style={{fontFamily:"'JetBrains Mono', monospace"}}>
                <p className="hover:underline"><NavLink to="/">Dashboard</NavLink></p>
                <p className="hover:underline"><NavLink to="/">Wallet</NavLink></p>
                <p className="hover:underline"><NavLink to="/">Account</NavLink></p>
                <button className="hover:underline" onClick={() => logoutHandler()}>Logout</button>                
            </div>    
        </div>
    )
}

export default SideNav