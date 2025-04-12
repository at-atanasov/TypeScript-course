interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 1234 };

interface Person {
  readonly id: number; // once it is set it cannot be changed
  first: string;
  last: string;
  nickname?: string; // ? means that this property is optional
  sayHi: () => string; // We say that the person should have method sayHi(function  with 0 arguments which returns a string)
  // sayHi(): string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => {
    return "Hello!";
  },
};
thomas.first = "sdffds";
// thomas.id = 2456358;    It throws error because we are trying to modify readonly property

interface ShoeProduct {
  name: string;
  price: string;
  applyDiscount(discount: number): number;
}

const shoes: ShoeProduct = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian shepherd",
  bark() {
    return "WOOF WOOF";
  },
};

interface ServiceDog extends Dog {
  // Service dog inherits all type ruler from Dog
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 5,
  breed: "Lab",
  bark() {
    return "Bark";
  },
  job: "guide dog",
};

interface PersonInt {
  name: string;
}

interface EmployeeInt {
  readonly id: number;
  emailId: string;
}

interface Engineer extends PersonInt, EmployeeInt {
  // We can inherit multiple interfaces
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 1234,
  emailId: "pierre@gmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};
