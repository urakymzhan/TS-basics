const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// const pepsi: [string, boolean, number] = ['brown', true, 40]; -  works
// this is a tuple instead of an array
// it restores the order of elements

// easier way
// create tuple structure and make it reusable
type Drink = [string, boolean, number];

const pepsi: Drink = ["brown", true, 40];
const fanta: Drink = ["orange", true, 10];
const cola: Drink = ["black", true, 60];
