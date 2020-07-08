const profile = {
  name: "ulan",
  age: 27,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};
// const { age } = profile; - works
// or
const { age }: { age: number } = profile;

// const { coords:  { lat, lng } } = profile; - works
// or
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
