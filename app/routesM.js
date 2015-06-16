/**
 * Created by nico on 16/06/15.
 */
var Music = require('../app/models/music');

var Controller = require ('./controller');

module.exports = function (app) {

    app.get('/search', function (req, res) {
        Music.find(req.params.id, function (error, music) {
        });
    });

    app.get('/biblio', isLoggedIn, function (req, res) {
        {
            res.render('biblio.ejs', {
                user: req.user, // get the user out of session and pass to template
                music: req.music
            });
        }
    });

    app.post('/api/photos', isLoggedIn, function(req, res) {

        var serverPath = '/music/' + req.body.userNombre + '.mp3';
        var title = req.body.userNombre;
        console.log(req.body.userNombre);
        console.log(serverPath);

        require('fs').rename(
            req.files.userPhoto.path,
            '/home/nico/WebstormProjects/nodibrary/views' + serverPath,
            function(error) {
                if(error) {
                    res.send({
                        error: 'Ah crap! Something bad happened'
                    });
                    return;
                }

                res.send({
                    path: serverPath
                });
            }
        );
    });

    // devolver todos los Personas
    app.get('/api/persona', isLoggedIn, Controller.getMusic);
    // Crear una nueva Persona
    app.post('/api/music', isLoggedIn, Controller.setMusic);
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}