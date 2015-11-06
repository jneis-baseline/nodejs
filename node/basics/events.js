var EventEmitter = require('events');
var emitter = new EventEmitter;

emitter
    
    .on('newListener', function(event) {
        console.log('default event emitted when listeners are added', '-', 'listener for', event, 'event added');
    })

    .on('removeListener', function(event) {
        console.log('default event emitted when listeners are removed', '-', 'listener for', event, 'event removed');
    })

    .on('someEvent', function() {
        console.log('inside a listener, this refers to the event emitter');
    })

    .once('anotherEvent', function(arg) {
        console.log('this listener executes once, then it is removed', '-', arg, 'passed');
    });

emitter.emit('someEvent');
emitter.emit('anotherEvent', 'with arguments');

console.log(emitter);
