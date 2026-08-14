import express, {
    type Express,
    type Request,
    type Response,
    type NextFunction,
} from "express";
import router from "./rtrex.ts";
import reqTime from "./time.ts";
import "./types/express.d.ts";
import zodRouter from "./zod.ts";
import { connectToDatabase } from "./services/database.service.ts";
import { gamesRouter } from "./routes/games.router.ts";

const app: Express = express();

connectToDatabase()
    .then(() => {
        app.use("/games", gamesRouter);
    })
    .catch((error) => {
        console.error("Failed to connect to database");
    });

app.use(reqTime);

app.get("/", (req: Request, res: Response) => {
    console.log("active");
    res.send(req.requestTime);
});

app.route("/hello")
    .get((req: Request, res: Response, next: NextFunction) => {
        console.log("Response in a bit");
        setTimeout(() => next(), 3000);
    })
    .get((req: Request, res: Response) => {
        res.send("Hello World");
    });

const cb1 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB1");
    setTimeout(() => next(), 3000);
};
const cb2 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB2");
    setTimeout(() => next(), 3000);
};
const cb3 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB3");
    res.send("Finally, resultss!!");
};
app.get("/want", [cb1, cb2, cb3]);

app.use("/router", router);

app.use("/error", (req: Request, res: Response) => {
    return Promise.resolve().then(() => {
        throw new Error("An error occurred");
    });
});
app.use("/error1", (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve()
        .then(() => {
            throw new Error("An error occurred");
        })
        .catch(next);
});

app.use("/zod", zodRouter);

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    res.status(500).send("Internal Server Error");
};
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error("Error Occured");
    next("error");
}, errorHandler);

app.listen(3000, () => {
    console.log("Example of app listening on port 3000");
});
