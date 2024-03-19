import { Request, Response } from "express";

// @desc    Register User
// @route   POST /api/users
// @access  Public
export const registerUser = (req: Request, res: Response) => {
  res.json({ message: "Register User" });
};
// @desc    Authenticate A User
// @route   POST /api/users/login
// @access  Public
export const loginUser = (req: Request, res: Response) => {
  res.json({ message: "Login User" });
};
// @desc    Get User Data
// @route   GET /api/users/me
// @access  Public
export const getMe = (req: Request, res: Response) => {
  res.json({ message: "User Data Display" });
};
