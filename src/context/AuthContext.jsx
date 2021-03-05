import React, { useContext } from 'react'
import { firebaseAuth } from '../config/firebaseConfig'

const AuthContext = React.createContext()

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = React.useState()

    const userLogin = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password)
    }

    const createUser = (email, password) => {
        return firebaseAuth.createUserWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return firebaseAuth.signOut()
    }

    React.useEffect(() => {
        //when auth state changes, set the current user
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            setCurrentUser(user)
        })
        return unsubscribe
    }, [])

    const contextValue = {
        currentUser: currentUser,
        userLogin: userLogin,
        createUser: createUser,
        logout: logout
    }

    return(
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}