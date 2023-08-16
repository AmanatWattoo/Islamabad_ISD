import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Avatarstyle = () => {
  return (
    <div>
        <div className='flex flex-col h-screen bg-gradient-to-br to-green-500 from-green-800 justify-center items-center py-[15rem]'>
            <Avatar>
                <AvatarImage src='https://cdn2.vectorstock.com/i/1000x1000/30/21/sufism-vector-1073021.jpg'/>
            <AvatarFallback>Sufi</AvatarFallback>
            </Avatar>
            <div className='py-[2rem]'>
                <Link href={"/"}>
                <Button>Home</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Avatarstyle