var movies = App.require("data/movies").movies;

module.exports = function(request, response) {
    var movie = movies.find(function(m) {
        return m.id === request.params.id;
    });

    response.render("show", {movie: movie});
};
