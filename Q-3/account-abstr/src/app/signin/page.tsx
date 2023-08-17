
import Link from "next/link"
const Signin = () => {
  return (
    <div className="h-screen bg-black/[0.10]">
    <div className="font-heading flex justify-center items-center">
        <div className="flex bg-gray-400/[0.30] mt-[10rem] w-[35rem] py-4 rounded-[5rem] shadow-xl z-10 flex-col justify-center items-center ">
        <div className="">
            <h1 >Welcome to JWT Authentication</h1>
            <p className="text-orange-400 text-3xl font-mainlog font-semibold items-start text-start">Signin</p>
        </div>
        <div className="flex flex-col py-4 space-y-2 w-[30rem]">
            <label>Email:</label>
            <input className="" type='email' placeholder='Enter here your email'/>
            <label>Password:</label>
            <input type="password" placeholder="Provide your password" maxLength={8}/>
            <div className="py-2 flex justify-center">
                <Link href={""} >
                <button>Signin</button>
                </Link>
            </div>   
        </div>
        <div>
        <p>If forgot the password <Link className='text-blue-900 underline' href={""}> click here    </Link></p>
        <p>If don't have an account <Link className='text-blue-900 underline' href={"/signup"}> click here </Link></p>

        </div>
        </div>
    </div>
    </div>
  )
}

export default Signin