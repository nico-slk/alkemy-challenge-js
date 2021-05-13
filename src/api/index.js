const express = require('express');
const app = express();
require('./db');

app.set('port', process.env.port || 3001)

app.get('/', (req, res) => {
    res.send('Connected.')
})

app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'))
})