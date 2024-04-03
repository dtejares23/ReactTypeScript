"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./config/database"));
const NoteRouter_1 = __importDefault(require("./router/NoteRouter"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
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
//SwaggerAPI
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'DexEx API',
            version: '1.0.0',
            description: 'A DevEx API with Swagger documentation',
        },
        servers: [
            {
                url: "http://localhost:3001"
            }
        ],
        components: {
            schemas: {
                Note: {
                    type: 'object',
                    properties: {
                        id: { type: 'integer' },
                        name: { type: 'string' },
                        description: { type: 'string' },
                        createdAt: { type: 'string', format: 'date-time' },
                        updatedAt: { type: 'string', format: 'date-time' },
                    },
                },
            },
        },
    },
    apis: ['src/router/NoteRouter.ts'],
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use('/swagger', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
//
app.listen(port, () => {
    console.log("✅✅✅ Server started successfully! ✅✅✅", "\n Loading...");
});
