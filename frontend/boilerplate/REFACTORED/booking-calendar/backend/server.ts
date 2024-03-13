import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const startServer = async () => {
  const port: number | string = process.env.PORT || 5001;

  const app = express();

  app.use("/api/goals", require("./routes/goalRoutes").default);

  app.listen(port, () => console.log(`Server started on port ${port}`));
};

startServer().catch((error: Error) =>
  console.error("Error starting server:", error)
);
