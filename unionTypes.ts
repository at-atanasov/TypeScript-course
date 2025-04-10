let age: number | string | boolean = 21; // Separated with | we can give a list of possible types
age = 23;
age = "23";
age = true;

type Pointer = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Pointer | Loc = { x: 1, y: 34 };
coordinates = { lat: 235.12, long: 23.654 };

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

function calculateTax(price: number | string, tax: number) {
  // return price * tax       This will return error because the price could be a string and we try to multiply it as it is a number
  // price.replace("$", "")   This will return error too for the same reason

  if (typeof price === "string") {
    price.replace("$", "");
  } else {
    price * tax;
  }
}

const stuff: (number | string)[] = [1, "sdsds"]; // Thats the way we can create an array that holds different types.

// Literal type

let mood: "Happy" | "Sad" = "Happy";
type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";
let today: DayOfWeek = "Monday";
