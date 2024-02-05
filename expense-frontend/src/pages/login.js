import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'



export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState('hide')
    const router = useRouter()
    // const [error, setError] = useState('false')
    const fetchdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/login");
            const data = await res.json()
        }
        catch (error) {
            alert(error.message)
        }
    }
    const toggleBtn = () => {
        if (toggle === 'hide') {
            setToggle('seek')
        }
        else {
            setToggle('hide')
        }
    };
    const handleLogIn = async () => {
        try {
            if (password || email) {
                const response = await fetch('http://localhost:8080/login', {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                router.push("/")
                if (!response.ok) {
                    return console.log('s')
                }
                alert("success");
            }
        } catch (error) {
            alert(error);
        }
    };

    useEffect(() => {
        fetchdata
    }, [])
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
                    <input value={email} onChange={e => setEmail(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Email' />
                    <div className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB] flex items-center justify-between' >
                        <input className='bg-[#F3F4F6] ' value={password} onChange={e => setPassword(e.target.value)} type={`${toggle === 'hide' ? 'password' : 'text'}`} placeholder='Password' />
                        <div onClick={toggleBtn}>
                            <svg className='w-4 h-4' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" /></svg>
                        </div>
                    </div>
                    <button onClick={handleLogIn} className='bg-blue text-white rounded-[20px] h-12'>Log in </button>
                </div>
                <div className='flex gap-2'>
                    <h5>Dont have account?</h5>
                    <a href='/signup' className='text-blue pointer'>Sign up</a>
                </div>
            </div>
            <div className='w-1/2 bg-blue '>
            </div>
        </main>
    )
}
export default LogIn