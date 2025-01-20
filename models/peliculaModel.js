class Pelicula {
    constructor(id, titulo, director, genero, puntuacion, rating, anio_publicacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.genero = genero;
        this.puntuacion = puntuacion;
        this.rating = rating;
        this.anio_publicacion = anio_publicacion;
    }
}

module.exports = Pelicula;
