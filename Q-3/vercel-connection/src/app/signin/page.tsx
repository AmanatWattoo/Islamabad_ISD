import Link from 'next/link'
import React from 'react'
const Signin = () => {
  return (
    <div className="h-screen bg-black/[0.10] w-full">
    <div className="font-heading flex justify-center items-center">
        <div className="flex bg-gray-400/[0.30] md:mt-[10rem] mt-[10rem] sm:mt-[20rem] xl:mt-[20rem] w-[35rem]  py-4 rounded-[5rem] shadow-xl z-10 flex-col justify-center items-center ">
        <div className="max-w-[35rem]">
            <h1 className='text-3xl'>Welcome to JWT Authentication</h1>
            <p className="text-orange-400 text-3xl font-mainlog font-semibold items-start text-start">Signin</p>
        </div>
        <div className="flex flex-col py-4 space-y-2 w-[30rem]">
            <p>Email:</p>
            <input className="rounded-md h-[2rem] px-2 outline-none" type='email' placeholder='Enter here your email'/>
            <p>Password:</p>
            <input className='rounded-md h-[2rem] px-2 outline-none' type="password" placeholder="Provide your password" maxLength={8}/>
            <div className="py-2 flex justify-center">
                <Link href={""} >
                <button className='bg-blue-900 text-white p-2 rounded-md w-[8rem]'>Signin</button>
                </Link>
            </div>   
        </div>
        <div>
        <p>If forgot the password <Link className='text-blue-900 underline' href={""}> click here    </Link></p>
        <p>If no  account <Link className='text-blue-900 underline' href={"/signup"}> click here </Link></p>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Signin