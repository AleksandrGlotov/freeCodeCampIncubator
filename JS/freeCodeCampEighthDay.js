let dog = {
  name: "Betty",
  numLegs: 4,
};

let dog1 = {
  name: "Spot",
  numLegs: 4,
};
// Only change code below this line
console.log(dog1.name);
console.log(dog1.numLegs);

let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + dog2.numLegs + " legs.";
  },
};

dog2.sayLegs();

let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function () {
    return "This dog has " + this.numLegs + " legs.";
  },
};

dog3.sayLegs();

function Dog() {
  this.name = "Spot";
  this.color = "Black";
  this.numLegs = 4;
}

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog();
