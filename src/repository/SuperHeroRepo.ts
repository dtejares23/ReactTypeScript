import { SuperHero } from "../model/SuperHero";

interface ISuperHeroRepo {
    retrieveAll(): Promise<SuperHero[]>;
}

export class SuperHeroRepo implements ISuperHeroRepo {
    async retrieveAll(): Promise<SuperHero[]> {
        try {
            return await SuperHero.findAll();
        }
        catch {
            throw new Error("Failed to retrieve ALL note!")
        }
    }

    async save(superhero: SuperHero): Promise<void> {
        try {
            await SuperHero.create({
                name: superhero.name,
                real_name: superhero.real_name,
                gender: superhero.gender,
                birthdate: superhero.birth_date,
                first_appearance: superhero.first_appearance
            })
        } catch(err) {
            throw new Error("Super Hero NOT saved");
        }
    }

    async update(superhero: SuperHero): Promise<void> {
        try {
            const new_super_hero = await SuperHero.findOne({
                where: {
                    id: superhero.id,
                },
            });

            if (!new_super_hero) {
                throw new Error("You FAILED to UPDATE note!")
            }

            new_super_hero.name = superhero.name
        }
        catch(error) {

        }
    }
}