const express = require('express')
const app = express()
const morgan = require('morgan')
const postRoutes = require('./routes/post')

// const myOwnMiddleWare = (req, res, next) => {
//   console.log('MiddleWare Applied !!')
//   next()
// }
//middleware
app.use(morgan('dev'))
// app.use(myOwnMiddleWare)

app.use('/', postRoutes)
const port = 4000
app.listen(port, () => console.log('Api is Running on Port :', port))
