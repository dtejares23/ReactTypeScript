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
exports.NoteRepo = void 0;
const Note_1 = require("../src/model/Note");
class NoteRepo {
    save(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Note_1.Note.create({
                    name: note.name,
                    description: note.description
                });
            }
            catch (err) {
                throw new Error("Method not implemented");
            }
        });
    }
    update(note) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const new_note = yield Note_1.Note.findOne({
                    where: {
                        id: note.id,
                    },
                });
                if (!new_note) {
                    throw new Error("You FAILED to create note!");
                }
            }
            catch (err) {
                throw new Error("Method not implemented");
            }
        });
    }
    delete(note) {
        try {
        }
        catch (_a) {
        }
    }
    retrieveById(noteId) {
        try {
        }
        catch (_a) {
        }
    }
    retrieveAll() {
        try {
        }
        catch (_a) {
        }
    }
}
exports.NoteRepo = NoteRepo;
