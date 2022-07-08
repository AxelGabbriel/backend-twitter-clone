const login= {}
const passport=require('passport')


 login.autenticar=(req,res)=>{
  passport.authenticate('local.inicio'), {

    successRedirect: '/perfil',
  failureRedirect:'/login',
  failureFlash:true
  }
  res.send('recibido')
   
}