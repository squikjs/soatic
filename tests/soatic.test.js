import { iter } from "../soatic.js";

test("should create a geometric progression", () => {
  let step = 2;
  let items = 5;
  let gp = [];

  for (let [idx, num] of iter(new Array(items).fill(null), (i) => [i, step ** i])) gp[idx] = num;
  expect(gp).toStrictEqual([1, 2, 4, 8, 16]);
});

test("should count from 1 to 10", () => {
  let cmpNum = 0;
  for (let num of 10) expect(cmpNum++).toBe(num);
});

test("should create an array from 1 to 5", () => {
  let array = [];
  for (let num of 5) array[num] = num + 1;
  expect(array).toStrictEqual([1, 2, 3, 4, 5]);
});

test("should iterate over the username and id from a user object", () => {
  let user = { John: 432, Bella: 163, George: 213 };

  let iter = user[Symbol.iterator]();
  expect(iter.next().value).toStrictEqual(["John", 432]);
  expect(iter.next().value).toStrictEqual(["Bella", 163]);
  expect(iter.next().value).toStrictEqual(["George", 213]);
  expect(iter.next().value).toStrictEqual(undefined);
});

test("should iterate over the preferences of user from a user object", () => {
  let user = {
    Harry: { food: "sandwich", drink: "orange_juice" },
    Lacy: { food: "burger", drink: "lemonade" },
    Troy: { food: "pizza", drink: "mango_juice" },
  };

  let desc = (name, { food, drink }) => `${name} likes to eat ${food}, and likes to drink ${drink}`;
  let iter = user[Symbol.iterator](desc);

  expect(iter.next().value).toStrictEqual(desc("Harry", { food: "sandwich", drink: "orange_juice" }));
  expect(iter.next().value).toStrictEqual(desc("Lacy", { food: "burger", drink: "lemonade" }));
  expect(iter.next().value).toStrictEqual(desc("Troy", { food: "pizza", drink: "mango_juice" }));
  expect(iter.next().value).toStrictEqual(undefined);
});
