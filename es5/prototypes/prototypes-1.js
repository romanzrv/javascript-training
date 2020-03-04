function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;

    this.sayAge = function () {
        console.log("I am " + this.age + " old");
    }
}

Person.prototype.sayName = function() {
     console.log(this.firstName + " " + this.lastName);
};

var coin = new Person("Diego", "Coin", 16);
coin.sayName();
coin.sayAge();
