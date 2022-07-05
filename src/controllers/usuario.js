const crearusuario = require('../database')
const modificarusuario= require('../database')
//constante vacia para las instancias
const usuario = {}


usuario.register= (req,res)=>{
 try{
 crearusuario.crearusuario(req,res);
    res.send('resgistro de los usuarios')


 }catch(e){

    console.log(e);
 }
   
   
}

usuario.modificar=(req,res)=>{
   try{
   modificarusuario.modificarusuario(req,res);
    res.send('modificar usuario')
}catch(e){
    console.log(e)
}

};
    

usuario.login=(req,res)=>{
    res.send('logear usuario')
}


module.exports= usuario