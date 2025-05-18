function formatString(input: string, toUpper?: boolean): string {
  //   console.log(toUpper);
  if (toUpper == false) {
    return input.toLowerCase();
  } else {
    return input.toUpperCase();
  }
}

// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));
formatString("Hello"); // Output: "HELLO"
formatString("Hello", true); // Output: "HELLO"
formatString("Hello", false); // Output: "hello"

function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
  return items.filter((item) => item.rating >= 4);
}
const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];
// console.log(filterByRating(books));
filterByRating(books);
// Output: [ { title: "Book A", rating: 4.5 }, { title: "Book C", rating: 5.0 } ]

function concatenateArrays<T>(...arrays: T[][]): T[] {
  //   console.log(
  //     arrays.reduce((acc, currentArray) => acc.concat(currentArray), [])
  //   );
  //   console.log(arrays.flat());
  return arrays.flat();
}

// console.log(concatenateArrays(["a", "b"], ["c"]));
concatenateArrays(["a", "b"], ["c"]); // Output: ["a", "b", "c"]
concatenateArrays([1, 2], [3, 4], [5]); // Output: [1, 2, 3, 4, 5]

class Vehicle {
  make: string;
  year: number;
  constructor(make: string, year: number) {
    (this.make = make), (this.year = year);
  }
  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
// console.log(myCar.getModel());

function processValue(value: string | number): number {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
}
processValue("hello"); // Output: 5
processValue(10); // Output: 20

// console.log(processValue("hello"));
// console.log(processValue(10));

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  return products.reduce((exproduct, product: Product) => {
    return product.price > exproduct.price ? product : exproduct;
  }, products[0] ?? null);
}

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 },
];

getMostExpensiveProduct(products);
// console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  return day === Day.Sunday ? "Weekend" : "Weekday";
}

getDayType(Day.Monday); // Output: "Weekday"
getDayType(Day.Sunday); // Output: "Weekend"
// console.log(getDayType(Day.Friday));

async function squareAsync(n: number): Promise<number> {
  return new Promise((res, rej) => {
    if (n < 0) {
      rej(new Error("Negative number not allowed"));
    } else {
      setTimeout(() => {
        res(n * n);
      }, 1000);
    }
  });
}

squareAsync(4).then(console.log); // Output after 1s: 16
squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
