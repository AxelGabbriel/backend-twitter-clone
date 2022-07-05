const crearusuario = require('../database')

//constante vacia para las instancias
const usuario = {}


usuario.register= (req,res)=>{
 crearusuario.crearusuario();
    res.send('resgistro de los usuarios')
    console.log(`${req.body}`);
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