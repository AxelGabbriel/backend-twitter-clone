const express = require ('express')
const {route}= require('./routes/router')
const passport = require('passport')
const cookieParser= require("cookie-parser")
const PassportLocal=require('passport-local').strategy;
const app = express()

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser('mi ultra secreto'));
app.use(session({
    secret: 'mi ultra secreto',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());

//router
app.use(require('./routes/router'));

app.listen(5000, ()=>{

    console.log('servidor activo en puerto 5000')
})

passport.use(new PassportLocal(function(username,password,done){
   
    if(username==="axel"&& password==="12345")
    return done(null,{id:1,name:"cody"})

    done(null,false)
}));

//serializacion del usuario
passport.serializedUser(function(user,done){
    done(null,user.id);
})

//deserializacion
passport.deserializeUser(function(id,done){
    done(null,{id: 1, name:"cody"});
})

app.post("/login",passport.authenticate('local',{
    successRedirect:"/",
    failureRedirect: "login"
}))
