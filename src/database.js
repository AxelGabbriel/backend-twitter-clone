const {Pool}= require('pg');

const config={
user:'postgres',
host:'localhost',
password:'axel',
database:'fenix'
};

 const pool = new Pool(config);



const insertarUsuarios= async () =>{


  const text = 'INSERT INTO usuario(id_usuario, username,bio,correo,birthday,nombre,direccion,clave) VALUES($1, $2,$3,$4,$5,$6,$7,$8) RETURNING *'
  const values = ['1', 'albertico','hola me llamo alberto','alberto@gmail.com',25,'alberto','santa lucia','12345']

    const res = await pool.query(text,values);
    console.log(res);
    pool.end

};


insertarUsuarios();