var greet = require('./greet');

var string2 = "console.log('hello world')";

var full = greet.string1 + string2+ greet.string3;

console.log(full);

var func = eval(full);
func();