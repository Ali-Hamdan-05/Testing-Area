import {type Request, type Response, type NextFunction} from "express";


const reqTime = function(req: Request, res: Response, next: NextFunction) {
    req.requestTime = Date.now();
    next();
};

export default reqTime;