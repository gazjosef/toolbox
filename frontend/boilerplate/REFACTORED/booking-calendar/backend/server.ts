import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  const port: number | string = process.env.PORT || 5001;

  const app = express();

  app.get("/api/goals", (req: Request, res: Response) => {
    res.json({ message: "Get goals" });
  });

  app.listen(port, () => console.log(`Server started on port ${port}`));
};

startServer().catch((error) => console.error("Error starting server:", error));
