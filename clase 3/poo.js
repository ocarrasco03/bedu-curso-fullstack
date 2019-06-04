function speak() {
    console.log(`The ${this.color} rabbit stays 'Hello!'`);
}

var rabbit = { color: 'Blue', speak }

rabbit.speak();
// The Blue rabbit says 'Hello!'

/***
 * ES5
 */
function Bird(type, color) {
    this.type   = type;
    this.color  = color;

    this.fly    = function() {
        console.log(`The ${this.color} ${this.type} is flayin!`);
    }

    this.walk = function() {
        console.log(`The ${this.color} ${this.type} is walking!`);
    }
}

function Raven(type, color) {
    Bird.call(this, type, color); // Herencia de objetos

    this.solvePuzzle = function() {
        console.log(`The ${this.color} ${this.type} is solving a puzzle!`);
    }
}

function Parrot(type, color) {
    Bird.call(this, type, color);

    this.sing = function() {
        console.log(`The ${this.color} ${this.type} is singing!`);
    }
}

var raven = new Raven('smart', 'blue');


/**
 * ES6
 */

class Bird {
    constructor(type, color) {
        this.type  = type;
        this.color = color;
    }

    fly() {
        console.log(`The ${this.color} ${this.type} is flayin!`);
    }

    walk() {
        console.log(`The ${this.color} ${this.type} is walking!`);
    }
}

class Raven extends Bird {
    constructor(type, color) {
        super(type, color);
        this.type   = type;
        this.color  = color;
    }

    solvePuzzle() {
        console.log(`The ${this.color} ${this.type} is solving a puzzle!`);
    }
}

class Parrot extends Bird {
    constructor(type, color) {
        super(type, color);
    }

    sing() {
        console.log(`The ${this.color} ${this.type} is singing!`);
    }
}


/**
 * Write a class Vec that represents a vector in two-dimensional space.
 * It takes x and y parameters (numbers), which it should save to properties of the same name.
 * 
 * Give the Vec prototype two methods, plus and minus, that take another vector as a parameter and 
 * return a new vector that has the sum or difference of the two vectors’ (this and the parameter) x and y values.
 * 
 * Add a getter property length to the prototype that computes the length of the vector—that is,
 * the distance of the point (x, y) from the origin (0, 0).
 */

// Your code here.

class Vec {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    plus(other) {
        return new Vec(this.x + other.x, this.y + other.y);
    }

    minus(other) {
        return new Vec(this.x - other.x, this.y - other.y);
    }

    get length() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y))
    }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

/**
 * Write a class called Group with three methods, add, delete, and has.
 * Its constructor creates an empty group, add adds a value to the group
 * (but only if it isn’t already a member), delete removes its argument from
 * the group (if it was a member), and has returns a Boolean value indicating
 * whether its argument is a member of the group.
 * 
 * Use the === operator, or something equivalent such as indexOf, to determine
 * whether two values are the same.
 * 
 * Give the class a static from method that takes an iterable object as argument
 * and creates a group that contains all the values produced by iterating over it.
 */

class Group {
    constructor(member) {
        this.member = [];
    }

    add(val) {
        if(!this.has(val)) {
            this.member.push(val);
        }
    }

    delete(val) {
        this.member = this.member.filter(v => v !== val);
    }

    has(val) {
        return this.member.includes(val);
    }

    static from(collection) {
        let group = new Group;
        for(let value of collection) {
            group.add(value);
        }

        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false