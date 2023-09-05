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
            ref: "User",
            required: true,
        },
        done:{
           type:Boolean,
           default:false
        }
    },
    { timestamps: true }
);
export default posts;
