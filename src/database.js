const {Pool}= require('pg');

const config={
user:'postgres',
host:'localhost',
password:'axel',
database:'fenix'};

const pool = new Pool(config);

const crearusuario= async(req,res)=>{
const { username,bio,correo,birthday,nombre,direccion,clave } = req.body;
const response = await pool.query('INSERT INTO usuario( username,bio,correo,birthday,nombre,direccion,clave) VALUES($1,$2,$3,$4,$5,$6,$7)', [username,bio,correo,birthday,nombre,direccion,clave])
console.log(response);
console.log(req);
res.send('usuario creado');


}


//insertarUsuarios();
 
module.exports={

    crearusuario
}
