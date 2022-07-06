const crearusuario = require('../database')
const modificarusuario= require('../database')
const buscaridusuario=require('../database')
const buscarnombreusuario= require('../database')
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
    
usuario.buscarid=(req,res)=>{
 try{
    buscaridusuario.buscaridusuario(req,res);
    res.send('buscar por id')


 }catch(e){
    console.log(e)


 }

}


usuario.buscarnombreusuario=(req,res)=>{
    try{
       
        buscarnombreusuario.buscarnombreusuario(req, res)
         res.send('aqui se busca el usuario por nombre')
    }catch(e){
        console.log(e)
    }

    
}







//funcion para el login 
usuario.login=(req,res)=>{
    res.send('logear usuario')
}


module.exports= usuario