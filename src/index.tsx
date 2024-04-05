import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";
import { swaggerUi, JsonObject, swaggerSpec } from "./api/middleware/swagger"

const port: number = 3001

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.plugins();
        this.databaseSync();
        this.routes(swaggerSpec);
    };
    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    };
    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync();
    };
    protected routes( swaggerSpec: any): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Welcome Home Daryl!");
        });
        this.app.use("/api/note", NoteRouter);
        this.app.use("/api/superhero", )
        this.app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
        this.app.listen(port, () => {
            console.log("✅ Server started successfully! ✅", "\nLoading...")
        });
    };
}

const app = new App().app