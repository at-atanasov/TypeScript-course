function numberIdentity(item: number): number {
  return item;
}

function stringIdentity(item: string): string {
  return item;
}

function booleanIdentity(item: boolean): boolean {
  return item;
}

// function identity(item: any): any {
//     return item;
// }

function identity<Type>(item: Type): Type {
  // Generic function. We submit the type of the element and the function returs the same type.
  return item;
}

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

// function getRandomElement<T,>(list: T[]): T => {     // On TSX ? file it will look like this. Note the trailing coma after the type parameter.
//     const randIdx = Math.floor(Math.random() * list.length);
//     return list[randIdx];
// }

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 5, 6]));
console.log(getRandomElement([1, 5, 6])); // We can do this also. TypeScript infer the type of the parameter and knows that it is number.

function merge<T, U>(object1: T, object2: U) {
  // we give two parameters for type because our function accepts two parameters.
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });

function merge2<T extends object, U extends object>(object1: T, object2: U) {
  // we are costraining the possible types to objects
  return {
    ...object1,
    ...object2,
  };
}

const comboObj2 = merge2({ name: "colt" }, { pets: ["blue", "elton"] });

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// Setting default Type Parameters

function makeEmptyArray<T = number>(): T[] {
  return [];
}

const nums = makeEmptyArray();
const bools = makeEmptyArray<boolean>();

// Writing generic classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class PlayList<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new PlayList<Song>();
const videos = new PlayList<Video>();
