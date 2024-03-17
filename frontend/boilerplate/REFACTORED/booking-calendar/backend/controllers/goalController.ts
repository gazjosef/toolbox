import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
export const getGoals = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "Get goal" });
});

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
export const setGoal = asyncHandler(async (req: Request, res: Response) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("🙏 Please add a text field");
  }
  console.log("Working");
  res.status(200).json({ message: "Create goal" });
});

// @desc    Update Goal
// @route   UPDATE /api/goals/:id
// @access  Private
export const updateGoal = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update goal ${id}` });
});

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete goal ${id}` });
});
