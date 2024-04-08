"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = __importDefault(require("./base/BaseRouter"));
const SuperHeroesController_1 = __importDefault(require("../controller/SuperHeroesController"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const superHeroController = new SuperHeroesController_1.default();
class SuperHeroRoutes extends BaseRouter_1.default {
    routes() {
        this.router.get("", superHeroController.read);
    }
}
exports.default = new SuperHeroRoutes().router;
