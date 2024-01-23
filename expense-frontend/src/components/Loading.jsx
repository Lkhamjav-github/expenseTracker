import React from 'react'

export const Loading = () => {
    return (
        <main className='flex justify-center items-center flex-col gap-12 h-screen'>
            <div className='flex justify-center items-center  gap-4'>
                <img className='w-11 h-11' src="./Geld.svg" alt="logo" />
                <img className='w-[90px] h-[32px]' src="./geld1.svg" alt="logo" />
            </div>
            <div className='flex justify-center items-center flex-col gap-4'>
                <img className='animate-spin' src="./loading.svg" alt="loading logo" />
                <h1 className='text-black font-semibold text-base'>Түр хүлээнэ үү ... </h1>
            </div>
        </main>
    )
}
