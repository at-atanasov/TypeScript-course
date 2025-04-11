const color: [number, number, number] = [255, 0, 45]; // Array of exactly three elements. Each of them is a number.

type HTTPresponse = [number, string];

const goodRes: HTTPresponse = [200, "OK"];
goodRes.push("200"); // After the array is created we can push whatever we want and there won't be an error

//ENUMS

enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

const myStatus = OrderStatus.DELIVERED; // 2

enum OrderStatusNew {
  PENDING = 5,
  SHIPPED = 6,
  DELIVERED = 7,
  RETURNED = 8,
}

const myStatusNew = OrderStatusNew.DELIVERED; // 7

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}
