"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteRepo = void 0;
const Note_1 = require("../model/Note");
class NoteRepo {
    async save(note) {
        try {
            await Note_1.Note.create({
                name: note.name,
                description: note.description
            });
        }
        catch (err) {
            throw new Error("Method not implemented");
        }
    }
    async update(note) {
        try {
            const new_note = await Note_1.Note.findOne({
                where: {
                    id: note.id,
                },
            });
            if (!new_note) {
                throw new Error("You FAILED to UPDATE note!");
            }
            new_note.name = note.name;
            new_note.description = note.description;
            await new_note.save();
        }
        catch (err) {
            throw new Error("Method not implemented");
        }
    }
    async delete(noteId) {
        try {
            const new_note = await Note_1.Note.findOne({
                where: {
                    id: noteId,
                },
            });
            if (!noteId) {
                throw new Error("Note not found!");
            }
            await new_note.destroy();
        }
        catch {
            throw new Error("Failed to delete note!");
        }
    }
    async retrieveById(noteId) {
        try {
            const new_note = await Note_1.Note.findOne({
                where: {
                    id: noteId,
                },
            });
            if (!noteId) {
                throw new Error("Note not found!");
            }
            return new_note;
        }
        catch {
            throw new Error("Failed to retrieve note!");
        }
    }
    async retrieveAll() {
        try {
            return await Note_1.Note.findAll();
        }
        catch {
            throw new Error("Failed to retrieve ALL note!");
        }
    }
}
exports.NoteRepo = NoteRepo;
