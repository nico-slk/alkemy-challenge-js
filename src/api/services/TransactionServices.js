const { Op } = require('sequelize')
const { Transaction } = require('../db');

const Service = {

    getAllTransactions: async (req, res) => {
        try {
            const tns = await Transaction.findAll()
            res.json(tns)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    getTransaction: async (req, res) => {
        try {
            const tn = Transaction.findOne({ where: { id: req.params.id } })
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    createTransaction: async (req, res) => {
        try {
            const tn = Transaction.create(req.body)
            res.send(tn)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    editTransaction: async (req, res) => {
        try {
            var tn = Transaction.findOne({ where: { id: req.params.id } })
            tn = req.body
            return tn.save()
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    deleteTransaction: async (req, res) => {
        try {
            Transaction.destroy({ where: { id: req.params.id } })
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    },

    getTransactionByUser: async (req, res) => {
        try {
            const tns = Transaction.findAll({ where: { userId: { [Op.eq]: req.params.userId } } })
            res.send(tns)
        } catch (error) {
            res.send({ response: `Error catch: ${error}` })
        }
    }
}

module.exports = Service;