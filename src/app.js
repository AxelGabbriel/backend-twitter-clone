const express = require ('express')
const {route}= require('./routes/router')

const app = express()

app.use(require('./routes/router'))

app.listen(5000, ()=>{

    console.log('servidor activo en puerto 5000')
})