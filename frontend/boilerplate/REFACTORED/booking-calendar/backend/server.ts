import express from "express";
import dotenv from "dotenv";
dotenv.config();
import goalRoutes from "./routes/goalRoutes";

const startServer = async () => {
  const port: number | string = process.env.PORT || 5001;

  const app = express();

  app.use("/api/goals", goalRoutes);

  app.listen(port, () => console.log(`Server started on port ${port}`));
};

startServer().catch((error: Error) =>
  console.error("Error starting server:", error)
);
