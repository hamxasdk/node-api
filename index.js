const express = require('express')
const app = express()
const { getPosts } = require('./routes/post')
app.get('/', getPosts)
const port = 4000
app.listen(port, () => console.log('Api is Running on Port :', port))
