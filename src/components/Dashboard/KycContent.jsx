import React, { Fragment } from 'react'
import Sila from 'sila-sdk'
import { useAuth } from '../../context/AuthContext'
import { initSila } from '../../config/silaConfig'
import { v4 as uuid } from 'uuid'
import { useSila } from '../../context/SilaContext'
import { useHistory } from 'react-router-dom'
import { mockDatabase } from '../../config/firebaseConfig'
import 'firebase/firestore'

const KycContent = () => {
    
    const { currentUser } = useAuth()
    React.useEffect(() => {
        initSila()
        console.log(currentUser)
    },[])

    const history = useHistory()

    const [handle, setHandle] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [city, setCity] = React.useState('')
    const [state, setState] = React.useState('')
    const [street, setStreet] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [zip, setZip] = React.useState('')
    const [dob, setDob] = React.useState('')
    const [ssn, setSsn] = React.useState('')
    // const [privateKey, setPrivateKey] = React.useState('')
    // const [ethAddress, setEthAddress] = React.useState('')

    // const [kyc, setKyc] = React.useState(false)
    const { isKyc, setIsKyc, ethAddress, setEthAddress, privateKey, setPrivateKey } = useSila()

    const registerUser = async () => {
        console.log("Creating wallet")
        const wallet = await Sila.generateWallet()
        
        console.log("Address: ",wallet.address)
        setEthAddress(wallet.address)
        
        console.log("Key: ",wallet.privateKey)
        setPrivateKey(wallet.privateKey)
        
        console.log("Initiating User Registration")
        const user = new Sila.User()
        // user.handle = handle
        // console.log(user.handle)
        // user.firstName = firstName
        // user.lastName = lastName
        // user.address = street
        // user.city = city
        // user.state = state
        // user.zip = zip
        // user.phone = phone
        // user.email = 'shlok_mange@protonmail.com'
        // user.dateOfBirth = dob
        // user.ssn = ssn
        // user.cryptoAddress = ethAddress
        user.handle = handle;
        user.firstName = 'First';
        user.lastName = 'Last';
        user.address = '123 Main St';
        user.city = 'Anytown';
        user.state = 'NY';
        user.zip = '12345';
        user.phone = '1234567890';
        user.email = email;
        user.dateOfBirth = '1990-01-01';
        user.ssn = '123456222';
        user.cryptoAddress = ethAddress;
        
        const register = await Sila.register(user)
        console.log(register)
        if(register.statusCode === 200){
            requestKyc(user.handle)
        }
    }

    const requestKyc = async (handle) => {
        console.log("Initiating Request KYC")
        const kyc_response = await Sila.requestKYC(handle, privateKey)
        console.log(kyc_response.data.message)
        if(isKyc === false){
            setInterval(() => checkKyc(handle), 20000)
        }
    }

    const checkKyc = async (handle) => {
        console.log(`Initiating KYC check.`)
        const res = await Sila.checkKYC(handle, privateKey)
        const message = res.data.message
        if(message === `${handle} has passed ID verification!`){
            console.log(message)
            setIsKyc(true)
            // const res = await mockDatabase.collection('users').add({
            //     email: email,
            //     isKyc: true
            // })
            // console.log(`Document with ${res.id} added.`)
            history.push('/bank')
            return
        }
    }

    const inputChangehandler = (e) => {
        const name = e.target.name
        switch(name){
            case "firstName":
                setFirstName(e.target.value)
                break;

            case "lastName":
                setLastName(e.target.value)
                break;

            case "city":
                setCity(e.target.value)
                break;
            
            case "street":
                setStreet(e.target.value)
                break;

            case "state":
                setState(e.target.value)
                break;

            case "zip":
                setZip(e.target.value)
                break;

            case "dob":
                setDob(e.target.value)
                break;

            case "phone":
                setPhone(e.target.value)
                break;

            case "ssn":
                setSsn(e.target.value)
                break;

            default: break;
        }
    }
    return(
        <Fragment>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=JetBrains+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');
            </style>
            <section className="px-8 py-4 mt-8 space-y-4">
                <header className="space-y-2">
                    <h1 className="text-xl font-medium" style={{fontFamily:"'Roboto Mono', monospace"}}>Verify yourself and start d3XPA¥</h1>
                    <p className="font-mono">*KYC powered by SILA</p>
                </header>
                <div>
                    <input type="text" placeholder="Unique username" name="handle" onChange={(e) => setHandle(e.target.value)} value={handle} className="border p-2 w-full"/>
                </div>
                <div className="space-y-4">
                    <div className="space-x-4">
                        <input type="text" placeholder="First Name" name="firstName" onChange={(e) => inputChangehandler(e)} value={firstName} className="border p-2"/>
                        <input type="text" placeholder="Last Name" name="lastName" onChange={(e) => inputChangehandler(e)} value={lastName} className="border p-2"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Email linked to your bank account" name="email" onChange={(e) => setEmail(e.target.value)} value={email} className="border p-2 w-full"/>
                    </div>
                    <div className="space-x-4">
                        <input type="text" placeholder="City" name="city" onChange={(e) => inputChangehandler(e)} value={city} className="border p-2"/>
                        <input type="text" placeholder="State" name="state" onChange={(e) => inputChangehandler(e)} value={state} className="border p-2"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Street" name="street" onChange={(e) => inputChangehandler(e)} value={street} className="border p-2 w-full"/>
                    </div>
                    <div className="space-x-4">
                        <input type="text" placeholder="Phone" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} className="border p-2"/>
                        <input type="text" placeholder="Zip" name="zip" onChange={(e) => inputChangehandler(e)} value={zip} className="border p-2"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Date of Birth" name="dob" onChange={(e) => setDob(e.target.value)} value={dob} className="border p-2 w-full"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Social Security No." name="ssn" onChange={(e) => setSsn(e.target.value)} value={ssn} className="border p-2 w-full"/>
                    </div>
                    <div className="flex justify-center h-full">
                        <button className="bg-black text-white p-2 w-1/3 hover:bg-gray-700" onClick={() => registerUser()}>Register</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default KycContent