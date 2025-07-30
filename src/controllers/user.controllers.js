import { User } from "../models/user.models.js";
import { ApiError } from "../utils/apiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  const { userName, fullName, email, password } = req.body;
  console.log(email);

  if (
    [fullName, userName, email, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required ");
  }

  const existedUser = User.findOne({
    $or: [{ email }, { userName }],
  });

  if (existedUser) {
    throw new ApiError(409, "User with email or username already exists");
  }

  console.log(req.files?.avatar[0]?.path);

  const avatarLocalPath=req.files?.avatar[0]?.path;
  const coverImageLocalPath=req.files?.coverImage[0]?.path;

if (!avatarLocalPath) {
    throw new ApiError(400, "Avatar file is required");
}

});

export { registerUser };

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
