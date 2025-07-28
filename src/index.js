// require('dotenv').config()
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

console.log("haha");

dotenv.config({
    path: "./. env"
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });
    })

    .catch((error) => {
        console.error("Error connecting to the database:", error);
    })
                          
    .finally(() => {
        console.log("Database connection attempt finished. Exiting...");
    })