import { NextRequest } from "next/server";
import { UserLogOn, db } from "../../../../database/drizzle";

export const POST = async(requst:NextRequest)=>{
        const req = await requst.json()
        // here all perameter will recieved which we will passe into body

    try {
        //define at schema drizzle.ts will be define here
        const res = await db.insert(UserLogOn).values({
           
            user_name: req.user_name,
            user_email: req.user_email,
            user_password: req.user_password,
        })
        console.log("data posted to database")
    } catch (error) {
        console.log("Error not posted")
        console.log("error", error)
    }
}