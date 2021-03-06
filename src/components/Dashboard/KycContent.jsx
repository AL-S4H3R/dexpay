import React, { Fragment } from 'react'

const KycContent = () => {
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
                <div className="space-y-4">
                    <div className="space-x-4">
                        <input type="text" placeholder="First Name" className="border p-2"/>
                        <input type="text" placeholder="Last Name" className="border p-2"/>
                    </div>
                    <div className="space-x-4">
                        <input type="text" placeholder="City" className="border p-2"/>
                        <input type="text" placeholder="State" className="border p-2"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Street" className="border p-2 w-full"/>
                    </div>
                    <div className="space-x-4">
                        <input type="text" placeholder="Phone" className="border p-2"/>
                        <input type="text" placeholder="Zip" className="border p-2"/>
                    </div>
                    <div>
                        <input type="text" placeholder="Social Security No." className="border p-2 w-full"/>
                    </div>
                    <div className="flex justify-between h-full">
                        <button className="bg-black text-white p-2 w-1/3">Register</button>
                        <button className="bg-black text-white p-2 w-1/3">Confirmation</button>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default KycContent