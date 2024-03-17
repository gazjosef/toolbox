import { Request, Response } from "express";

// @desc    Get Goals
// @route   GET /api/goals
// @access  Private
export const getGoals = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get goal" });
};

// @desc    Set Goal
// @route   POST /api/goals
// @access  Private
export const setGoal = (req: Request, res: Response) => {
  res.status(200).json({ message: "Create goal" });
};

// @desc    Update Goal
// @route   UPDATE /api/goals/:id
// @access  Private
export const updateGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Update goal ${id}` });
};

// @desc    Delete Goal
// @route   DELETE /api/goals/:id
// @access  Private
export const deleteGoal = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({ message: `Delete goal ${id}` });
};
