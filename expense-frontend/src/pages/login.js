import React, { useEffect, useState } from 'react'

export const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const fetchdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/login");
            const data = await res.json()
            setUsers(data)
        }
        catch (error) {
            alert(error.message)
        }
    }
    const handleLogIn = async () => {
        fetch("http://localhost:8080/login", request)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful', data);
            })
            .catch(error => {
                console.error('Error during login:', error);
            });
        const request = async () => {
            try {
                const fetched = await fetch('http://localhost:8080/login', {
                    method: "GET",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                })

                alert("success")
            } catch (error) {
                console.error(error)
            }
        }
    }
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
                    <input value={password} onChange={e => setPassword(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="password" placeholder='Password' />
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