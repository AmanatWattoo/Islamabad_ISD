import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Alertmain = () => {
  return (
    <div className=' h-screen bg-gradient-to-tr to-pink-400 from-rose-800'>
        
        <div className='flex flex-col justify-center items-center rounded-md py-[15rem]'>
          <div className='flex flex-col justify-center items-center '>
            <Alert variant={'destructive'} autoFocus  >
                <AlertTitle>Helo I am Alert</AlertTitle>
                <AlertDescription>
                  Add components
                </AlertDescription>
              </Alert>
            </div>
            <div className='flex justify-center gap-[3rem] py-4'>
            <Link href={'/'}>
            <Button>Go to Home</Button>
            </Link>
            <Link href={'/supports/shadcnui/accordien'}>
            <Button>Go to accordian</Button>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Alertmain