var test = require('./greet');

var test2 = test;
test.key3();
test.key1 = 11;

test2.key3();
test.key3();

console.log(test===test2);