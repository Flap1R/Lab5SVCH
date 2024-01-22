const Router = require('express');
const router = new Router();
const allController = require('../controllers/allController')
const {check} = require('express-validator');
const authMiddleware = require('../middlewares/authMiddleware')

const controller = new allController();

router.get('/', authMiddleware, controller.getAll);
router.post('/', authMiddleware,
 [
     check('Services', "Services should be not empty").notEmpty(),
     check('Home', "Home should be not empty").notEmpty(),
     check('Objects', "Objects should be not empty").notEmpty(),
 ], controller.create);
 router.put('/', authMiddleware,
 [
     check('Title', "Title should be not empty").notEmpty(),
     check('Home', "Home should be not empty").notEmpty(),
     check('Objects', "Objects should be not empty").notEmpty(),
 ], controller.update);
router.delete('/:id', controller.delete);

module.exports = router;