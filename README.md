# Arquitectura-nodejs
Trabajo práctico en Nodejs el cual muestra un listado de alumnos , los cuales se pueden filtrar eliminar o agregar.

## End Points
## Verbo HTTP
### GET
#### '/' index
Muestra la pagina principal de la app
## Error
#### 404 not found

## Verbo HTTP
### GET
#### '/alumnos/list'  
Listado general de alumnos
## Error
#### 404 not found

## Verbo HTTP
### GET
#### '/alumnos/full' 
Listado de alumnos que incluye todos los datos que se tienen de ellos
## Error
#### 404 not found

## Verbo HTTP
### GET
#### '/alumno/new'
Carga el formulrio para crear un nuevo alumno
## Error
#### 404 not found


## Verbo HTTP
### POST
#### '/alumno/guardar' 
Genera un nuevo alumno en el array local
## Error
#### 404 not found


## Verbo HTTP
### POST
#### '/alumno/buscar' 
Busca un alumno por número de documento
## Error
#### 404 not found

## Verbo HTTP
### POST
#### '/alumno/delete/:id' 
Borra un alumno por Id
## Error
#### 404 not found

## Verbo HTTP
### GET
#### '/alumno/update/:id' 
Busca un alumno por Id para precargar los datos a editar
## Error
#### 404 not found

## Verbo HTTP
### POST
#### '/alumno/update' 
Guarda los datos editado en el formulario obtenido


##### Para correr el servidor de este proyecto, hay que "pararse" mediante la consola donde se haya descargo el proyecto y correr el comando npm run dev ( esto va iniciar un servidor en el puerto 3000) 

