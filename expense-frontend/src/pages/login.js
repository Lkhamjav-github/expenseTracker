import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Fonteye } from '@/components/icons/Fonteye';
import { Fonthideye } from '@/components/icons/Fonthideye';

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [toggle, setToggle] = useState('hide')
    const router = useRouter()
    const toggleBtn = () => {

        if (toggle === 'hide') {
            setToggle('seek')
        }
        else {
            setToggle('hide')
        }
    };
    useEffect(() => {
        if (password.length === 0) {
            setToggle('none')
        }
        if (password.length === 1) {
            setToggle('hide')
        }
    });
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

    const handleLogIn = async () => {
        try {
            if (email == false) {
                alert("email esvel password hooson baina ")
            }
            if (password == false) {
                alert("email esvel password hooson baina")
            }
            if (password && email) {
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
                if (!response.ok) {
                    return alert("password eswel email buruu baina")
                }
                router.push("/")
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
                        <div className={`${toggle == 'none' ? 'hidden' : 'block'}`} onClick={toggleBtn}>
                            {toggle === 'hide' ? <Fonthideye /> : <Fonteye />}
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