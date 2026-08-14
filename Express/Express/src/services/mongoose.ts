import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { minLength } from "zod";

const StudioSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: false
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
            minLength: 3
        },
        price: {
            type: Number,
            required: true
        },
        category: String,
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