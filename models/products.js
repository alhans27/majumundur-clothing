const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./users");

const productSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    desc: {
        type: String,
    },
    price: {
        type: Number,
        min: 0,
    },
    images: [{
        type: String,
    }],
    stock: {
        type: Number,
        min: 0,
        default: 0,
    },
    merchantId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
    },
    meta: {
        category: {
            type: String,
            enum: ["Tshirt", "Jeans"],
        },
        tags: [String],
        averageRating: {
            type: Number,
            min: 0,
            max: 5,
            default: 0,
        },
        reviews: [
            {
                reviewerId: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: User,
                },
                comment: String,
                rating: Number,
                createdAt: Date,
            }
        ],
    },
}, {timestamps: true});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;