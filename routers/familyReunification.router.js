const { Router } = require('express');
const { familyReunificationController } = require('../controllers/familyReunification.controller');

const familyReunificationRouter = new Router();

familyReunificationRouter.get('/',familyReunificationController.getAllReunificationCase);
familyReunificationRouter.get('/:id',familyReunificationController.getReunificationCase);
familyReunificationRouter.post('/',familyReunificationController.createReunificationCase);
familyReunificationRouter.put('/:id',familyReunificationController.updateReunificationCase);
familyReunificationRouter.delete('/:id',familyReunificationController.deleteReunificationCase);

module.exports = { familyReunificationRouter };