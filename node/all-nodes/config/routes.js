var movies = App.require("routes/movies"),
    movie = App.require("routes/movie");

exports.setup = function(router) {
    router.get("/movies", movies);
    router.get("/movies/:id", movie);
};
