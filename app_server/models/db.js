//modelo
const mongoose = require('mongoose'); //importamos mongoose

//Importar esquema
require('./esquema_users');

//escuchar el evento SIGINT(Signal Interrupt)
const readline = require('readline');
if (process.platform === 'win32') {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit('SIGINT'); //emitir el evento
    });
}


//definimos string de conexion de la base de datos
const dbURI= 'mongodb://localhost/dw3_202420';

//conectamos con la base de datos

mongoose.connect(dbURI,{
    family: 4,
    serverSelectionTimeoutMS: 5000,

}).catch(err => console.log('Se presento un error en la conexion a MONGODB' , error.reason));

//eventos de conexion

mongoose.connection.on('connected', () => {
    console.log(`Mongoose se conecto a ${dbURI}`);
});

mongoose.connection.on('error', (error) => {
    console.log(`Mongoose se presento un error en la conexion a:`, error);
});

mongoose.connection.on('disconnected', () => { 
    console.log(`Mongoose desconectado`);
});

//metodo para cerrar la conexion a la base de datos
const procShutdown = (msg) => {
    mongoose.connection.close (() => {
        console.log(`Mongoose se desconecto por: ${msg}`);
        process.exit(0);
    })
}

//eventos de terminacion
//usuario envia ctrl+c: SIGINT
//nodemon: SIGUSR2
//heroku: SIGTERM

process.on('SIGINT', () => {
    procShutdown('Aplicacion terminada por el usuario (Ctrl+C)');
    process.exit(0); // Corregido: "process.exit(0)"
});

process.on('SIGUSR2', () => {
    procShutdown('Aplicacion reiniciada por nodemon');
    process.kill(process.pid, 'SIGUSR2'); // Corregido: "process.kill(process.pid, 'SIGUSR2')"
});

process.on('SIGTERM', () => {
    procShutdown('Aplicacion terminada por heroku');
    process.kill(process.pid, 'SIGTERM'); // Corregido: "process.kill(process.pid, 'SIGTERM')"
});

//conexion a multiples bases de datos
const dbURIlog = 'mongodb://localhost:27017/MiDBlogs';

const logDB = mongoose.createConnection(dbURIlog, {
    family: 4,
    serverSelectionTimeoutMS: 5000,
});

//eventos de conexion - dblogs
logDB.on('connected', () => {
    console.log(`Mongoose se conecto a ${dbURIlog}`);
});

logDB.on('error', (error) => {
    console.log(`Mongoose se presento un error en la conexion a:`, err);
});

logDB.on('disconnected', () => {
    console.log(`Mongoose desconectado DBlogs`);
});
