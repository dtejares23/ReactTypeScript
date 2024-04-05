"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperHeroesController = exports.NoteController = void 0;
const Note_1 = require("../model/Note");
const NoteRepo_1 = require("../repository/NoteRepo");
class NoteController {
    async update(req, res) {
        try {
            if (!req.body || !req.body.name || !req.body.description) {
                throw new Error(req.body.name);
            }
            let id = parseInt(req.params["id"]);
            const new_note = new Note_1.Note();
            new_note.id = id;
            new_note.name = req.body.name;
            new_note.description = req.body.description;
            await new NoteRepo_1.NoteRepo().update(new_note);
            res.status(200).json({
                status: "Oks",
                message: `Successfuly UPDATED note Id: ${id}`
            });
        }
        catch (err) {
            console.error("Update note error:", err);
            res.status(500).json({
                status: `Internal server error!`,
                message: "Internal Server Error",
            });
        }
    }
    async create(req, res) {
        try {
            const new_note = new Note_1.Note();
            new_note.name = "req.body.noteName";
            new_note.description = "hey";
            let noteName = new_note.name;
            await new NoteRepo_1.NoteRepo().save(new_note);
            res.status(200).json({
                status: "Oks!",
                message: "You have successfuly created a NOTE: " + noteName + "Congratulations! "
            });
        }
        catch (err) {
            const err1 = console.log(req.body);
            res.status(500).json({
                status: `Internal Server Error! ${err1}`,
                message: "Internal server Error!"
            });
        }
    }
    async read(req, res) {
        try {
            const new_note = await new NoteRepo_1.NoteRepo().retrieveAll();
            // console.log(new_note)
            res.status(200).json({
                status: "Oks!",
                message: "Successfully fetched ALL note!",
                data: new_note
            });
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal server Error!"
            });
        }
    }
    async delete(req, res) {
        try {
            let id = parseInt(req.params["id"]);
            await new NoteRepo_1.NoteRepo().delete(id);
            res.status(200).json({
                status: "Ok!",
                message: "Successfully delete note!"
            });
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal server Error!"
            });
        }
    }
    async findById(req, res) {
        try {
            let id = parseInt(req.params["id"]);
            const new_note = await new NoteRepo_1.NoteRepo().retrieveById(id);
            if (new_note != null) {
                res.status(200).json({
                    status: "Oks na to",
                    message: "Successfully fetched note by id: " + id,
                    data: new_note
                });
            }
            else {
                throw new Error("No Data Found");
            }
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            });
        }
    }
}
exports.NoteController = NoteController;
class SuperHeroesController {
    async read(req, res) {
        try {
            const new_superhero = await new NoteRepo_1.NoteRepo().retrieveAll();
            res.status(200).json({
                status: "Oks!",
                message: "Successfully fetched ALL note!",
                data: new_superhero
            });
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal server Error!"
            });
        }
    }
}
exports.SuperHeroesController = SuperHeroesController;
