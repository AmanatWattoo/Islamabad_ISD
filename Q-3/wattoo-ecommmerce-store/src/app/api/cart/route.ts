import { NextRequest, NextResponse } from 'next/server'
import { cartCoulmn, db } from '../../../../db/drizzle'
export const POST = async (request:NextRequest) => {
  const req = await request.json() 
  try {
    const res = await db.insert(cartCoulmn).values({
            user_id: req.user_id,
            product_id: req.product_id,
            product_title:req.product_title,
            image_url:req.image_url,
            product_price:req.product_price,
            product_quantity:req.product_quantity,

    }).returning()
    
    console.log(" success data added successfully!")
    
     return NextResponse.json({ res })
    
  }
  catch (error) {
    
    console.log("there was an error",error)
  }  
  
}

 