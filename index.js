const express = require("express")
const app = express()
const port = 3000

app.use(express.json());

app.use('/users',require('./router/users'));


app.listen(port,()=>console.log('servidor levantado!'))