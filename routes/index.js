const express = require('express' );
const router = express.Router();
//const router = require('express-promise-router')();
const bodyP = require('body-parser');
//La logica de como van a resolver las urls va en controllers
const routeController = require('../controllers/index');
const alumnosService = require('../controllers/alumnosService');


// Defino las rutas
// La logica de como van a funcionar las rutas va ir dentro de la 
// carpeta controllers

// Endpoints

router.get('/',routeController.index );
router.get('/alumnos/list', routeController.alumnos);
router.get('/alumnos/full', routeController.alumnosFull);
router.get('/alumno/new',routeController.alumnosNew);


router.post('/alumno/buscar', routeController.buscar);
router.post('alumno/new', routeController.agregarAlumno);
router.get('/delete/:id', routeController.deleteAlumno);
router.get('/update/:id', routeController.getUpdateAlumno);
router.post('/alumno/update',routeController.update);



module.exports = router;