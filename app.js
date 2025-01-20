const express = require('express');
const sql = require('mssql');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Configuración de la base de datos
const dbConfig = require('./config/dbConfig');

// Capa de infraestructura: Conexión a la base de datos
sql.connect(dbConfig).then(() => {
    console.log('Conexión exitosa a la base de datos');
}).catch(err => {
    console.error('Error al conectar a la base de datos:', err);
});

// Importar rutas
const peliculasRoutes = require('./routes/peliculasRoutes');
app.use('/peliculas', peliculasRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
