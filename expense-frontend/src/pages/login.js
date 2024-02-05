import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Fonteye } from '@/components/icons/Fonteye';
import { Fonthideye } from '@/components/icons/Fonthideye';

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
                            {toggle === 'hide' ? <Fonteye /> : <Fonthideye />}
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