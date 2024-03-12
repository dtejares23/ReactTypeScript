"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Note_1 = require("../src/model/Note");
const NoteRepo_1 = require("../repository/NoteRepo");
class NoteController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = new Note_1.Note();
                new_note.name = req.body.name;
                new_note.description = req.body.description;
                let noteName = new_note.name;
                yield new NoteRepo_1.NoteRepo().save(new_note);
                res.status(200).json({
                    status: "Oks!",
                    message: "You have successfuly created a NOTE: " + noteName + "Congratulations! "
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal Server Error!",
                    message: "Internal server Error!"
                });
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield new NoteRepo_1.NoteRepo().retrieveAll();
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
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = new Note_1.Note();
                new_note.id = id;
                new_note.name = req.body.name;
                new_note.description = req.body.description;
                yield new NoteRepo_1.NoteRepo().update(new_note);
                res.status(200).json({
                    status: "Oks na",
                    message: "Successfuly UPDATED note Id: " + id
                });
            }
            catch (err) {
                res.status(500).json({
                    status: "Internal server error!",
                    message: "Internal Server Error"
                });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                yield new NoteRepo_1.NoteRepo().delete(id);
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
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id = parseInt(req.params["id"]);
                const new_note = yield new NoteRepo_1.NoteRepo().retrieveById(id);
                res.status(200).json({
                    status: "Oks na to",
                    message: "Successfully fetched note by id: " + id,
                    data: new_note
                });
            }
            catch (err) {
                res.status(200).json({
                    status: "Internal Server Error!",
                    message: "Internal Server Error!"
                });
            }
        });
    }
}
