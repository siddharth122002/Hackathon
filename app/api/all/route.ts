import { Data } from "@/models/data";
import {connectDB} from "@/utils/connectDB";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        await connectDB();
        const allData = await Data.find({});
        return NextResponse.json(allData)
    }catch(e){
        return NextResponse.json("error");
    }
}