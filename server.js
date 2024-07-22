const express = require('express')
const { readdirSync } = require('fs')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.json({ limit: '10mb' }))
connectDB()
const port = 5000;

readdirSync('./routes').map((e) => app.use('/api', require('./routes/' + e)))



 


app.listen(port, () => console.log(`Server is running at port ${port}`))