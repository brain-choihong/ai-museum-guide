import mongoose from "mongoose";

const CollectibleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required!"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Description is required!"],
    trim: true,
  },
  img: {
    type: String,
    trim: true,
  },
  video: {
    type: String,
    trim: true,
  },
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
});

export default mongoose.models.Collectible || mongoose.model("Collectible", CollectibleSchema);
