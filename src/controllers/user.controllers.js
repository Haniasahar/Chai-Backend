import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const registerUser=asyncHandler(async (req,res)=>{
const {userName,fullName,email,password}=req.body;
console.log(email);

if(fullName===""){
throw new ApiError(400)
}
}
)

export {registerUser}

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