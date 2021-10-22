const express = require('express')
//Mini aplicacion de express
const router = express.Router()
const ciudadController = require('../controllers/ciudades')

//Servicio para procesar los datos del formulario  CREATE
router.post('/agregarCiudad',ciudadController.postAgregarCiudad)
//Consulta de ciudads READ
router.get('/consultarCiudades',ciudadController.getConsultarCiudades)
//Eliminar ciudad DELETE
router.post('/borrarCiudad',ciudadController.postBorrarCiudad)
//Actualizar ciudad UPDATE
router.post('/actualizarCiudad',ciudadController.postActualizarCiudad)
//Servicio para buscar por Pais
router.get('/consultarPais',ciudadController.getConsultarPais)

module.exports = router