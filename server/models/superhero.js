const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const superheroSchema = new Schema({
    nickname: {
        type: String,
        require: true,
    },
    real_name: {
        type: String,
        require: true,
    },
    origin_description: {
        type: String,
        require: true,
    },
    superpowers: {
        type: String,
        require: true,
    },
    catch_phrase: {
        type: String,
        require: true,
    },
    images: {
        type: Array,
        require: false,
    },
});

const Superhero = mongoose.model('superhero', superheroSchema, 'superhero');

module.exports = Superhero;
