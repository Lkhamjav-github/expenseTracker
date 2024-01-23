import React from 'react'

export const StepTwo = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10'>
            <div className='flex justify-center items-center  gap-4'>
                <img className='w-11 h-11' src="./Geld.svg" alt="logo" />
                <img className='w-[90px] h-[32px]' src="./geld1.svg" alt="logo" />
            </div>
            <div className='flex justify-center items-center pt-12'>
                <ul className="steps steps-vertical lg:steps-horizontal ">
                    <li className="step step-primary">Currency</li>
                    <li className="step step-primary">Balance</li>
                    <li className="step">Finish</li>
                </ul>
            </div>
            <div className='flex justify-center items-center flex-col w-[352px]'>
                <img className='pt-[141px]' src="coin.svg" alt="coin" />
                <h1 className='text-semibold text-2xl text-[#0F172A] pb-6'>Set up your cash Balance</h1>
                <input className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Email' />
                <p className='w-[] text-xs text-normal pt-4 pb-8'>How much cash do you have in your wallet? </p>
                <button className='bg-blue text-white rounded-[20px] h-12 w-[352px]'> Confirm</button>
            </div>
        </div>
    )
}
