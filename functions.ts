function square(num: number) {
  return num * num;
}

function greet(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};

function multiply(numOne: number, numTwo: number): number {
  //here we have anotation for the return value also
  return numOne * numTwo;
}

const add = (x: number, y: number) => {
  return x + y;
};

const colors = ["red", "orange", "yellow"];

colors.map((color) => {
  //TS can determine the type based on the context that is called
  return color.toUpperCase();
});

function printTwice(msg: string): void {
  //this function is void because it doesn't return any value
  console.log(msg);
  console.log(msg);
}

//Functions that never return anything and nevet spot executing

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("Game LOOP RUNNING!");
  }
}
