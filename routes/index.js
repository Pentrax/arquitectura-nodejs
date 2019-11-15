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

// Muestra el index de la app
router.get('/',routeController.index );

// Muestra un lista limitada de alumnos 
router.get('/alumnos/list', routeController.alumnos);

//Muestra la lista completa de alumnos
router.get('/alumnos/full', routeController.listaCompletaDeAlumnos);

// Carga el formulrio para crear un nuevo alumno
router.get('/alumno/new',routeController.alumnosNew);

// Busca un alumno por nro de documento
router.get('/buscar', routeController.buscar);

//Guarda un nnuevo alumno en el array
router.post('/alumno/guardar', routeController.agregarAlumno);

// Borra un alumno por id
router.delete('/alumno/delete/:id', routeController.deleteAlumno);

// Borra un alumno por id en el form
router.get('/alumno/delete/:id', routeController.deleteAlumno);

// Trae los datos del un alumno para cargarlos en el formulario
router.get('/alumno/update/:id', routeController.getUpdateAlumno);

// Actualiza los datos del alumno cargados en el formulario
router.post('/alumno/update',routeController.update);



module.exports = router;