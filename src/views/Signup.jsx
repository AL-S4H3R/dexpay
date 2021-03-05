import React, { useRef } from 'react'
import { Link, NavLink, useHistory } from 'react-router-dom'
import bg from '../assets/svg/dark-bg.svg'
import { useAuth } from '../context/AuthContext'

const Signup = () => {

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { createUser, currentUser } = useAuth()
    const history = useHistory()

    const signup = async (email, password) => {
        setLoading(true)
        try {
            await createUser(email, password)
            history.push("/")        
        }
        catch(err){
            console.error(err)
        }
    }

    return(
        <div className="h-screen w-screen" style={{backgroundImage:`url(${bg})`}}>
            <div className="h-full flex items-center justify-center">
                <div className="bg-gray-100 border px-8 py-4 space-y-4">
                    <div className="px-8 py-4">
                        <h2 className="font-bold text-3xl text-center">Signup to d3xPay</h2>
                        {currentUser && currentUser.email}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xl">Email</label>
                        <div>
                            <input type="text" placeholder="bill.gates@microsoft.com" className="py-2 px-1 w-full" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="password" className="text-xl">Password</label>
                        <div>
                            <input type="password" placeholder="********" className="py-2 px-1 w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="conf_password" className="text-xl">Confirm Password</label>
                        <div>
                            <input type="password" placeholder="********" className="py-2 px-1 w-full" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <button className="bg-black p-2 text-gray-100 w-full" disabled={loading} onClick={() => signup(email, password)}>Sign Up</button>
                    </div>
                    <div className="text-black">
                        <p className="text-center">Already have an account? <NavLink to="/login">Login here</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup