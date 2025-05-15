import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(
      "mongodb+srv://ehtishamali:ehtishamali@emumbawork.vrtaa4f.mongodb.net/?retryWrites=true&w=majority&appName=EmumbaWork"
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1); // Exit the process with failure
  }
};
