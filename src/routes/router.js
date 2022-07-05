const express= require('express')
const router = express.Router()
const usuario = require('../controllers/usuario')
const post =require('../controllers/post')

//rutas usuario
router.post('/registro',usuario.register)
router.put('/modificar/:id',usuario.modificar)
router.get('/login',usuario.login)


//rutas post
router.post('/crear-post',post.crear)
router.put('/editar-post/:id',post.editar)
router.get('/like',post.like)


module.exports= router