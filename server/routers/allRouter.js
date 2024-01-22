const Router = require('express');
const router = new Router();
const allController = require('../controllers/allController')
const {check} = require('express-validator');

const controller = new allController();

router.get('/', controller.getAll);
router.post('/',
 [
     check('Services', "Services should be not empty").notEmpty(),
     check('Home', "Home should be not empty").notEmpty(),
     check('Objects', "Objects should be not empty").notEmpty(),
 ], controller.create);
 router.put('/',
 [
     check('Title', "Title should be not empty").notEmpty(),
     check('Home', "Home should be not empty").notEmpty(),
     check('Objects', "Objects should be not empty").notEmpty(),
 ], controller.update);
router.delete('/:id', controller.delete);

module.exports = router;