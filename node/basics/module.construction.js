// exporting a function (constructor) or a complete object

module.exports = function(arg) {
    return {
        fun: function() {
            console.log('construction argument:', arg);
        }
    };
};