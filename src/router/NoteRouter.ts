import BaseRoutes from "./base/BaseRouter";
import NoteController from "../controller/NoteController"
import { updateNoteSchema } from "../schema/NoteSchema";
import validate from "../helper/validate";
import express, { Request, Response } from 'express';

const router = express.Router();
/**
 * @swagger
 * tags: 
 *  name: Notes
 *  description: Operates related to notes
 * 
 * /api/v1/note/:
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
 * /api/v1/note/{id}:
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



router.get('/api/v1/note', (req: Request, res: Response) => {

});


class NoteRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", NoteController.create);
        this.router.get("", NoteController.read);
        this.router.patch(
            "/:id",
            // validate(updateNoteSchema), 
            NoteController.update);
        this.router.delete("/:id", NoteController.delete);
        this.router.get("/:id", NoteController.findById);
    }
}
export default new NoteRoutes().router;