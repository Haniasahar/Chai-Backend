// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";

console.log("haha");

// import express from "express";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";

// (async()=>{
//     try {
//       await mongoose.connect(`${process.env.MONGODB_URI} / ${DB_NAME}`);
//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })()

dotenv.config({
    path: "./. env"
});

connectDB();