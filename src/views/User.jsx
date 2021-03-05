import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import SideNav from '../components/Dashboard/SideNav'
const User = () => {

    const { currentUser, logout } = useAuth()
    const history = useHistory()

    const handleLogout = async () => {
        try {
            await logout()
            history.push('/login')
        }
        catch(err){
            console.error(err)
        }
    }
    return(
        <div className="h-screen w-screen text-white" style={{backgroundColor:"#f9fafc"}}>
            <div className="flex h-full">
                <div className="w-1/4 h-full" style={{backgroundColor:"#202225"}}>
                    <SideNav/>
                </div>
            </div>
        </div>
    )
}

export default User