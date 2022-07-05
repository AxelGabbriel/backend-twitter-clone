const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post =require('../controllers/post')
//rutas usuario
router.post('/registro',usuario.register)
router.get('/modificar',usuario.modificar)
router.get('/login',usuario.login)
router.get('/borrar',usuario.borrar)

//rutas post
router.get('/crear-post',post.crear)
router.get('/editar-post',post.editar)
router.get('/like',post.like)


module.exports= router