const sql = require('mssql');

async function getAllPeliculas() {
    const result = await sql.query('SELECT * FROM Peliculas');
    return result.recordset;
}

async function getPeliculaById(id) {
    const result = await sql.query`SELECT * FROM Peliculas WHERE id = ${id}`;
    return result.recordset[0];
}

async function createPelicula(pelicula) {
    await sql.query`INSERT INTO Peliculas (Titulo, Director, Genero, Puntuacion, Rating, Anio_Publicacion) VALUES (${pelicula.titulo}, ${pelicula.director}, ${pelicula.genero}, ${pelicula.puntuacion}, ${pelicula.rating}, ${pelicula.anio_publicacion})`;
}

async function updatePelicula(id, pelicula) {
    await sql.query`UPDATE Peliculas SET Titulo = ${pelicula.titulo}, Director = ${pelicula.director}, Genero = ${pelicula.genero}, Puntuacion = ${pelicula.puntuacion}, Rating = ${pelicula.rating}, Anio_Publicacion = ${pelicula.anio_publicacion} WHERE id = ${id}`;
}

async function deletePelicula(id) {
    await sql.query`DELETE FROM Peliculas WHERE id = ${id}`;
}

module.exports = {
    getAllPeliculas,
    getPeliculaById,
    createPelicula,
    updatePelicula,
    deletePelicula
};
