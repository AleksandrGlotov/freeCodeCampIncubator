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

function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("Angry Boy", "Black");

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(3)

myHouse instanceof House;

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if(canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

function Dog(name) {
  this.name = name;
}


Dog.prototype.numLegs = 4;
// Only change code above this line
let beagle = new Dog("Snoopy");

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle1 = new Dog("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if(beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
