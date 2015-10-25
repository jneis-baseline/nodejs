var movies = App.require("data/movies").movies;

module.exports = function(request, response) {
    response.render("list", {movies: movies});
};
