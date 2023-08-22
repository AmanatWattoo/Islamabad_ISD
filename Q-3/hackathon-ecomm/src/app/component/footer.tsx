import React from 'react'
import { Branches, BranchesDataType, FooterData, FooterDataType } from './footerdata'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-black/[0.01] border-t-2 flex flex-col'>
     {/*--------------------- offices section--------------- */}
    
     <div className='flex justify-evenly'>
        {Branches.map((item:BranchesDataType,index:number)=>{
            const IconComponent = item.icon
            // this will get rendered the react icons.
            return(
               <div key={index} className='flex space-x-2 px-3 py-2 '>
                   <div>
                   {IconComponent && <span className=''><IconComponent/></span>}
                   <p className='font-bold underline'>{item.name}</p>
                   <p>{item.address}</p>
                   <p>{item.email}</p>
                   <p>{item.phone}</p>
                   </div>
               </div>
            )
        })}
      </div>   
        
        {/* -----------contact section----------- */}
    <div className='flex justify-around'>
      {FooterData.map((item:FooterDataType, index:number)=>{
         const IconComponent = item.icon
         // this will get rendered the react icons.
         return(
            <div key={index} className='flex space-x-2 px-3 py-2 '>
                <div>
                {IconComponent && <span className=''><IconComponent/></span>}
                {item.url && <Link className='font-bold' href={item.url}>{item.name}</Link>}
                
                <p>{item.description}</p>
                </div>
            </div>
         )
      })}
      
    </div>
    <div className='mx-auto py-10'>
        <p className='text-black text-sm text-center'>
            &copy; 2023 Wattoo Super Store, Inc. all rights reserved. 
        </p>
    </div>
    
    </div>
    
  )
}

export default Footer