import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser=asyncHandler(async(req,res)=>{
res.status(200).json({
    message:"OK "
})
}
)

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//     userName: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//     },

//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         lowercase: true,
//     },

//     password: {
//         type: String,
//         required: true,
//     }

// }, { timestamps: true });

// export const User = mongoose.model("User", userSchema);