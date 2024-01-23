import React from 'react'

export const SterThree = () => {
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
                    <li className="step step-primary">Finish</li>
                </ul>
            </div>
            <div className='flex justify-center items-center flex-col w-[352px]'>
                <img className='pt-[141px]' src="correct.svg" alt="correct" />
                <h1 className='text-semibold text-2xl text-[#0F172A] pb-6'>Good Job!</h1>
                <p className='w-[] text-base text-normal pt-4 pb-8'>Your very first account has been created. Now continue to dashboard and start tracking</p>
                <button className='bg-blue text-white rounded-[20px] h-12 w-[352px]'> Go to Dashboard</button>
            </div>
        </div>
    )
}
