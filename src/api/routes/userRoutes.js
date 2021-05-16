const express = require('express');
const app = express();
const { check } = require('express-validator');
const { createUser, getAllUsers, getUser, deleteUser, editUser } = require('../services/UserServices')

app.post('/', [
    check('name', 'Cannot be empty').not().isEmpty(),
    check('password', 'Most tu write the password.').not().isEmpty(),
    check('email', 'Most to add a email valid.').not().isEmail()
], createUser)
    .get('/all', getAllUsers)
    .post('/login', getUser)
    .delete('/:id', deleteUser)
    .put('/:id', editUser)

module.exports = app;