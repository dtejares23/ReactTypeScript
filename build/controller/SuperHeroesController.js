"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SuperHero_1 = require("../model/SuperHero");
const SuperHeroRepo_1 = require("../repository/SuperHeroRepo");
class SuperHeroesController {
    async create(req, res) {
        try {
            const new_super_hero = new SuperHero_1.SuperHero();
            new_super_hero.name = req.body.name;
            new_super_hero.real_name = req.body.real_name;
            new_super_hero.gender = req.body.gender;
            new_super_hero.birth_date = req.body.birth_date;
            new_super_hero.first_appearance = req.body.first_appearance;
            let shName = new_super_hero.name;
            await new SuperHeroRepo_1.SuperHeroRepo().save(new_super_hero);
            res.status(200).json({
                status: "Oks!",
                message: "You have successfuly created a NOTE: " + shName + "Congratulations! "
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
            const new_superhero = await new SuperHeroRepo_1.SuperHeroRepo().retrieveAll();
            res.status(200).json({
                status: "Oks!",
                message: "Successfully fetched ALL Super Heroes!",
                data: new_superhero
            });
        }
        catch (err) {
            res.status(500).json({
                status: "ERROR 500 uwi",
                message: "Internal server Error!"
            });
        }
    }
    async update(req, res) {
        try {
            let id = parseInt(req.params["id"]);
        }
        catch (err) {
        }
    }
}
exports.default = SuperHeroesController;
