var list = App.require("routes/list"),
    show = App.require("routes/show");

exports.setup = function(router) {
    router.get("/movies", list);
    router.get("/movies/:id", show);
};
