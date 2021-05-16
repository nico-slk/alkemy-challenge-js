const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator');
const { Op } = require('sequelize');
const { User, Transaction } = require('../db')

const Service = {

    getUser: async (req, res) => {
        // req.body.password = await bcryptjs.hashSync(req.body.password, 10);
        try {
            const user = await User.findOne({
                where: {
                    email: req.body.email
                },
                include: {
                    model: Transaction
                }
            })
            console.log(user.password + ' user.password')
            console.log('SADASDASD')
            console.log(req.body.password + ' req.body.password')
            user.password !== req.body.password
                ? console.error(`Error: password don't match`)
                : res.json(user)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    createUser: async (req, res) => {
        try {
            const err = validationResult(req);
            if (err.isEmpty()) {
                return res.status(444).json({ errors: err.array() })
            }
            req.body.password = await bcryptjs.hashSync(req.body.password, 10);
            const createUser = await User.create(req.body);
            res.send(createUser);
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll({ attributes: { exclude: ['password'] } })
            res.json(users)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    deleteUser: async (req, res) => {
        try {
            await User.destroy({ where: { id: req.params.id } })
            res.send(`User deleted succesfully. God bye!`)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    editUser: async (req, res) => {
        try {
            var user = await User.findByPk(req.params.id)
            user = req.body;
            return user.save();
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    }
}
module.exports = Service;