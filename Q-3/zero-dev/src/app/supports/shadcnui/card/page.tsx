import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

const Cardstyle = () => {
  return (
    <div>
        <div className='font-label text-2xl bg-green-800/[0.10]'>
            <Card className='bg-blue-700/[0.05] items-center flex justify-center flex-col'>
                <CardHeader>
                    <CardTitle>Hello card</CardTitle>
                    <CardDescription>This is description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>This is first content</p>
                    <p>Second Content</p>
                </CardContent>
                <CardFooter>
                    <p>card Footer</p>
                </CardFooter>
            </Card>
            <div className='flex justify-center items-center text-4xl'>
                <Link href={'/'}>
                <Button>Home</Button>
                    </Link>
            </div>
        </div>
    </div>
  )
}

export default Cardstyle