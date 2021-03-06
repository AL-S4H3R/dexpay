import React from 'react'
import Wallet from '../components/Wallet'
import { useAuth } from '../context/AuthContext'
import { useSila } from '../context/SilaContext'
import SideNav from '../components/Dashboard/SideNav'

const Bank = () => {
    const { ethAddress } = useSila()
    const { currentUser } = useAuth()

            return(
            <div className="h-screen w-screen">
                <div className="flex h-full">
                    <div className="w-1/4 text-white h-full" style={{backgroundColor:"#202225"}}>
                        <SideNav />
                    </div>
                    <div className="flex justify-center h-screen w-3/4">
                        <Wallet />
                    </div>
                </div>
            </div>
        )   
}

export default Bank