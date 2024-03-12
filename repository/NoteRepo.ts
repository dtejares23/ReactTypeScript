import { Note } from "../src/model/Note";

interface INoteRepo {
    save(note: Note): Promise<void>;
    update(note: Note): Promise<void>;
    delete(note: number): Promise<void>;
    retrieveById(noteId: number): Promise<Note>;
    retrieveAll(): Promise<Note[]>;
}

export class NoteRepo implements INoteRepo {
    async save(note: Note): Promise<void> {
        try {
            await Note.create({
                name: note.name,
                description: note.description
            })
        }
        catch(err) {
            throw new Error("Method not implemented");
        }
    }
    async update(note: Note): Promise<void> {
        try {
            const new_note = await Note.findOne({
                where: {
                    id: note.id,
                },
            });
            if(!new_note) {
                throw new Error("You FAILED to create note!")
            }
        }
        catch(err) {
            throw new Error("Method not implemented");
        }
    }
    delete(note: number): Promise<void> {
        try {

        }
        catch {

        }
    }
    retrieveById(noteId: number): Promise<Note> {
        try {

        }
        catch {

        }
    }
    retrieveAll(): Promise<Note[]> {
        try {

        }
        catch {

        }
    }
}