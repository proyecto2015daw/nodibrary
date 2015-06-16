/**
 * Created by nico on 16/06/15.
 */
var mongoose = require('mongoose');

var musicSchema = mongoose.Schema({
    title       :   { type : String, index : true },
    desc        :   String,
    genre       :   String,
    url         :   String,
    img         :   String
});

module.exports = mongoose.model('Music', musicSchema);