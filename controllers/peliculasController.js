const Pelicula = require('../models/peliculaModel');
const repository = require('../repositories/peliculasRepository');

async function getPeliculas(req, res) {
    try {
        const peliculas = await repository.getAllPeliculas();
        res.json(peliculas);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener las películas', detalles: err });
    }
}

async function getPelicula(req, res) {
    try {
        const pelicula = await repository.getPeliculaById(req.params.id);
        if (pelicula) {
            res.json(pelicula);
        } else {
            res.status(404).json({ error: 'Película no encontrada' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener la película', detalles: err });
    }
}

async function createPelicula(req, res) {
    try {
        const { titulo, director, genero, puntuacion, rating, anio_publicacion } = req.body;
        const pelicula = new Pelicula(null, titulo, director, genero, puntuacion, rating, anio_publicacion);
        await repository.createPelicula(pelicula);
        res.status(201).json({ mensaje: 'Película creada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al crear la película', detalles: err });
    }
}

async function updatePelicula(req, res) {
    try {
        const { titulo, director, genero, puntuacion, rating, anio_publicacion } = req.body;
        const pelicula = new Pelicula(null, titulo, director, genero, puntuacion, rating, anio_publicacion);
        await repository.updatePelicula(req.params.id, pelicula);
        res.json({ mensaje: 'Película actualizada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar la película', detalles: err });
    }
}

async function deletePelicula(req, res) {
    try {
        await repository.deletePelicula(req.params.id);
        res.json({ mensaje: 'Película eliminada exitosamente' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar la película', detalles: err });
    }
}

module.exports = {
    getPeliculas,
    getPelicula,
    createPelicula,
    updatePelicula,
    deletePelicula
};
