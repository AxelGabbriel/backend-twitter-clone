const crearpost= require('../database')
const editarpost=require('../database')


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


module.exports= post
