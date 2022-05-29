const express = require("express")
const app = express()
const port = 3000

const { typeError } = require('./middleware/error')

app.use(express.json());

app.use('/users',require('./router/users'));

app.use(typeError)


app.listen(port,()=>console.log('servidor levantado!'))