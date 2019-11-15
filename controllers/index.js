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

const listaCompletaDeAlumnos = ( req , res, next ) => {
  
    try {
            res.render('listaCompletaDeAlumnos', {
                title: 'Listado completo ',
                mensaje: '',
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
        console.log(docu);
    if(docu ==''){
        let alu = await alumnoService.getAll();
        res.render('listaCompletaDeAlumnos', {
            title: 'Se encontro al alumno con el número de documento ' + docu,
            alumno: alu

        });

    }else{
        try {
            let alu = await alumnoService.getById(docu);
            
                res.render('alumnosBuscado', {
                    title: 'Se encontro al alumno con el número de documento ' + docu,
                    alumno: alu
        
                });
            
            
        } catch (ex) {
            
            if (req.accepts('html')) {
                res.render('404', { url: req.url });
                return;
            }
        }
    }

    

};

const deleteAlumno = async (req, res) => {
    
    const id = req.params.id;
    
    try {
        let alumno_a_eliminar = await alumnoService.getById(id);
        let alu = await alumnoService.deleteById(req.params.id);
        let alumnos = await alumnoService.getAll();

        res.render('listaCompletaDeAlumnos', {
            title: 'Listado completo ',
            mensaje: 'Se elimino correcatamente al alumno ' + alumno_a_eliminar.nombre + ' '+alumno_a_eliminar.apellido,
            alumno: alumnos
            

        })
    } catch (ex) {

        if (req.accepts('html')) {
            res.render('404', { url: req.url });
            return;
        }
    }

};

const update = async (req, res) => {
    
    const form = req.body;
   
    try {
        let alumno = await alumnoService.update(form);
        
        res.render('formUpdate', {
            title : '',
            mensaje: 'Se modifico los datos de ' + alumno.nombre + ' ' + alumno.apellido,
            alumno: alumno
            

        })
    } catch (ex) {

        if (req.accepts('html')) {
            res.render('404', { url: req.url });
            return;
        }
    }

};;

const agregarAlumno = async (req, res) => {
    
    const form = req.body;
        
    if(form.nombre != '' && form.apellido != '' && form.documento != ''){
        try {
            let alu = await alumnoService.add(form);
            let alumnos = await alumnoService.getAll();
            res.render('listaCompletaDeAlumnos', {
                title : 'Nuevo Alumno',
                mensaje: 'Se agrego al nuevo alumno ' + alu.nombre + ' '+ alu.apellido,
                alumno: alumnos
                
    
            })
        } catch (ex) {
    
            if (req.accepts('html')) {
                res.render('404', { url: req.url });
                return;
            }
        }
    }else{
        res.render('nuevoAlumno',{
            title : 'Agregue un nuevo alumno',
            
        })
    }
    

};

const getUpdateAlumno = async (req, res) => {
    
    const documento = req.params.id;


    try {
        let alumno = await alumnoService.getById(documento);
       
            res.render('formUpdate', {
                title: 'Modificar datos del alumno ' + alumno.nombre,
                mensaje: '',
                alumno: alumno
    
            })
        
        
    } catch (ex) {

        if (req.accepts('html')) {
            res.render('404', { url: req.url });
            return;
        }
    }

};



module.exports = {
    index,
    alumnos,
    listaCompletaDeAlumnos,
    deleteAlumno,
    alumnosNew,
	update,
	agregarAlumno,
    buscar,
    getUpdateAlumno
}