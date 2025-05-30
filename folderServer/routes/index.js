const express = require('express');
const router = express.Router();
const userRouter = require('./userRouter');
const workoutListRouter = require('./workoutListRouter');
const equipmentRouter = require('./equipmentRouter');
const bodyPartRouter = require('./bodyPartRouter');
const authentication = require('../middlewares/authentication');

router.use('/users', userRouter); // Rute untuk user (register, login)

// Semua rute di bawah ini memerlukan otentikasi
router.use(authentication);
router.use('/workoutLists', workoutListRouter);
router.use('/equipments', equipmentRouter);
router.use('/bodyParts', bodyPartRouter);

module.exports = router;