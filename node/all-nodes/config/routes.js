var home = App.require("app/routes/home"),
    list = App.require("app/routes/list"),
    show = App.require("app/routes/show"),
    movies = App.require("app/routes/movies"),
    movie = App.require("app/routes/movie");

exports.setup = function(router) {
    router.get("/", home)
    router.get("/movies", list)
    router.get("/movies/:id", show)
    //router.get("/movies", movies);
    //router.get("/movies/:id", movie);
};
