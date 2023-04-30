import { Timestamp } from "mongodb";
import mongoose from "mongoose";
const { Schema } = mongoose;

const posts = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        }
    },
    { timestamps: true }
);
export default posts;
