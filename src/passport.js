const passport= require('passport')
const localstrategy= require('passport-local').Strategy

passport.use('local.inicio',new localstrategy({
    usernameField:'username',
    passwordField:'clave',
    passReqToCallback:true
}, async (req,username,password,done)=>{
    console.log(req.body)
}));
 
//passport.serializeUser((usr,done)=>{})






