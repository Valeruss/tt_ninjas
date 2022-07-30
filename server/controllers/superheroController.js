const Superhero = require('../models/superhero');

class SuperheroController {
    getAll = async (request, response) => {
        try {
            const { limit = 5, page = 0 } = request.query;
            const offset = limit * page;
            const superheroes = await Superhero.find().limit(limit).skip(offset);
            return response.status(200).json(superheroes);
        } catch (error) {
            return response.json(error.message);
        }
    };

    create = async (request, response) => {
        try {
            const superhero = await Superhero.create(request.body);
            return response.status(201).json(superhero);
        } catch (error) {
            return response.json(error.message);
        }
    };

    update = async (request, response) => {
        try {
            const { _id, upsertData } = request.body;
            const superhero = await Superhero.updateOne({ _id }, upsertData);

            if (superhero.matchedCount === 0) throw new Error('Not Found');
            return response.status(200).json(superhero);
        } catch (error) {
            console.log(error)
            return response.status(404).json(error.message);
        }
    };

    delete = async (request, response) => {
        try {
            const { _id } = request.query;
            const superhero = await Superhero.deleteOne({ _id });

            if (superhero.deletedCount === 0) throw new Error('Not Found');
            return response.status(200).json(superhero)
        } catch (error) {
            console.log(error)
            return response.status(404).json(error.message);
        }
    }
}

module.exports = new SuperheroController();
