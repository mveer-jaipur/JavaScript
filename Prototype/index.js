// what is protoTypical inheritance
// Reference Link: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes

// Object Prototype
var cat = {
  name: "Cutie",
  speak: () => {
    console.log("meao");
  },
};

// You can access the methods which are availble on Object due to prototypical inheritance.
// cat object contains all the method defined inside Object.
// You can have a look at all the methods using cat.__proto__, which is equal to Object.prototype
console.log("Accessing method of Object.prototype - ", cat.toString());

// Array Prototype
var cats = ["Cutie", "Charlie"];

// You can access all the methods which are defined in Array due to prototypical inheritance.
// you can have a look at all the methods using cats.__proto__, which is equal to Array.prototype
// As Object is the base class, You can access all the methods of Object too.
// cats.__proto__.__proto__ === Object.Prototype === Array.prototype.__proto__

console.log("Accessing method on Array.prototype - ", cats.length);
console.log("Accessing method of Object.__proto__ - ", cats.toString());

// Function Prototype
function meao() {
  console.log("My cat is hungry");
}

// You can access all the methods which are defined in Funtion due to prototypical inheritance.
// You can check the methods available for inheritance using meao__proto__, which is equal to Function.prototype
// As Object is the base class for Function, you can access all the methods of object too.
// meao.__proto__.__proto__ === Object.prototype === Function.prototype.__proto__
console.log("Accessing Function methods - ", meao.call());
console.log("Accessing method of Object - ", meao.toString());

/* Setting Prototype */
// Using Object.create

const Person = {
  greet: () => {
    console.log("Greeting!!");
  },
};

const student = Object.create(Person);
student.greet();

// Using constructor

function AnotherPerson(name) {
  this.name = name;
}

AnotherPerson.prototype = Person;
AnotherPerson.prototype.constructor = AnotherPerson;

const ap = new AnotherPerson("kelvin");
ap.greet();
