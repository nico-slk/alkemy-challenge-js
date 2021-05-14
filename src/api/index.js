const express = require('express');
const cors = require('cors')
const app = express();
const { User } = require('./db')
const { check, validationResult } = require('express-validator');

app.use(cors())

app.set('port', process.env.port || 3001)

app.get('/', (req, res) => {
    res.send('Connected.')
})
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.post('/', [
    check('name', 'Cannot be empty').not().isEmpty(),
    check('password', 'Most tu write the password.').not().isEmpty(),
    check('email', 'Most to add a email valid.').not().isEmail()
], async (req, res) => {
    try {
        console.log(req.body)
        const err = validationResult(req);
        if (err.isEmpty()) {
            return res.status(444).json({ errors: err.array() })
        }
        // req.body.password = await bcryptjs.hashSync(req.body.password, 10);
        console.log(req.body)
        const createUser = await User.create(req.body);
        res.send(createUser);
    } catch (error) {
        res.send({ response: `Error catch: ${error}` })
    }
})

app.post('/try', (req, res) => {
    console.log(req)
})

app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'))
})