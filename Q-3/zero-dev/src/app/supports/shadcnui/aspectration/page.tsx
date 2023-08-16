import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const AsepectRation = () => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center'>
            <AspectRatio ratio= {5 / 3 }>
                <img className='object-cover items-center flex justify-center py-[15rem] rounded-md'
                alt='poor child looking for food'
                src='https://media.istockphoto.com/id/941788480/photo/portrait-of-girl-kid-having-mid-day-meal-in-indian-school.jpg?s=612x612&w=0&k=20&c=tdMRbWtA9rtYSE_6EpXpSl5E4d4xdvqK7egdYd_Q_MM='/>
            </AspectRatio>
            <Link href={"/"}>
            <Button>Home</Button>
            </Link>
        </div>
    </div>
  )
}

export default AsepectRation