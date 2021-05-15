const express = require('express');
const router = express.Router();
const userRouter = require('./routes/userRoutes')
const transactionRouter = require('./routes/transactionRouter')

router.use('/user', userRouter)
    .use('/transaction', transactionRouter)

module.exports = router;