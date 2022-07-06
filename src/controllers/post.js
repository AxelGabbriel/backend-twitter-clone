const crearpost= require('../database')
const editarpost=require('../database')
const buscaridpost=require('../database')
const buscarauthorpost=require('../database')
const post={}

post.crear=(req,res)=>{
   try{

    crearpost.crearpost(req,res);
    res.send('crear un  post ')


   }catch(e){
    console.log(e)
   }
   
   
    
}

post.editar=(req,res)=>{

    try{
       editarpost.editarpost(req,res);
     res.send('editar un  post ')

    }catch(e){
        console.log(e)
    }
    
}

post.like=(req,res)=>{

    res.send('dar like')
}

post.buscarid=(req,res)=>{
    try{
        buscaridpost.buscaridpost(req,res);
        res.send('direccion para buscar post')
    }catch(e){
        console.log(e)
    }
    
}

post.buscarauthor=(req,res)=>{
    try{
        buscarauthorpost.buscarauthorpost(req,res)
        res.send('direccion para buscar post por nombre de author')
    }catch(e){
        console.log(e)
     }
    
}

module.exports= post
