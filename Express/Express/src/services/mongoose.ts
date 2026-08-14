import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String
})

GameSchema.methods.getDetails = function() {
    return `${this.name} - $${this.price.toFixed(2)}`;
};

const Game = mongoose.model("Game", GameSchema);

mongoose.connect(process.env.MONGODB_URI as string);