const Router = require('express');
const superheroRouter = require('./superheroRouter');

const router = new Router();

router.use('/superhero', superheroRouter);

module.exports = router;
