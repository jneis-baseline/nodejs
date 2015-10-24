var movies = App.require("data/movies").movies;

module.exports = function(request, response) {
    response.setHeader("Content-type", "application/json");
    response.end(JSON.stringify(movies[request.params.id]));
};
