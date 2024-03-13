import { Request, Response } from "express";

export const getGoals = (req: Request, res: Response) => {
  res.status(200).json({ message: "Get goal" });
};

// module.exports = {
//   getGoals,
// };
