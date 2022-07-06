const crearusuario = require('../database')
const modificarusuario= require('../database')
const buscaridusuario=require('../database')
const buscarnombreusuario= require('../database')
//constante vacia para las instancias
const usuario = {}


usuario.register= (req,res)=>{
 try{
 crearusuario.crearusuario(req,res);
 res.json(response)


 }catch(e){

    console.log(e);
 }
   
   
}

usuario.modificar=(req,res)=>{
   try{
   modificarusuario.modificarusuario(req,res);
   res.json(response)
}catch(e){
    console.log(e)
}

};
    
usuario.buscarid=(req,res)=>{
 try{
    buscaridusuario.buscaridusuario(req,res);
    res.json(response)


 }catch(e){
    console.log(e)


 }

}


usuario.buscarnombreusuario=(req,res)=>{
    try{
       
        buscarnombreusuario.buscarnombreusuario(req, res)
        res.json(response)
    }catch(e){
        console.log(e)
    }

    
}







//funcion para el login 
usuario.login=(req,res)=>{
    res.send('logear usuario')
}


module.exports= usuario