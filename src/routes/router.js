const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post =require('../controllers/post')
const like = require('../controllers/like')

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

//rutas para los likes
router.get('/like-usuario/:id_usuario',like.usuario)
router.get('/like-post/:id_post',like.post)
router.post('/crearlike-post',like.crearlikepost)
router.post('/crearlike-usuario',like.crearlikeusuario)
module.exports = router