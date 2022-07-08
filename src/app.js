const express = require ('express')
const {route}= require('./routes/router')
const passport = require('passport')
const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(passport.initialize())
app.use(passport.session)
//router
app.use(require('./routes/router'));

app.listen(5000, ()=>{

    console.log('servidor activo en puerto 5000')
})