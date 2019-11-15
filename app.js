
const express = require('express' );
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
//const morgan = require('morgan');
//const mongoose = require('mongoose');

// Importo el modulo de rutas para poderlo utilizar 
// en la configuracion inicial del proyecto.

const routes = require('./routes/index');

// Configuraciones
    
    // configuro el puerto donde va a escuchar el servidor 
    // si no tiene un puerto definido que utilice el puerto 3000
    app.set('port',process.env.PORT || 3000);

    // Configuro las vistas
    app.set('views', path.join(__dirname,'views'));
    
    // Configuro el motor de platillas que voy a usar para las vistas
    app.set('view engine', 'ejs');
    

// MiddleWears

    app.use((req,res,next) =>{
       //  console.log(req.url,'--',req.method);
       res.header('Access-Control-Allow-Origin', '*');
       res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
       res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
       res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
        next();
    });

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(express.urlencoded());
    app.use(express.json());

// Routes

app.use(routes);

// Static Files. Estos son todos los archivos relacionados al navegador (css, javascript, etc) Frontend
    app.use(express.static(path.join(__dirname,'public')))


// Inicia el Servidor
app.listen(app.get('port'), ()=> {
    console.log('Server on port : ', app.get('port'))

});