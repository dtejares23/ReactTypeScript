"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const NoteController_1 = require("../controller/NoteController");
const NoteSchema_1 = require("../schema/NoteSchema");
const validate_1 = __importDefault(require("../helper/validate"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const noteController = new NoteController_1.NoteController();
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
class NoteRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", (0, validate_1.default)(NoteSchema_1.createNoteSchema), noteController.create);
        this.router.get("", noteController.read);
        this.router.patch("/:id", (0, validate_1.default)(NoteSchema_1.updateNoteSchema), noteController.update);
        this.router.delete("/:id", noteController.delete);
        this.router.get("/:id", noteController.findById);
    }
}
exports.default = new NoteRoutes().router;
