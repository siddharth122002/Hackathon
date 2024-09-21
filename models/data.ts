import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
    image:String,
    title:String,
    start:Date,
    end:Date,
    level:String,
    description:String,
})
const Data =mongoose.models.Data || mongoose.model('Data',dataSchema);

export {Data}