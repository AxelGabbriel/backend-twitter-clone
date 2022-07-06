const crearpost= require('../database')
const editarpost=require('../database')
const buscaridpost=require('../database')
const buscarauthorpost=require('../database')
const post={}

post.crear=(req,res)=>{
   try{

    crearpost.crearpost(req,res);
    res.json(response)


   }catch(e){
    console.log(e)
   }
   
   
    
}

post.editar=(req,res)=>{

    try{
       editarpost.editarpost(req,res);
       res.json(response)

    }catch(e){
        console.log(e)
    }
    
}



post.buscarid=(req,res)=>{
    try{
        buscaridpost.buscaridpost(req,res);
        res.json(response)
    }catch(e){
        console.log(e)
    }
    
}

post.buscarauthor=(req,res)=>{
    try{
        buscarauthorpost.buscarauthorpost(req,res)
        res.json(response)
    }catch(e){
        console.log(e)
     }
    
}

module.exports= post
