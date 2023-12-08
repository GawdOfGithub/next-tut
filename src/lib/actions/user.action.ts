"use server"
import User from "@/database/user.modal"
import { connectToDatabase } from "../mongoose"

export default async function getUserById(params:any)
{
    try{
        connectToDatabase()
        const{userId} = params
        const user = await User.findOne({clerkId:1})
        return user
    }
    catch(error)
    {
        console.log(error);
    }
}