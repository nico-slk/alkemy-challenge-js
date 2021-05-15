const express = require('express');
const app = express();
const { getAllTransactions, getTransaction, createTransaction, editTransaction, deleteTransaction, getTransactionByUser } = require('../services/TransactionServices')

app.post('/', createTransaction)
    .get('/all', getAllTransactions)
    .get('/:id', getTransaction)
    .get('/t/:userId', getTransactionByUser)
    .put('/:id', editTransaction)
    .delete('/:id', deleteTransaction)

module.exports = app;