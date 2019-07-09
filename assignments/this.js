/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global binding is the default value of "this", and refers to the window or console object.
 * 2. Implicit binding: when a function is called using dot notation, the value of "this" is whatever is left of the dot.
 * 3. New binding: when using a constructor function, "this" is the object created and returned by the constructor.
 * 4. Explicit binding: "this" is explicitly defined by 'call' or 'apply' methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this); // expected output: Window object

// Principle 2

// code example for Implicit Binding
const animal = {
  name: "sloth",
  food: "leaves",
  speed: "very slow",
  howFast: function() {
    return `A ${this.name} goes ${this.speed}.`;
  }
};

console.log(animal.howFast());

// Principle 3

// code example for New Binding
function Candidate(obj) {
  this.name = obj.name;
  this.age = obj.age;
  this.country = obj.country;
  this.party = obj.party;
  this.slogan = obj.slogan;
  this.speak = function() {
    console.log(this);
    return `My name is ${this.name} and what I\'d like to tell ${
      this.country
    } is: \"${this.slogan}\"!`;
  };
}

const liz = new Candidate({
  name: "Elizabeth Warren",
  age: 70,
  country: "America",
  party: "Democrat",
  slogan: "I have a plan for that"
});

const bern = new Candidate({
  name: "Bernie Sanders",
  age: 77,
  country: "America",
  party: "Independent",
  slogan: "Not me. Us."
});

console.log(liz.speak());
console.log(bern.speak());

// Principle 4

// code example for Explicit Binding
liz.speak.call(bern);
bern.speak.apply(liz);
