const express= require('express')
const router = express.Router()
const controller = require('../controllers/controll')


router.get('/',controller.index)


module.exports= router