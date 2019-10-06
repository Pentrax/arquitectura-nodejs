//const alumno = require('../models/alumno');
const alumnoService = require('./alumnosService');

const index = ( req , res, next ) => {
    res.render('index',{
        title : 'Listado de Alumnos',
        
    })
};


const alumnos = ( req , res ) => {
    
    res.render('alumnos',{
        title : 'Listado de Alumnos Simple',
        alumnos: alumnoService._alumnos
    })
};

const alumnosFull = ( req , res, next ) => {
  
    try {
            res.render('alumnosFull', {
                title: 'Listado completo ',
                alumno: alumnoService._alumnos
    
            })
        
        
    } catch (ex) {
        res.status(404).end();
    }
};


const alumnosNew =( req , res, next ) => {
    res.render('nuevoAlumno',{
		title : 'Agregue un nuevo alumno',
		
    })
};

const buscar =  async (req, res) => {
    
    const docu = req.body.dni;

    try {
        let alu = await alumnoService.getById(docu);
       
            res.render('alumnosBuscado', {
                title: 'Se encontro al alumno con el número de documento ' + docu,
                alumno: alu
    
            })
        
        
    } catch (ex) {
        res.status(404).end();
    }

};

const deleteAlumno = async (req, res) => {
    
    const id = req.params.id;

    try {
        let alu = await alumnoService.deleteById(req.params.id);
            console.log(alu);
        res.render('alumnoEliminado', {
            mensaje: 'Se elimino correcatamente al alumno ' 

        })
    } catch (ex) {

        console.log(ex);
        res.status(404).end();
    }

};

const update = async (req, res) => {
    
    const form = req.body;
   
    try {
        let alumno = await alumnoService.update(form);
        
        res.render('formUpdate', {
            title : 'Se modifico los datos de ' + alumno.nombre ,
            alumno: alumno
            

        })
    } catch (ex) {

        res.status(404).end();
    }

};;

const agregarAlumno = async (req, res) => {
    
    const form = req.body;

    try {
        let alu = await alumnoService.add(form);
        
        res.render('nuevoAlumnoAgregado', {
            title : 'Nuevo Alumno',
            alumnos: alu
            

        })
    } catch (ex) {

        console.log(ex);
        res.status(404).end();
    }

};

const getUpdateAlumno = async (req, res) => {
    
    const documento = req.params.id;


    try {
        let alumno = await alumnoService.getById(documento);
       
            res.render('formUpdate', {
                title: 'Modificar datos del alumno ' + alumno.nombre,
                alumno: alumno
    
            })
        
        
    } catch (ex) {

        console.log(ex);
        res.status(404).end();
    }

};



module.exports = {
    index,
    alumnos,
    alumnosFull,
    deleteAlumno,
    alumnosNew,
	update,
	agregarAlumno,
    buscar,
    getUpdateAlumno
}