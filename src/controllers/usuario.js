const usuario = {}

usuario.index = (req,res)=>{
    res.send('la conexion ha sido correcta')

}

usuario.register= (req,res)=>{


    res.send('resgistro de los usuarios')
}

usuario.modificar=(req,res)=>{
    res.send('modificar usuario')
}

usuario.login=(req,res)=>{
    res.send('logear usuario')
}

usuario.borrar=(req,res)=>{
    res.send('borrar usuario')
}



module.exports= usuario