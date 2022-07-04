const {Pool}= require('pg');

const config={
user:'postgres',
host:'localhost',
password:'axel',
database:'fenix'
};

export const pool = new Pool(config);

const getUsuarios= async () =>{

try {

    const res=await pool.query('select * from usuarios');
console.log(res.rows);
} catch (e) {
    console.log(e);
}

};


getUsuarios();