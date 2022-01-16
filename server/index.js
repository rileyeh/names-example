const express = require('express')
const cors = require('cors')
const app = express()

const ctrl = require('./controller')

app.use(express.json())
app.use(cors())

app.get('/api/names', ctrl.getNames)
app.post('/api/names', ctrl.addName)

app.listen(4000, () => console.log('running on 4000'))