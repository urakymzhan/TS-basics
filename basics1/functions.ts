// type annotation - preferred way
const add = (a: number, b: number): number => {
  return a + b;
};

// type inference - Typescript figures out itself return type
const substract = (a: number, b: number) => {
  return a - b;
};

// why use annotations ?
const add2 = (a: number, b: number) => {
  a + b; // although no errors return type is void. It suppose to be number.
};

// -----
function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};

// Void and Never
const logger = (message: string): void => {
  console.log(message);
  // return null or return undefinded
};

const throwError = (message: string): never => {
  throw new Error(message); // means we never will meet the end of function
  // but in real world:
  // if(!message) {
  //   throw new Error(message);
  // }
  // return message;
};
