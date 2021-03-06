import React from 'react'
import Sila from 'sila-sdk'

const SilaContext = React.createContext()

export const useSila = () => {
    return React.useContext(SilaContext)
}

const SilaContextProvider = ({children}) => {
    
    const [isKyc, setIsKyc] = React.useState(false)
    const [ethAddress, setEthAddress] = React.useState('')
    const [privateKey, setPrivateKey] = React.useState('')

    const contextValues = {
        isKyc: isKyc,
        setIsKyc: setIsKyc,
        setEthAddress: setEthAddress,
        setPrivateKey: setPrivateKey,
        ethAddress: ethAddress,
        privateKey: privateKey
    }

    return(
        <SilaContext.Provider value={contextValues}>
            {children}
        </SilaContext.Provider>
    )
}

export default SilaContextProvider