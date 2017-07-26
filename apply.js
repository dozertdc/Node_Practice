var Person1 = {
    firstname: 'Travis',
    lastname: 'Cooper',
    greeting: function(){
        return 'Hello, ' + this.firstname + ' ' + this.lastname;
    }
};

console.log(Person1.greeting());

var Person2 = {
    firstname: 'Billy',
    lastname: 'Bob'
};

// Can use apply to borrow functions. Person2 is what this refers to when the function is called
// and that is why it works.
console.log(Person1.greeting.apply(Person2));