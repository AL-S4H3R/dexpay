import Portis from '@portis/web3'
import Web3 from 'web3'

const portis = new Portis('b358dd9f-7a6a-4c26-948b-a79c29d3fa59', 'mainnet');
export const web3 = new Web3(portis.provider);