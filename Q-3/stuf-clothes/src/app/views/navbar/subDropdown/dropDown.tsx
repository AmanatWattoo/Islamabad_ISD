import { navDataType } from '@/app/utils/navbar'
import React, { FC } from 'react'
import Link from 'next/link'
const DropDown:FC<{item:navDataType}> = ({item}) => {
  return (
    <ul>
      {item.dropdownData?.map((item:navDataType, index:number)=>(
        <li className='hover:bg-green-950/[0.05] text-lg min-w-[7.8rem] border-t-2 group-hover:duration-300 -translate-y-12 group-hover:translate-y-0'>
          <Link href={item.href}>{item.title}</Link>
        </li>
    ))}</ul>
  )
}

export default DropDown