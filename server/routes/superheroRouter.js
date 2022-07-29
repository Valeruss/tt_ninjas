const Router = require('express');
const superheroController = require('../controllers/superheroController');

const router = new Router();

router.get('/', superheroController.getAll);
router.post('/', superheroController.create);
router.put('/', superheroController.update);
router.delete('/', superheroController.delete)

module.exports = router;
