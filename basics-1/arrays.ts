const carMakers: string[] = ["ford", "bmw", "mers"];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];
// const carsByMake = [
//   ['f150'],
//   ['400i'],
//   ['AMG 55']
// ]

// Help with inference when extracting values
const car = carMakers[0]; // Typescript knows car is type of string
const myCar = carMakers.pop(); //  same

// Prevent incompatible values
// carMakers.push(100); - error

// Help with map
carMakers.map((car: string): string => {
  return car; // access to all built-in methods because TS know car is a string. Little benefit
});

//  Flexible Types
const importantDates: (Date | string)[] = [new Date(), "2030-10-10"]; // string or Date types
importantDates.push("2030-10-10");
importantDates.push(new Date());
