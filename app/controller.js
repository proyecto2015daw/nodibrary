/**
 * Created by nico on 16/06/15.
 */
var Music = require('./models/music');

// Obtiene todos los objetos Musica de la base de datos
exports.getMusic = function (req, res){
    Music.find(
        function(err, music) {
            if (err)
                res.send(err)
            res.json(music); // devuelve todas las Personas en JSON
        }
    );
}

// Guarda un objeto Music en base de datos
exports.setMusic = function(req, res) {

    // Creo el objeto Persona
    Music.create(
        {title : req.body.title, url: req.body.url},
        function(err, music) {
            if (err)
                res.send(err);
            // Obtine y devuelve toda la musica tras crear una de ellas
            Music.find(function(err, music) {
                if (err)
                    res.send(err)
                res.json(music);
            });
        });

}
