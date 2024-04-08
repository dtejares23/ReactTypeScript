"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperHeroRepo = void 0;
const SuperHero_1 = require("../model/SuperHero");
class SuperHeroRepo {
    async retrieveAll() {
        try {
            return await SuperHero_1.SuperHero.findAll();
        }
        catch {
            throw new Error("Failed to retrieve ALL note!");
        }
    }
    async save(superhero) {
        try {
            await SuperHero_1.SuperHero.create({
                name: superhero.name,
                real_name: superhero.real_name,
                gender: superhero.gender,
                birthdate: superhero.birth_date,
                first_appearance: superhero.first_appearance
            });
        }
        catch (err) {
            throw new Error("Super Hero NOT saved");
        }
    }
    async update(superhero) {
        try {
            const new_super_hero = await SuperHero_1.SuperHero.findOne({
                where: {
                    id: superhero.id,
                },
            });
            if (!new_super_hero) {
                throw new Error("You FAILED to UPDATE note!");
            }
            new_super_hero.name = superhero.name;
        }
        catch (error) {
        }
    }
}
exports.SuperHeroRepo = SuperHeroRepo;
