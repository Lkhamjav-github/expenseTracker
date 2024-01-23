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
                <h1 className='text-semibold text-2xl text-[#0F172A] pb-6'>Select base currency</h1>
                <select className='p-4 text-semibold text-2xl bg-[#F3F4F6] border-[#D1D5DB] border-[1px] rounded-xl w-[352px ]'>
                    <option value="MNT - Mongolian Tugrik">MNT - Mongolian Tugrik</option>
                    <option value="USA - United States of America Dollar">USA - U.S.Dollar</option>
                    <option value="AUD - Australian Dollar">AUD - Australian Dollar</option>
                </select>
                <p className='w-[] text-xs text-normal pt-4 pb-8'>Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one </p>
                <button className='bg-blue text-white rounded-[20px] h-12 w-[352px]'> Confirm</button>
            </div>
        </div>
    )
}
