import BaseRoutes from "./base/BaseRouter";
import { NoteController, SuperHeroesController } from "../controller/NoteController"
import { createNoteSchema, updateNoteSchema } from "../schema/NoteSchema";
import validate from "../helper/validate";
import express, { Request, Response } from 'express';

import { RequestHandler } from 'express';

const router = express.Router();
const noteController = new NoteController();
const superHeroController = new SuperHeroesController();
/**
 * @swagger
 * tags: 
 *  name: Notes
 *  description: Operates related to notes
 * 
 * /api/note/:
 *   get:
 *     tags: 
 *      - Notes
 *     summary: Get all notes
 *     description: Retrieve a list of all notes
 *     responses:
 *       '200':
 *         description: A list of notes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 * 
 * /api/note/{id}:
 *   get:
 *     tags: 
 *      - Notes
 *     summary: Get a note by ID
 *     description: Retrieve a note by its ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the note to retrieve
 *     responses:
 *       '200':
 *         description: A single note
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Note'
 * 
 *   patch:
 *     summary: Update a note by ID
 *     description: Update an existing note by its ID
 *     tags:
 *       - Notes
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the note to update
 *       - in: body
 *         name: body
 *         description: Updated note object
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *             description:
 *               type: string
 *     responses:
 *       '200':
 *         description: Note updated successfully
 *       '400':
 *         description: Invalid request
 *       '404':
 *         description: Note not found
 */

class NoteRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("",validate(createNoteSchema), noteController.create);
        this.router.get("", noteController.read);
        this.router.patch("/:id", validate(updateNoteSchema),noteController.update)
        this.router.delete("/:id", noteController.delete);
        this.router.get("/:id", noteController.findById);
    }
}

class SuperHeroRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("", superHeroController.read);
    }
}
export default new NoteRoutes().router;