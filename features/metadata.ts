import "reflect-metadata";

// const plane = {
//   color: "black",
// };
// // metadata - lets us attach special piece of information that doesn't come up in inspect etc.
// Reflect.defineMetadata("note", "hi there", plane);
// Reflect.defineMetadata("height", 80, plane);

// const note = Reflect.getMetadata("note", plane);
// const height = Reflect.getMetadata("height", plane);
// console.log(plane);
// console.log(height);

// Practical Metadata

@controller
class Plane {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("vrrrr");
  }
}

function get(path: string) {
  return function (target: Plane, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plane) {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
    // router.get(path, target.prototype[key]);
  }
}
