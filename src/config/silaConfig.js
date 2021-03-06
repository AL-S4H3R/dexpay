import Sila from 'sila-sdk'

const silaConfig = {
    handle: process.env.REACT_APP_SILA_HANDLE || 'dexpay.eth',
    key: process.env.REACT_APP_SILA_KEY || '36d718fba7c20a32577ad734895aae2474ca454c104f384dc4af42a2c94b2b90'
}

export const initSila = async() => {
    await Sila.configure(silaConfig)
    console.log(`Sila for d3xpay configured.`)
}