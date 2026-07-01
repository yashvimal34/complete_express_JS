// Create Product Model.
// Model = Blueprint of MongoDB document.

import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

const products = mongoose.model("Products", productSchema);
export default products;

/* Now From Here: 

MongoDB collection will be:
   ----- products -----
automatically.

*/