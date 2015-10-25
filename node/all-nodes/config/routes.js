var home = App.require("app/routes/home"),
    movies = App.require("app/routes/movies"),
    movie = App.require("app/routes/movie");

exports.setup = function(router) {
    router.get("/", home)
    router.get("/movies", movies);
    router.get("/movies/:id", movie);
};
