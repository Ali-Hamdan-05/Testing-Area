import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { minLength } from "zod";

const StudioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    location: {
        type: String,
        required: false,
        trim: true
    }
})
StudioSchema.methods.getDetails = function () {
    return `${this.name} - ${this.location}`;
};

export const StudioModel = mongoose.model("Studio", StudioSchema);

const GameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            trim: true,
            required: true
        },
        studio: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Studio",
            default: null
        }
    },
    {
        timestamps: true,
    },
);
GameSchema.methods.getDetails = function () {
    return `${this.name} - $${this.price.toFixed(2)}`;
};

export const GameModel = mongoose.model("Game", GameSchema, "Games");

export async function connectToDatabase() {
    dotenv.config();
    await mongoose.connect(process.env.MONGODB_URI as string, {dbName: process.env.DB_NAME as string});
}