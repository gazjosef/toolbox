import mongoose, { Schema, Document, Model } from "mongoose";

// Define the interface for the document (instance of the model)
interface IGoal extends Document {
  text: string;
  createdAt: Date;
  updatedAt: Date;
}

// Define the schema
const goalSchema: Schema<IGoal> = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
  },
  {
    timestamps: true,
  }
);

// Define the model
export const Goal: Model<IGoal> = mongoose.model<IGoal>("Goal", goalSchema);
