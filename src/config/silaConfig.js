import Sila from 'sila-sdk'

const silaConfig = {
    handle: process.env.REACT_APP_SILA_HANDLE,
    key: process.env.REACT_APP_SILA_KEY
}

export const initSila = async() => {
    await Sila.configure(silaConfig)
    console.log(`Sila for d3xpay configured.`)
}