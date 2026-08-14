import express, {
    type Request,
    type Response,
    type NextFunction,
} from "express";

const router = express.Router({ mergeParams: true });

const timeLog = (req: Request, res: Response, next: NextFunction) => {
    console.log(Date.now());
    next();
};

router.use(timeLog);

router.get("/", (req: Request, res: Response) => {
    res.send("router example 1");
});

router.get("/route", (req: Request, res: Response) => {
    res.send("router example 2");
});

export default router;
