
function ClientsService() {

    console.log('Init user service');

    this._alumnos = [{
        id: 1,
        nombre: "Stanley",
        apellido: "Anwell",
        documento: 1,
        domicilio: "7 Summer Ridge Road"
      }, {
        id: 2,
        nombre: "Harvey",
        apellido: "Pistol",
        documento: 2,
        domicilio: "3 Park Meadow Junction"
      }, {
        id: 3,
        nombre: "Rolf",
        apellido: "Lorie",
        documento: 3,
        domicilio: "109 Ruskin Alley"
      }, {
        id: 4,
        nombre: "Fiorenze",
        apellido: "Wilcocke",
        documento: 4,
        domicilio: "6 Kensington Park"
      }, {
        id: 5,
        nombre: "Olin",
        apellido: "Gelderd",
        documento: 5,
        domicilio: "1451 8th Crossing"
      }, {
        id: 6,
        nombre: "Grannie",
        apellido: "O' Ronan",
        documento: 6,
        domicilio: "0 Mccormick Pass"
      }, {
        id: 7,
        nombre: "Valentijn",
        apellido: "Atrill",
        documento: 7,
        domicilio: "18 1st Plaza"
      }, {
        id: 8,
        nombre: "Carlin",
        apellido: "Spelling",
        documento: 8,
        domicilio: "233 Westport Plaza"
      }, {
        id: 9,
        nombre: "Lorenza",
        apellido: "O'Leagham",
        documento: 9,
        domicilio: "0792 Wayridge Center"
      }, {
        id: 10,
        nombre: "Addison",
        apellido: "Softley",
        documento: 10,
        domicilio: "703 Del Sol Crossing"
      }, {
        id: 11,
        nombre: "Kennith",
        apellido: "Oiller",
        documento: 11,
        domicilio: "41089 Logan Street"
      }, {
        id: 12,
        nombre: "Westleigh",
        apellido: "Gascoyen",
        documento: 12,
        domicilio: "702 Carberry Pass"
      }, {
        id: 13,
        nombre: "Annnora",
        apellido: "Daveran",
        documento: 13,
        domicilio: "00445 Stephen Way"
      }, {
        id: 14,
        nombre: "Rebeca",
        apellido: "Cockshutt",
        documento: 14,
        domicilio: "7519 High Crossing Way"
      }, {
        id: 15,
        nombre: "Merwin",
        apellido: "Liepina",
        documento: 15,
        domicilio: "45 Crownhardt Hill"
      }]

};


/**
 * @return {Promise<any>}
 */
ClientsService.prototype.getAll = function () {

    return new Promise((resolve) => {

        resolve(this._alumnos);
    });

};


/**
 * @param documento
 * @return {Promise<any>}
 */
ClientsService.prototype.getById = function (documento) {

    return new Promise((resolve, reject) => {

        let alumno = this._alumnos.find(c => c.documento == documento);

        if (alumno) {

            resolve(alumno);
            

        } else {

            reject(documento);
        }

    });

};


/**
 * @param client
 */
ClientsService.prototype.add = function (client) {

    this._alumnos.push(client);
    return this._alumnos.find(c => c.documento == client.documento);
};

/**
 * @param client
 */
ClientsService.prototype.update = function (client) {
    
     const alumno =  this._alumnos.find(c => c.id == client.id);
     alumno['nombre'] = client.nombre;
     alumno['apellido'] = client.apellido;
     alumno['documento'] = client.documento;
     alumno['domicilio'] = client.domicilio;
     
     return alumno;
    
};



/**
 * @param id
 */
ClientsService.prototype.deleteById = function (id) {
    this._alumnos = this._alumnos.filter(c => c.id != id);
     
    const alumno = this._alumnos.find(c => c.id == id);
    console.log(alumno);
    //return alumno;
};


module.exports = new ClientsService();


