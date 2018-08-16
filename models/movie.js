var orm =require('../config/orm.js');

var movie = {
    selectAll: function(cb) {
        orm.selectAll('movies', function(res){
            cb(res);
        })
    },

    createOne: function(cols, val, cb) {
        orm.createOne('movies', "movie_name", val, function(res){
            cb(res);
        }) 
    },

    updateOne: function(objColVals, watched, cb) {
        orm.updateOne("movies", objColVals, watched,function(res){
            cb(res);
        })
    }
};


module.exports = movie;