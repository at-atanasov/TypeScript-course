let movieTitle: string = "Amadeus";
movieTitle = "Arrival";
movieTitle = 9; //not allowed

let numCatLives: number = 9;
numCatLives += 1;
numCatLives = "zero"; // we cannot assign string to variable from type number

let gameOVer: boolean = false;
gameOVer = true;
gameOVer = "true"; // not allowed to assign string

// Type Inference

let tvShow = "Olive Kitteridge"; //Creating a variable with a value but without a type annotation
tvShow = "The other two";
tvShow = false; // ERROR - Type boolean is not assignable to a type string

let isFunny = true; //Creating a variable with a value but without a type annotation
isFunny = false;
isFunny = "asd"; // ERROR - Type string is not assignable to a type boolean.

// The any type

let thing: any = "hello";
thing = 1;
thing = false;
thing();
thing.toUpperCase();
// You can reassign this variable or treat is as any type

const movies = ["Arrival", "The thing", "Aliens", "Amadeus"];
let foundMovie; // TS sets this variable type to any because we do not assign any value and it doesn't know what to expect;
// let foundMovie: string; We can assign the variable to type string like this

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Ammadeus";
  }
}
