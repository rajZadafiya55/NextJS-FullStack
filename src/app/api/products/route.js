import { connectionUrl } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export const GET = async () => {
    let data = [];
    try {
        await mongoose.connect(connectionUrl);
        data = await Product.find();
        console.log(data)
        console.log("connection Successfully..!")
    } catch (error) {
        data = { success: false }
    }
    return NextResponse.json({ result: data,    success: true });
}