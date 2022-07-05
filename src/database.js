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

 
module.exports={

    modificarusuario,
    crearusuario
}
