## <center>**Soatic**</center>

---

## <center>_📀_ Object and number iterators _📀_</center>

### ⚠️ This package edits prototypes of `Object` and `Number` classes to implement iterators.

## 🚀 **Installation**

```bash
# using npm
npm install soatic

# or using yarn
yarn add soatic
```

## 💻 **Import**

```js
// if you want to use the `iter` function
import { iter } from "soatic";

// or if you want to just use the object and number iterators
import _ from "soatic";
```

## 🐱‍🏍 **Usage**

- ### Iterate with `for` loop

  ```js
  import _ from "soatic";

  /* NUMBER ITERATOR */

  // Prints 0 - 9
  for (let num of 10) console.log(num);

  /* OBJECT ITERATOR */

  // Prints ["a", 1] and ["b", 2]
  for (let kv of { a: 1, b: 2 }) console.log(kv);

  // Prints `A -> B` and `B -> C`
  for (let kv of { A: "B", B: "C" }[Symbol.iterator]((key, value) => `${key} -> ${value}`)) {
    console.log(kv);
  }
  ```

- ### Iterate manually

  ```js
  import _ from "soatic";

  /* Creating a `user` object */
  let user = {
    Harry: { food: "sandwich", drink: "orange juice" },
    Lacy: { food: "burger", drink: "lemonade" },
    Troy: { food: "pizza", drink: "mango juice" },
  };

  /* Creating a description function that expands the string */
  let desc = (name, { food, drink }) => `${name} likes to eat ${food}, and likes to drink ${drink}.`;

  /* Creating the iter of the `user` object */
  let iter = user[Symbol.iterator](desc);

  /* Iterating over it manually */

  console.log(iter.next().value); // Harry likes to eat sandwich, and likes to drink orange juice.

  console.log(iter.next().value); // Lacy likes to eat burger, and likes to drink lemonade.

  console.log(iter.next().value); // Troy likes to eat pizza, and likes to drink mango juice.

  console.log(iter.next().value); // undefined
  ```

## 💖 Made with love by **squik**.
