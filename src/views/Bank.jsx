import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useSila } from '../context/SilaContext'

const Bank = () => {
    const { ethAddress } = useSila()
    const { currentUser } = useAuth()

    return(
        <>
            Congratulations! {ethAddress}, time to verify your bank account! 
        </>
    )
}

export default Bank