var env = process.env.NODE_ENV || "dev",
    pkgJson = require("../package"),
    path = require("path"),
    express = require("express"),
    app = express();

console.log("Loading app in " + env + " env");

global.App = {
    //router: app,
    port: process.env.PORT || "80",
    version: pkgJson.version,
    root: path.join(__dirname, ".."),
    path: function(file) {
        return this.root + "/" + file;
    },
    require: function(file) {
        return require(this.path(file));
    },
    env: env,
    start: function() {
        if (!this.started) {
            this.started = true;
            app.listen(this.port);
            console.log("App version " + this.version + " listening on port " + this.port + "");
        }
    }
}

app.set("views", App.path("app/views"));
app.set("view engine", "jade");
app.set("view options", {pretty: env === "dev"});

//app.use(express.bodyParser());
//app.use(express.methodOverride());
//app.use(express.cookieParser());
//app.use(express.cookieSession({secret: "all-nodes-secret", key: "session"}));
app.use(express.static(App.path("public")));
require("./routes").setup(app);
