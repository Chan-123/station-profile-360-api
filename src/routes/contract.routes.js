const express = require('express');
const router = express.Router();
const controller = require('../controllers/contract.controller');

router.get('/', controller.getContracts);
router.post('/', controller.createContract);
router.delete('/:id', controller.deleteContract);

module.exports = router;