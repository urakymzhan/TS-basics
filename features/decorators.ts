// run ts-node decorators.ts to run this file on terminal

@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @logError("Hey... I am catching this error with decorator!!!")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator genereateWake: boolean
  ): void {
    // throw new Error();
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("not swish");
    }
  }
}
function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

}
function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}
function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}
function testDecorator(target: any, key: string) {
  console.log(target.color);
}



new Boat().pilot();
