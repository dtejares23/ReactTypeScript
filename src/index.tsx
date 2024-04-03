import express, { Application, Request, Response } from "express";
import Database from "./config/database";
import NoteRouter from "./router/NoteRouter";
import React from 'react';
import ReactDOM from 'react-dom';
import Greetings from "./components/Greetings";
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

class App {
    public app: Application;

    constructor() {
        this.app = express()
        this.databaseSync()
        this.routes()
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    protected databaseSync(): void {
        const db = new Database();
        db.sequelize?.sync()
    }

    protected routes(): void {
        this.app.route("/").get((req: Request, res: Response) => {
            res.send("Welcome Home Daryl!");
        });
        this.app.use("/api/v1/note", NoteRouter);
    }
}

const port: number = 3001
const app = new App().app

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
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
//

app.listen(port, () => {
    console.log("✅✅✅ Server started successfully! ✅✅✅" , "\n Loading...")
})