import mongoose from "mongoose";

let isConnected: boolean = false;

const connectDB = async () => {
    if(isConnected){
        console.log("Mongodb already connected");
        return isConnected;
    }
    try {
        await mongoose.connect(process.env.MONGO_URL!);
        isConnected = true;
        console.log("Mongodb connected.");
    } catch (error) {
        console.log(error);
    }
}
export  {connectDB};