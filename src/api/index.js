const express = require('express');
const cors = require('cors')
const app = express();
const api = require('./api')

app.set('port', process.env.port || 3001)

app.use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())

app.use('/', api);

app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'))
})