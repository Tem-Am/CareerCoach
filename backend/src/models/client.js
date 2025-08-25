import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String },
    goals: { type: [String], default: [] } // e.g., "resume", "interview"
  },
  { timestamps: true }
);

export default mongoose.model("Client", ClientSchema);
