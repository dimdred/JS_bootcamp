String.prototype.yell = function () {
  return `OMG ${this.toUpperCase()} !!!!`;
};

Array.prototype.pop = function () {
  return "pop was broken!";
};

// function hex(r, g, b) {
//   return "#" + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1);
// }

// function rgb(r, g, b) {
//   return `rgb(${r}, ${g}, ${b})`;
// }

// function makeColor(r, g, b) {
//   const color = {};
//   color.r = r;
//   color.g = g;
//   color.b = b;
//   color.rgb = function() {
//     const {r, g, b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
//   }
//   color.hex = function() {
//     const {r, g, b} = this;
//     return "#" + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1);
//   }
//   return color;
// }

// const c = makeColor(255, 100, 25)

// function Color(r, g, b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }

// Color.prototype.rgb = function () {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b})`;
// };

// Color.prototype.hex = function () {
//   const { r, g, b } = this;
//   return "#" + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1);
// };

// Color.prototype.rgba = function (a=1) {
//   const { r, g, b } = this;
//   return `rgb(${r}, ${g}, ${b}, ${a})`;
// }

// const color1 = new Color(255, 0, 0);
// const color2 = new Color(0, 0, 0);

class Color {
  constructor(r, g, b, name) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.name = name;
  }

  innerRGB() {
    const { r, g, b } = this;
    return `${r}, ${g}, ${b}`;
  }

  rgb() {
    return `rgb(${this.innerRGB()})`;
  }

  rgba(a = 1) {
    return `rgba(${this.innerRGB()}, ${a})`;
  }

  hex() {
    const { r, g, b } = this;
    return "#" + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1);
  }
}

const c1 = new Color(128, 25, 67, "cherry");

// class Cat {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat () {
//     return `${this.name} is eating!`
//   }

//   meow () {
//     return 'MEOWWW!'
//   }
// }

// class Dog {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat () {
//     return `${this.name} is eating!`
//   }

//   bark() {
//     return 'WOOOF!'
//   }
// }

class Pet {
  constructor(name, age) {
    console.log('IN PET CONSTRUCTOR!');
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft = 9) {
    console.log('IN CAT CONSTRUCTOR!');
    super(name, age); //reference to Pet constructor for getting name and age
    this.livesLeft = livesLeft;
  }
  meow() {
    return "MEOWWW!";
  }
}

class Dog extends Pet {
  bark() {
    return "WOOOF!";
  }
  eat() {
    return `${this.name} scarfs his food!`;
  }
}