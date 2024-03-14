import BaseRoutes from "./base/BaseRouter";
import NoteController from "../controller/NoteController"
import { updateNoteSchema } from "../schema/NoteSchema";
import validate from "../helper/validate";

class NoteRoutes extends BaseRoutes {
    public routes(): void {
        this.router.post("", NoteController.create);
        this.router.get("", NoteController.findAll);
        this.router.patch(
            "/:id",
            validate(updateNoteSchema), 
            NoteController.update);
        this.router.delete("/:id", NoteController.delete);
        this.router.get("/:id", NoteController.findById);
    }
}

export default new NoteRoutes().router;