/*node debugger client:
    > node debug script.js */

/*debugger commands:
    > cont
    > next
    > step
    > out
    > repl
    > quit
    > help */

var x = 1;

setTimeout(function() {
    // breakpoint
    debugger;

    console.log('world');
}, 1000);

console.log('hello');
