//Esquema Usuario
const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({ //Definicion del esquema
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    identificacion: {
        type: Number,
        required: true
    },
    direccion: {
        type: String,
    },
    telefono: {
        type: Number,
        'default': 9999999999
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        min: 18,
        max: 100
    },
    materias: {
        tipo: {
            type: String,
            enum: ['Presencial', 'Virtual']
            
        },
        nombres: [String],        
    },
    carrera: {
        type: String,
        required: true
    },
    creacion:{
        type: Date,
        'default': Date.now
    }

});

//Compilamos el esquema en un modelo
const Usuario = new mongoose.model('user', usuarioSchema);

const user = new Usuario({
    nombre: 'Paulo',
    apellido: 'Septimo',
    identificacion: 1754222170,
    direccion: 'Roma',
    telefono: 9992727001,
    email: 'pablo.septime@vaticano.com.it',
    edad: 50,
    materias: {
        tipo: 'Virtual',
        nombres: [
            'Progamacion',
            'Base de datos religiosa',
            'Ux religion'
        ]
    },
    carrera: 'Religion Orientada a Objetos',
    creacion: Date.now()
});

user.save() //Guardamos el documento en la conexion
