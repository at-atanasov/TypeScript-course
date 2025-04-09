function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Jenskins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 }; // Set the type of the object and then creating it on the same line

function randomCoordinate(): { x: number; y: number } {
  // Set the object type returned by the function {x: number; y: number}
  return { x: Math.random(), y: Math.random() };
}

printName({ first: "Gosho", last: "Goshev", age: 23 }); // here the extra parameter is underlined because we add it inline in the object literal
const pesho = { first: "Gosho", last: "Goshev", age: 23 };
printName(pesho); // here we do not have error because the object was defined in separate variable first

// Type Aliases

type Point = { x: number; y: number };

let coordinateNew: Point = { x: 34, y: 2 };

function randomCoordinateNew(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// Nested object

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained MElody",
  artist: "Righteous Brothers",
  numStreams: 12873321,
  credits: {
    producer: "Phil Spector",
    writer: "Alex North",
  },
};

calculatePayout(mySong);
printSong(mySong);

// Optional properties

type PointThreeDim = { x: number; y: number; z?: number }; // The "?" makes "z" optional property

// The readonly Modifier

type User = { readonly id: number; username: string };

const user: User = {
  id: 12837,
  username: "catgirl",
};

console.dir(user.id);
user.id = 34897934; // There is an error because user.id is readonly and we cannot change its value

// Intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful; //We combine the two types in one. We can do it with more types too.

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};
