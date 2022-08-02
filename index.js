const express = require("express")
const app = express()
const PORT = 8000

const { typeError } = require('./middleware/error')

app.use(express.json());

app.use('/users',require('./router/users'));

app.use(typeError)


app.listen(PORT,()=>console.log(`servidor levantado en el puerto ${PORT}!`))