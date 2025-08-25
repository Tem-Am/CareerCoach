import mongoose from "mongoose";

// Database connection
// Make sure to call this function before using any models
export async function connectDB(uri) {
  if (!uri) throw new Error("MONGODB_URI is missing");
  mongoose.set("strictQuery", true);
  await mongoose.connect(uri, { dbName: "career_coach" });
  console.log("✅ MongoDB connected");
}