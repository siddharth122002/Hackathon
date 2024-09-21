import { Data } from "@/models/data";
import { connectDB } from "@/utils/connectDB";
import { NextResponse, NextRequest } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

export async function PUT(req: NextRequest) {

    await connectDB();
    const form = await req.formData()
    console.log(form)
    const title=form.get('title')
    const start=form.get('start')
    const end=form.get('end')
    const description=form.get('description')
    const level=form.get('level')
    const image=form.get('image');

    const { pathname } = req.nextUrl;
    const id = pathname.split('/').pop(); 
    try {
        if (image instanceof File) {
            const imageBuffer = await image.arrayBuffer();
            const imageBase64 = Buffer.from(imageBuffer).toString('base64');
            const imageDataUri = `data:${image.type};base64,${imageBase64}`;
           
            const uploadResponse = await cloudinary.uploader.upload(imageDataUri);
            const updatedEntry = await Data.findByIdAndUpdate(id,{
                image:uploadResponse?.secure_url,
                title:title,
                start:start,
                end:end,
                level:level,
                description:description,
            }); 
            await updatedEntry.save();
            return NextResponse.json("success")
        }
    } catch (e) {
        console.error(e);
        return NextResponse.json("error");
    }
}