/**
 * Created by nico on 16/06/15.
 */
var Music = require('../app/models/music');


module.exports = function(app){
    app.get('/search', isLoggedIn, function(req, res) {
        res.render('index.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
};