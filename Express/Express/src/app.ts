import express, { type Express, type Request, type Response, type NextFunction } from 'express';
import { request } from 'node:http';
import router from "./rtrex.ts";
import reqTime from "./time.ts";

const app: Express = express();

app.use(reqTime);

app.get('/', (req: Request, res: Response) => {
    res.send(req.requestTime);
});


app
    .route("/hello")
    .get((req: Request, res: Response, next: NextFunction) => {
    console.log("Response in a bit")
    setTimeout(() => next(), 3000);
    })
    .get((req: Request, res: Response) => {
    res.send("Hello World");
    })
;



const cb1 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB1");
    setTimeout(() => next(), 3000);
}
const cb2 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB2");
    setTimeout(() => next(), 3000);
}
const cb3 = function (req: Request, res: Response, next: NextFunction) {
    console.log("CB3")
    res.send("Finally, resultss!!")
}
app.get("/want", [cb1, cb2, cb3]);

app.use('/router', router);

app.listen(3000, () => {
    console.log("Example of app listening on port 3000")
});