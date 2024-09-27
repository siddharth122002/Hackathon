import { Data } from "@/models/data";
import {connectDB} from "@/utils/connectDB";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop(); 
    try{
        await connectDB();
        const data = await Data.findById({
            _id:id
        })
        console.log(data)
        return NextResponse.json(data)
    }catch(e){
        
        return NextResponse.json(e);
    }
}