import mongoose from "mongoose";

const productsModel = new  mongoose.Schema({
    name:String,
    price:String,
    comapny:String,
    color:String,
    category:String,
});

export const Product = mongoose.model.products || mongoose.model('products', productsModel);