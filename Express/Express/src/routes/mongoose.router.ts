import express, { type Request, type Response } from "express";
import { ObjectId } from "mongodb";
import { GameModel, StudioModel } from "../services/mongoose.ts";

export const gamesRouter = express.Router();
gamesRouter.use(express.json());

gamesRouter.get("/", async (req: Request, res: Response) => {
    try {
        const games = await GameModel.find().populate('studio');
        res.status(200).json(games);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Error Retrieving Data From DataBase");
    }
});
gamesRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const game = await GameModel.findById(id).populate('studio');
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).send(`Game item of id: ${id} not found`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Error Retrieving data from DataBase");
    }
});

gamesRouter.post("/", async (req: Request, res: Response) => {
    try {
        // const game = new GameModel(req.body);
        // await game.save();
        const game = await GameModel.create(req.body);
        await game.populate('studio');
        res.status(201).json(game);
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Error Saving Data To DataBase");
    }
});

gamesRouter.put("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        // const game = await GameModel.updateOne({_id: new ObjectId(id as string)}, req.body);
        const game = await GameModel.findByIdAndUpdate(id, req.body, {
            new: true,
        }).populate('studio');
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).send(`Game item of id: ${id} not found`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Error Updating Data In DataBase");
    }
});

gamesRouter.delete("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const game = await GameModel.findByIdAndDelete(id).populate('studio');
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(404).send(`Game item of id: ${id} not found`);
        }
    } catch (error: any) {
        console.error(error.message);
        res.status(500).send("Error Deleting Data From DataBase");
    }
});

gamesRouter.post("/studio", async (req: Request, res: Response) => {
    try{
        const studio = await StudioModel.create(req.body);
        res.status(200).json(studio);
    }catch(error: any) {
        console.log(error.message);
        res.status(500).send("Error Adding Studio to DataBase");
    }
}) 