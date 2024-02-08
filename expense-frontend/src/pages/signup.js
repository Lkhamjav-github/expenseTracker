import React, { useEffect, useMemo, useState } from 'react'
import * as yup from 'yup';
import { userSchema } from '@/Validations/UserValidation';

export const Signup = (event) => {

    const createUser = async (event) => {
        if (password === repassword) {
            console.log("create user")
            event.preventDefault()
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent form submission
                document.querySelector("form").click(); // Trigger button click
            }
            var formData = {
                name: event.target[0].value,
                email: event.target[1].value,
                password: event.target[2].value
            }
            const isValid = await userSchema.isValid(formData)
            // const validate = await userSchema.validate(formData)


            console.log("isValid", isValid)

            if (isValid) {
                try {

                    const fetched = await fetch('http://localhost:8080/signup', {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json"
                        },
                        body: JSON.stringify({
                            name,
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
        else alert("password tohitohgui baina")
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [users, setUsers] = useState('');

    const fetchdata = async () => {
        try {
            const res = await fetch("http://localhost:8080/signup");
            const data = await res.json()
            setUsers(data)
        }
        catch (error) {
            alert(error.message)
        }
    }
    // const handleSignUp = async () => {

    // }
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
                    <h1 className='text-2xl font-semibold'>Create Geld account</h1>
                    <p className='dont-normal text-base text-[#334155]'>Sign up below to create your Wallet account</p>
                </div>
                <form onSubmit={createUser}>
                    <div className='flex flex-col gap-4'>
                        <input value={name} onChange={e => setName(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Name' />
                        <input value={email} onChange={e => setEmail(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="text" placeholder='Email' />
                        <input value={password} onChange={e => setPassword(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="password" placeholder='Password' />
                        <input value={repassword} onChange={e => setRepassword(e.target.value)} className='border-2 bg-[#F3F4F6] rounded-lg p-4 w-[352px] border-[#D1D5DB]' type="password" placeholder='Re-password' />
                        <button type='submit' className='bg-blue text-white rounded-[20px] h-12'>Sign up</button>
                    </div>
                </form>
                <div className='flex gap-2'>
                    <h5>Already have account?</h5>
                    <a href='/login' className='text-blue'>Log in </a>
                </div>
            </div>
            <div className='w-1/2 bg-blue '>
            </div>
        </main>
    )
}
export default Signup