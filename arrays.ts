const activeUsers: string[] = []; // we create emty array of strings
activeUsers.push("Tony");

const ageList: number[] = [45, 56, 13];
ageList[0] = 99;
// ageList[0] = "asd"  Here throws error because we try to add string to number array

// const bools: Array<boolean> = []  Another way to declare an array

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({x: 23, y:"8"}) There is an error because "y" is not of type number

// Multidimensional Arrays

const board: string[][] = [
  //Declaration ot two dimensional array
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];
