'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
        .then(()=>{
            console.log("Conexión a la base de datos con mongoose-----")
            //Creacion del Servidor

            app.listen(port, () =>{
                console.log("Servidor Corriendo correctamente en la url: local:localhost:3700 ")
            })

        })
        .catch(err => console.log(err) )