"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const NoteController_1 = __importDefault(require("../controller/NoteController"));
const NoteSchema_1 = require("../schema/NoteSchema");
const validate_1 = __importDefault(require("../helper/validate"));
class NoteRoutes extends BaseRouter_1.default {
    routes() {
        this.router.post("", NoteController_1.default.create);
        this.router.get("", NoteController_1.default.read);
        this.router.patch("/:id", (0, validate_1.default)(NoteSchema_1.updateNoteSchema), NoteController_1.default.update);
        this.router.delete("/:id", NoteController_1.default.delete);
        this.router.get("/:id", NoteController_1.default.findById);
    }
}
exports.default = new NoteRoutes().router;
