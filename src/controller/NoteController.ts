import { Request, Response } from "express"
import { Note } from "../model/Note";
import { NoteRepo } from "../repository/NoteRepo";

class NoteController {
    async create(req: Request, res: Response) {
        try {
            const new_note = new Note();
            new_note.name = req.body.name;
            new_note.description = req.body.description;

            let noteName = new_note.name
            await new NoteRepo().save(new_note)
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
    }
    async read(req: Request, res: Response) {
        try {
            const new_note = await new NoteRepo().retrieveAll()
            res.status(200).json({
                status: "Oks!",
                message: "Successfully fetched ALL note!",
                data: new_note
            })
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal server Error!"
            });
        }
    }
    async update(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"])
            const new_note = new Note();

            new_note.id = id;
            new_note.name = req.body.name;
            new_note.description = req.body.description;

            await new NoteRepo().update(new_note)

            res.status(200).json({
                status: "Oks na",
                message: "Successfuly UPDATED note Id: " + id
            })
        }
        catch (err) {
            res.status(500).json({
                status: "Internal server error!",
                message: "Internal Server Error"
            })
        }
    }
    async delete(req: Request, res: Response) {
        try {

            let id = parseInt(req.params["id"]);
            await new NoteRepo().delete(id)

            res.status(200).json({
                status: "Ok!",
                message: "Successfully delete note!"
            })
        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal server Error!"
            });
        }
    }
    async findById(req: Request, res: Response) {
        try {
            let id = parseInt(req.params["id"])
            const new_note = await new NoteRepo().retrieveById(id)
            if (new_note != null) {
                res.status(200).json({
                    status: "Oks na to",
                    message: "Successfully fetched note by id: " + id,
                    data: new_note
                })
            } else {
                throw new Error("No Data Found")
            }

        }
        catch (err) {
            res.status(500).json({
                status: "Internal Server Error!",
                message: "Internal Server Error!"
            })
        }
    }
}

export default new NoteController();