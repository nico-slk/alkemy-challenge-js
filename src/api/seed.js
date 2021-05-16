const user = [
    {
        "email": "samid@gmail.com",
        "name": "Sergio Martin",
        "lastname": "Selicki",
        "password": "12345678",
    },
    {
        "email": "viale@hotmail.com",
        "name": "Alejandra Florencia",
        "lastname": "Selicki",
        "password": "aleflor",
    },
    {
        "email": "marado@gmail.com",
        "name": "Hector Martin",
        "lastname": "Selicki",
        "password": "hecmartin",
    }
]

const transactions = [
    {
        "reason": "Jamon",
        "amount": 15,
        "type": "recibe"
    },
    {
        "reason": "Queso",
        "amount": 16,
        "type": "send"
    },
    {
        "reason": "Pan",
        "amount": 17,
        "type": "recibe"
    }
]

module.exports = {
    user,
    transactions
}