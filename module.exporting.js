var privateVar = 'props'

// exporting multiple props & functions

exports.prop = 'exporting ' + privateVar;

exports.fun = function() {
    console.log('exporting functions');
};
