import * as z from "zod";
import express, {
    type Request,
    type Response,
} from "express";

const zodRouter: express.Router = express.Router();

const literalEx = z.templateLiteral(["--Id-", z.number()], {error: "Invalid ID format"});

const Player = z
    .object({
        id: literalEx,
        username: z.string().max(20).min(5).regex(/^\w+$/),
        email: z.email(),
        xp: z.coerce.number<number>().positive().catch(0),
        gender: z
            .literal(["male", "female", "none"])
            .optional()
            .default("none"),
    })
    .transform((data) => {
        return {
            ...data,
            xp: data.xp.toString(),
        };
    });

type PlayerTypeOut = z.output<typeof Player>;
type PlayerTypeIn = z.input<typeof Player>;

const steve = {
    id: "--Id-1",
    username: "Steve",
    email: "steve@example.com",
    xp: 100,
    gender: "male",
} as PlayerTypeIn;

const alex = {
    id: "--Id-2",
    username: "Alexa",
    email: "alexa@example.com",
    xp: -50,
};

const fred = {
    id: "--Id3",
    username: "Freddy",
    email: "fred@example.com",
    xp: 200,
    gender: "none",
};

zodRouter.get("/players", (req: Request, res: Response) => {
    try {
        const steveResult = Player.parse(steve);
        const alexResult = Player.parse(alex);
        const fredResult = Player.safeParse(fred);

        if (fredResult.success) {
            res.json({
                steve: steveResult,
                alex: alexResult,
                fred: fredResult.data,
            });
        } else {
            console.log(fredResult.error.issues[0]!);
            setTimeout(() => {
                res.redirect("/hello");
            }, 3000);
            return;
        }
        res.json({
            steve: steveResult,
            alex: alexResult,
            fred: fredResult.data,
        });
    } catch (error: unknown) {
        if (error instanceof z.ZodError) {
            console.error(error.issues[0]);
            res.send(error.issues[0]!.message);
        } else {
            console.error(error);
            res.send("An unexpected error occurred");
        }
    }
});

export default zodRouter;
