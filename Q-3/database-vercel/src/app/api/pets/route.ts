import { NextRequest, NextResponse } from "next/server";
import { UserData, db } from "../../../../db/drizzle";

export const POST=async(request:NextRequest)=>{
    const req =await request.json();
    try {
        const res=await db.insert(UserData).values({
            Name:req.Name,
            Owner:req.Owner
        }).returning()
        return NextResponse.json({res})
        console.log("congrats data posted successfully")
    } catch (error) {
        console.log("error posting", error)
    }
}