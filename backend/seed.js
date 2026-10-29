import mongoose from "mongoose";
import dotenv from "dotenv";
import productModel from "./models/productModel.js";

dotenv.config();

console.log("Starting seed script...");

const seedProducts = async () => {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connected Successfully!");

        console.log("Clearing old products...");
        await productModel.deleteMany({});

        const sampleProducts = [
            {
                name: "Women Neck Cotton Top",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500"],
                category: "Women",
                subCategory: "Topwear",
                sizes: ["S", "M", "L"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Men Neck Cotton T-Shirt",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500"],
                category: "Men",
                subCategory: "Topwear",
                sizes: ["M", "L", "XL"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Girls Cotton Top",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 90,
                image: ["https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?w=500"],
                category: "Kids",
                subCategory: "Topwear",
                sizes: ["S", "L", "XL"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Men Neck Cotton T-Shirt",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 110,
                image: ["https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500"],
                category: "Men",
                subCategory: "Topwear",
                sizes: ["S", "M", "XXL"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Women Neck Cotton Top",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 120,
                image: ["https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500"],
                category: "Women",
                subCategory: "Topwear",
                sizes: ["M", "L", "XL"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Girls Cotton Top",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500"],
                category: "Kids",
                subCategory: "Topwear",
                sizes: ["S", "L", "XL"],
                date: 12345,
                bestseller: true
            },
            {
                name: "Men Flat-Front Trouser",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 115,
                image: ["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500"],
                category: "Men",
                subCategory: "Bottomwear",
                sizes: ["S", "L", "XL"],
                date: 12345,
                bestseller: false
            },
            {
                name: "Men Neck Cotton T-Shirt",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500"],
                category: "Men",
                subCategory: "Topwear",
                sizes: ["S", "M", "L", "XL"],
                date: 12345,
                bestseller: false
            },
            {
                name: "Girls Cotton Top",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"],
                category: "Kids",
                subCategory: "Topwear",
                sizes: ["M", "L", "XL"],
                date: 12345,
                bestseller: false
            },
            {
                name: "Men Flat-Front Trouser",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, itaque.",
                price: 100,
                image: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500"], // এটি ঠিক করা হয়েছে
                category: "Men",
                subCategory: "Bottomwear",
                sizes: ["S", "L", "XL"],
                date: 12345,
                bestseller: false
            }
        ];

        console.log("Inserting new products...");
        await productModel.insertMany(sampleProducts);
        console.log("Sample Products Added Successfully! 🎉");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding data:", error);
        process.exit(1);
    }
};

seedProducts();