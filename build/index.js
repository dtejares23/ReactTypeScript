"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const NoteRouter_1 = __importDefault(require("./router/NoteRouter"));
const swagger_1 = require("./api/middleware/swagger");
const port = 3001;
class App {
    constructor() {
        this.app = (0, express_1.default)();
        this.plugins();
        this.databaseSync();
        this.routes(swagger_1.swaggerSpec);
    }
    ;
    plugins() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    ;
    databaseSync() {
        const db = new database_1.default();
        db.sequelize?.sync();
    }
    ;
    routes(swaggerSpec) {
        this.app.route("/").get((req, res) => {
            res.send("Welcome Home Daryl!");
        });
        this.app.use("/api/note", NoteRouter_1.default);
        this.app.use('/swagger', swagger_1.swaggerUi.serve, swagger_1.swaggerUi.setup(swaggerSpec));
        this.app.listen(port, () => {
            console.log("✅ Server started successfully! ✅", "\nLoading...");
        });
    }
    ;
}
const app = new App().app;
