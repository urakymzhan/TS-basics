let apples: number = 5;
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNums: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, true];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// WHEN to use annotations.
// WHEN type inference doesn't work

// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20 }';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}
// when you hover coordinates, it says return type is 'any'
// lets fix 'any' return type
const coordinates2: { x: number; y: number } = JSON.parse(json);
console.log(coordinates2);

// 2) When we declare a variable on one line
// and initialize it later
let words = ["red", "green", "blue"];
let foundWord: boolean; // better code let foundWord = false;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "green") {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // boolean or number

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
