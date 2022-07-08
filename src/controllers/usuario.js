const crearusuario = require('../database')
const modificarusuario= require('../database')
const buscaridusuario=require('../database')
const buscarnombreusuario= require('../database')
const passport=require('passport')
//constante vacia para las instancias
const usuario = {}


usuario.register= (req,res)=>{
 try{
 crearusuario.crearusuario(req,res);



 }catch(e){

    console.log(e);
 }
   
   
}

usuario.modificar=(req,res)=>{
   try{
   modificarusuario.modificarusuario(req,res);

}catch(e){
    console.log(e)
}

};
    
usuario.buscarid=(req,res)=>{
 try{
    buscaridusuario.buscaridusuario(req,res);



 }catch(e){
    console.log(e)


 }

}


usuario.buscarnombreusuario=(req,res)=>{
    try{
       
        buscarnombreusuario.buscarnombreusuario(req, res)
        
    }catch(e){
        console.log(e)
    }

    
}





 //usuario.autenticar=(req,res)=>{
 




//funcion para el login 
usuario.login=(req,res)=>{
    res.send('logear usuario')
}


module.exports= usuario