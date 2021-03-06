import React from 'react'
import { useSila } from '../context/SilaContext'
import { useAuth } from '../context/AuthContext'
import QRCode from 'react-qr-code'
import { web3 } from '../config/portis'

const Wallet = () => {

    const { ethAddress, setEthAddress } = useSila()
    const { currentUser } = useSila()

    const [isTransfer, setIsTransfer] = React.useState(false)
    React.useEffect(() => {
        initWeb3()
    },[])   

    const initWeb3 = async () => {
        const accounts_array = await web3.eth.getAccounts()
        console.log(accounts_array[0])
        setEthAddress(accounts_array[0])
    }
    return(
        <>
        <div className="flex justify-center items-center h-screen w-full">
            <div className="border px-12 py-4 space-y-8 shadow-md">
                <h2 className="text-3xl font-semibold text-center">Your account:</h2>
                <p>{ethAddress}</p>
                <div className="flex justify-center">
                    <QRCode value={ethAddress}/>
                </div>
                <div className="flex justify-evenly">
                    <button className="bg-black text-white p-2" onClick={() => setIsTransfer(true)}>Transfer</button>
                    <button className="bg-white text-black border-2 border-black p-2">Receive</button>
                </div>
                <div>
                    <TransferMoney isTransfer={isTransfer} setIsTransfer={setIsTransfer}/>
                </div>
            </div>
        </div>
        </>
    )
}

const TransferMoney = (props) => {
    if(props.isTransfer === true){
        return(
            <div className="space-y-2 px-12 py-4">
                <input type="text" placeholder="Receiver's address" className="border w-full p-2"/>
                <div className="flex justify-evenly">
                    <button className="bg-black text-white p-2">Confirm</button>
                    <button className="border border-black p-2" onClick={() => props.setIsTransfer(false)}>Cancel</button>
                </div>
            </div>
        )
    }
    else {
        return(<></>)
    }
}

export default Wallet