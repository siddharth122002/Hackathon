import { Data } from "@/models/data";
import { connectDB } from "@/utils/connectDB";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
    await connectDB();
    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop(); 
    try {
        await Data.deleteOne({ _id: id }); 
        return NextResponse.json( "success" );
    } catch (e) {
        console.error(e);
        return NextResponse.json( "error" );
    }
}
