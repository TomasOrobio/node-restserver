const express = require('express')
const cors = require('cors');


class Server {

    constructor(){ // Crear en mi servidor, la aplicacion de express. como una propiedad.
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

        // Middlewares, (funcion que siempre se ejecuta cuando levantamos nuestro servidor)
        this.middlewares();

        // Rutas de mi aplicacion.
        this.routes();
    }

    middlewares() {

        // CORS
        this.app.use( (cors()) );

        // Lectura y parseo del body
        this.app.use(express.json('public'));

        // Directorio Publico
        this.app.use( express.static('public') ) 
    }


    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}


module.exports = Server;