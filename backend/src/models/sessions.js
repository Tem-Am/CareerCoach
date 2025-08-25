import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
  {
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "Client", required: true },
    startsAt: { type: Date, required: true },
    endsAt: { type: Date, required: true },
    notes: { type: String, default: "" },
    status: { type: String, enum: ["scheduled", "completed", "canceled"], default: "scheduled" }
  },
  { timestamps: true }
);

export default mongoose.model("Session", SessionSchema);
