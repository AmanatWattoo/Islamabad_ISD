'use client'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import Link from 'next/link'
import React from 'react'

const Calendarstyle = () => {
  const [date, setDate] =React.useState<Date| undefined>(new Date())
    return (
    <div>
        <div className='flex flex-col justify-center items-start bg-blue-700/[0.05] h-screen'>
            <Calendar mode='single' selected={date} onSelect={setDate}
            className='rounded-md border px-[20rem]'
            />
            <div>
                <Link href={"/"}>
                <Button>Home</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Calendarstyle