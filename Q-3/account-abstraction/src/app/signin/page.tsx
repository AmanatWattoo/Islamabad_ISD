import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


const Signin = () => {
  return (
    <div>
        <div>
            <h1>Welcome to JWT Authenctication</h1>
            <p>Signup</p>
        </div>
        <div>
            <Label>Email:</Label>
            <Input type='email' placeholder='Enter here your email'/>
            <Label>Password:</Label>
            <div>
                <Link href={""} >
                <Button>Signup</Button>
                </Link>
            </div>   
        </div>
        <div>
            <p>If don't account  an account <Link className='text-blue-900 underline' href={"/signup"}> click here </Link></p>
        </div>
    </div>
  )
}

export default Signin