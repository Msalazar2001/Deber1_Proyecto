const mongoose = require('mongoose');

const dbURI = process.env.MONGO_URI || 'mongodb://localhost:27017/tu_base_local';

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`✅ Mongoose conectado a: ${dbURI}`))
.catch(err => console.log(`❌ Error en la conexión a MongoDB: ${err.message}`));

mongoose.connection.on('disconnected', () => {
    console.log('⚠️ Mongoose desconectado');
});