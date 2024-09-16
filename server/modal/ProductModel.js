import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema({
    P_ID: {
        type: String,
        required: true
    },
    ProductName: {
        type: String,
        required: true
    },
    PricePerUnit : {
        type: String,
        required: true
    },
    Discount: {
        type: String,
        required: true
    },
})

export default mongoose.model("Product", ProductSchema);