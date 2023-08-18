import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"


const Signin = () => {
  return (
    <Card className="h-screen bg-black/[0.10]">
    <CardContent className="font-heading flex justify-center items-center">
        <CardDescription className="flex bg-gray-400/[0.30] mt-[10rem] py-4 rounded-[5rem] shadow-xl z-10 flex-col justify-center items-center ">
        <CardHeader className="">
            <CardTitle>Welcome to JWT Authentication</CardTitle>
            <Label className="text-orange-400 text-3xl font-mainlog font-semibold items-start text-start">Signin</Label>
        </CardHeader>
        <CardDescription className="flex flex-col py-4 space-y-2 w-[22rem]">
            <Label>Email:</Label>
            <Input className="" type='email' placeholder='Enter here your email'/>
            <Label>Password:</Label>
            <Input type="password" placeholder="Provide your password" maxLength={8}/>
            <CardContent className="py-2 flex justify-center">
                <Link href={""} >
                <Button>Signin</Button>
                </Link>
            </CardContent>   
        </CardDescription>
        <CardFooter className="flex flex-col">
        <Label>If forgot the password <Link className='text-blue-900 underline' href={""}> click here    </Link></Label>
        <Label>If do not have an account <Link className='text-blue-900 underline' href={"/signup"}> click here </Link></Label>

        </CardFooter>
        </CardDescription>
        {/* ffs */}
    </CardContent>
    </Card>
  )
}

export default Signin