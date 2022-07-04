const post={}

post.crear=(req,res)=>{

    res.send('crear un  post ')
}

post.editar=(req,res)=>{

    res.send('editar un  post ')
}

post.like=(req,res)=>{

    res.send('dar like')
}


module.exports= post
