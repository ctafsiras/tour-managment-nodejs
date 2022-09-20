const { postTourController, getToursController, getTourByIdController, patchTourByIdController, getTrendingTourController, getCheapestTourController } = require('../controllers/tour.controller');

const tourRouter = require('express').Router();
tourRouter
    .post('/tours', postTourController)
    .get('/tours', getToursController)
    .get('/tours/:id', getTourByIdController)
    .patch('/tour/:id', patchTourByIdController)
    .get('/tour/trending', getTrendingTourController)
    .get('/tour/cheapest', getCheapestTourController)
module.exports = tourRouter;