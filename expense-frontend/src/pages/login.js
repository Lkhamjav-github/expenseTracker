import React from 'react'

export const LogIn = () => {
    return (
        <main className='flex '>
            <div className='flex flex-col gap-10 justify-center items-center w-1/2 h-screen' >
                <div className='flex gap-2.5'>
                    <img src="./Geld.svg" alt="geld logo" />
                    <img src="./geld1.svg" alt="geld" />
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <h1 className='text-2xl font-semibold flex items-center'>Welcome Back</h1>
                    <p className='dont-normal text-base text-[#334155]'>Welcome back, Please enter your details</p>
                </div>
                <div className='flex flex-col gap-4'>
                    <input className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Email' />
                    <input className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Password' />
                    <button className='bg-blue text-white rounded-[20px] h-12'>Log in </button>
                </div>
                <div className='flex gap-2'>
                    <h5>Dont have account?</h5>
                    <a className='text-blue pointer'>Sign up</a>
                </div>
            </div>
            <div className='w-1/2 bg-blue '>
            </div>
        </main>
    )
}
export default LogIn