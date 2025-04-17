//Typeof guards

function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  return value * 3;
}

// Truthiness Guards

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("You did not pass in a word!");
  }
};

// Equality Narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    x.toUpperCase();
  }
}

// Narrowing with the in operator

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  titile: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

// Instanceof narrowing

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}

// Type predicates

interface Cat {
  name: string;
  numLives: string;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  //if the function returs tru we would know that the value is of type Cat
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
  }
}

// Discriminated unions

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

type FarmAnimal = Pig | Rooster | Cow;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Cockadoodledoo!";
  }
}

// Exhaustiveness Checks With Never

// function getFarmAnimalSound(animal: FarmAnimal) {
//     switch (animal.kind) {
//       case "pig":
//         return "Oink!";
//       case "cow":
//         return "Mooo!";
//       case "rooster":
//         return "Cockadoodledoo!";
//         default:
//             //We should never make it here, if we handled all cases correctly
//             //const shouldNEverGetHere: never = animal;
//             //return shouldNEverGetHere
//             const _exhaustiveCheck: never = animal;
//             return _exhaustiveCheck;
//     }
//   }
