import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { User } from "../models/userModel";

// @desc    Register User
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res.status(400);
      throw new Error("Please add all fields");
    }

    // Check if user exists
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists");
    }

    res.json({ message: "Register User" });
  }
);
// @desc    Authenticate A User
// @route   POST /api/users/login
// @access  Public
export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "Login User" });
});
// @desc    Get User Data
// @route   GET /api/users/me
// @access  Public
export const getMe = asyncHandler(async (req: Request, res: Response) => {
  res.json({ message: "User Data Display" });
});
