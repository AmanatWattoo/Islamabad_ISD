import React from 'react'
import FetchData from '../../../../../sanity/fetchdata'
import Image from 'next/image'
import { urlForImage } from '../../../../../sanity/lib/image'

export async function generateStaticParams(){
  const data = await FetchData()
  //hamar page slug ki base bane to mapping krwa lete hn 
  return data.map((item:any)=>(
    //name of file within square brackets upon which a new page is generated
    {prduct:item.slug.current
    }
  ))
}


const page = async ({params}:{params:any}) => {
  const data = await FetchData()
  // console.log("value of parms", params)
  const filterdata = data.find((item:any)=> 
  item.slug.current == params.prduct
  // سیپلانگ وغیرہ کا خاص خیال رکھیں جو ڈیٹامیں ہے وہی نام دیں۔۔ 
  )
  
  // console.log("This is filtered data",filterdata)
  return (
    <div>
      <div >
      <h1 className='text-3xl'>{filterdata.productName}</h1>
      <p>{filterdata.detail}</p>
      <p>{filterdata.season}</p>
      </div>
      <div className='rounded-md  grid grid-cols-2 gap-2 max-w-xs '>
        {filterdata.image.map((pic:any, index:number)=>(
        <div key={index} className=''>
          <Image className='rounded-md aspect-square' src={urlForImage(pic).url()} 
          alt={pic.alt}
          width={200}
          height={200}
          />
          <p>{pic.alt}</p>
        </div>
        ))}
      </div>
      <div>
          Pkr Rs: {filterdata.Price}
        </div>
    </div>
  )
}

export default page