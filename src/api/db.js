const Sequelize = require('sequelize');
const userModel = require('./model/userModel');
const transactionModel = require('./model/transactionModel')

const sequelize = new Sequelize(`alkemyjs`, 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

const User = userModel(sequelize);
const Transaction = transactionModel(sequelize)

// User.hasOne(Status); // Usuario tiene un solo estado
// Status.belongsTo(User); // El estado tiene un solo dueño

User.hasMany(Transaction); // Usuario tiene muchas operaciones
Transaction.belongsTo(User); // Muchas operaciones pertenecen a un solo usuario


sequelize.sync({ force: false })
    .then(() => {
        console.log('Tablas sincronizadas')
    })

module.exports = {
    User,
    Transaction,
    conn: sequelize
}