const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post =require('../controllers/post')

//rutas usuario
router.post('/registro',usuario.register)
router.put( '/modificar/:id',usuario.modificar)
router.get('/buscar-usuario/:id_usuario',usuario.buscarid)
router.get('/buscar-nombre/:nombre',usuario.buscarnombreusuario)
//ruta para login
router.get('/login',usuario.login)


//rutas post
router.post('/crear-post',post.crear)
router.put('/editar-post/:id',post.editar)
router.get('/buscar-post/:id_post',post.buscarid)
router.get('/buscar-nombrepost/:author', post.buscarauthor)
router.get('/like',post.like)


module.exports= router