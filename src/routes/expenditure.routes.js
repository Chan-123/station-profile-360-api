const express = require('express');
const router = express.Router();
const controller = require('../controllers/expenditure.controller');

router.post('/', controller.createExpenditure);
router.get('/', controller.getExpenditures);
router.get('/:id', controller.getExpenditureById);
router.put('/:id', controller.updateExpenditure);
router.delete('/:id', controller.deleteExpenditure);

module.exports = router;