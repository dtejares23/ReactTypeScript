"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const NoteRouter_1 = __importDefault(require("./router/NoteRouter"));
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.databaseSync();
        this.routes();
    }
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    databaseSync() {
        const db = new database_1.default();
        db.sequelize?.sync();
    }
    routes() {
        this.app.route("/").get((req, res) => {
            res.send("Welcome Home Daryl!");
        });
        this.app.use("/api/v1/note", NoteRouter_1.default);
    }
}
const port = 3001;
const app = new App().app;
app.listen(port, () => {
    console.log("✅✅✅ Server started successfully! ✅✅✅");
});
