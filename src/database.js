const {Pool}= require('pg');

const config={
user:'postgres',
host:'localhost',
password:'axel',
database:'fenix'};

const pool = new Pool(config);

//funcion de crear usuario para registro
const crearusuario= async(req,res)=>{
const { username,bio,correo,birthday,nombre,direccion,clave } = req.body;
const response = await pool.query('INSERT INTO usuario( username,bio,correo,birthday,nombre,direccion,clave) VALUES($1,$2,$3,$4,$5,$6,$7)', [
    username,bio,correo,birthday,nombre,direccion,clave])
console.log(response);
}

//funcion para actualizar usuario
const modificarusuario=async(req,res)=>{
    
    const {username,bio,correo,birthday,nombre,direccion,clave,id_usuario}= req.body
    const response= await pool.query('UPDATE usuario SET username= $1 ,bio=$2, correo=$3 ,birthday=$4,nombre=$5,direccion=$6,clave=$7 WHERE id_usuario=$8',[
        username,bio,correo,birthday,nombre,direccion,clave,id_usuario
    ])

    console.log(response)
}

//funcion crearpost
const crearpost=async (req,res)=>{
const {titulo,author,fecha,contenido} = req.body
const response = await pool.query('INSERT INTO post(titulo,author,fecha,contenido) VALUES($1,$2,$3,$4)',[
    titulo,author,fecha,contenido])

    console.log(response);
}

//funcion editar post
const editarpost=async(req,res)=>{
    
    const {id_post,titulo,author,fecha,contenido}= req.body
    const response= await pool.query('UPDATE usuario SET titulo= $1,author=$2,fecha=$3,contenido=$4 WHERE id_post =$5',[
        titulo,author,fecha,contenido,id_post
    ])

    console.log(response)
}

 
module.exports={

    modificarusuario,
    crearusuario,
    crearpost,
    editarpost
}
