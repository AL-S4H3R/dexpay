import React, {Fragment} from 'react'
import KycContent from '../components/Dashboard/KycContent'
import SideNav from '../components/Dashboard/SideNav'

const KYC = () => {
    return(
        <Fragment>
            <div className="h-screen w-screen">
                <div className="flex h-full">
                    <div className="w-1/4 text-white" style={{backgroundColor:"#202225"}}>
                        <SideNav />
                    </div>
                    <div className="">
                        <KycContent/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default KYC