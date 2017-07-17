var Person = {
    firstname: "Travis",
    lastname: "Cooper",
    greet: function(){
        console.log("Hello, " + this.firstname + " " + this.lastname);
    }
}

Person.greet();