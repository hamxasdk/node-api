const express = require('express')
const app = express()
const morgan = require('morgan')
const postRoutes = require('./routes/post')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
dotenv.config()
// connection with db
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('DB is connected')
})
mongoose.connection.on('error', (err) => {
  console.log('Db is not Connected', err.message)
})
//middleware
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use('/', postRoutes)
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log('Api is Running on Port :', PORT))
