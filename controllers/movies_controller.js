var express = require('express');
var movie = require('../models/movie.js');

var router = express.Router();

router.get("/", function(req,res){
    movie.selectAll(function(data){
        var hbsObject = {
            movies: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
});

router.post("/api/movies", function(req, res){
    movie.createOne([
        "movie_name"
    ], [
        req.body.name
    ], function(result) {
        res.json({id: result.insertId})
    }
)
});

router.put("/api/movies/:id", function(req,res){
    var watched = "id = " + req.params.id;

    console.log("Watched", watched);

    movie.updateOne({
        watched: req.body.watched
    }, watched, function(result) {
        if(result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    }
)
})


module.exports = router;


