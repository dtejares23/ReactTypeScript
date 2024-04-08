import BaseRoutes from "./base/BaseRouter";
import SuperHeroesController  from "../controller/SuperHeroesController"
import validate from "../helper/validate";
import express, { Request, Response } from 'express';

const router = express.Router();
const superHeroController = new SuperHeroesController();

class SuperHeroRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("", superHeroController.read);
    }
}

export default new SuperHeroRoutes().router;