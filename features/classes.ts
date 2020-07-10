class Vehicle {
  // public means whatever we pass to Vehicle, shortcut
  constructor(public color: string) {} // change it to private to protected to see difference
  // this same as to:
  // color: string;
  // constructor(color: string) {
  //   this.color = color;
  // }
  // change to private or public(default) to see difference
  protected honk(): void {
    console.log("beep");
  }
}
const vehicle = new Vehicle("red");
// vehicle.honk();

class Car extends Vehicle {
  // color belongs to Vehicle
  constructor(public wheels: number, color: string) {
    super(color);
  }
  // overwriting a parent class function
  private drive(): void {
    console.log("vroom vroom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
const car = new Car(4, "red");
car.startDrivingProcess();

// private doesn't add security, we simply doesn't alllow other engineers modifing our code
