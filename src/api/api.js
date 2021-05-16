const express = require('express');
const router = express.Router();
const userRoutes = require('./routes/userRoutes')
const transactionRouter = require('./routes/transactionRouter')

router.use('/user', userRoutes)
    .use('/transaction', transactionRouter)

module.exports = router;