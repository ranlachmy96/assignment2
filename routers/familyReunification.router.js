const { Router } = require('express');
const {
  getAllReunificationCase, getReunificationCase,
  createReunificationCase,
  updateReunificationCase,
  deleteReunificationCase,
} = require('../controllers/familyReunification.controller');

const familyReunificationRouter = new Router();

familyReunificationRouter.get('/', getAllReunificationCase);
familyReunificationRouter.get('/:id', getReunificationCase);
familyReunificationRouter.post('/', createReunificationCase);
familyReunificationRouter.put('/:id', updateReunificationCase);
familyReunificationRouter.delete('/:id', deleteReunificationCase);

module.exports = { familyReunificationRouter };
