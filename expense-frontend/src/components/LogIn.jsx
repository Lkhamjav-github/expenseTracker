import React from 'react'

export const LogIn = () => {
    return (
        <main className='flex'>
            <div className='flex flex-col gap-10 justify-center items-center' >
                <div className='flex gap-2.5'>
                    <img src="./Geld.svg" alt="geld logo" />
                    <img src="./geld1.svg" alt="geld" />
                </div>
                <div>
                    <h1 className='text-2xl font-semibold'>Welcome Back</h1>
                    <p className='dont-normal text-base text-[#334155]'>Welcome back, Please enter your details</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <input className='border-2 bg-[#F3F4F6] rounded-lg p-2 w-[352px] border-[#D1D5DB]' type="text" placeholder='Email' />
                    <input className='border-2 bg-[#F3F4F6] rounded-lg p-2 w-[352px] border-[#D1D5DB]' type="text" placeholder='Password' />
                    <button className='bg-blue text-white rounded-xl h-12'>Log in </button>
                </div>
                <div>
                    <h5>Dont have account?</h5>
                    <button>Sign up</button>
                </div>
            </div>
            <div className='w-[50%] bg-blue'>
            </div>
        </main>
    )
}
