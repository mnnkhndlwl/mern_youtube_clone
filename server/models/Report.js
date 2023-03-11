import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Report", ReportSchema);
