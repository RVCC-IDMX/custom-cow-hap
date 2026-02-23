# Array filtering with .filter()

The `.filter()` method creates a new array containing only the elements that pass a test you define. It's how you narrow down a list to just what you need.

---

## The basic pattern

```javascript
const filtered = array.filter((item) => /* test that returns true/false */);
```

**What happens:**

1. `.filter()` looks at each item in the array, one at a time
2. For each item, it runs your test
3. If the test returns `true`, the item goes into the new array
4. If the test returns `false`, the item is skipped

---

## A concrete example

```javascript
const fortunes = [
  { text: "Debug fearlessly", category: "coding" },
  { text: "Take a break", category: "motivation" },
  { text: "Read the error", category: "coding" },
];

// Get only coding fortunes
const codingFortunes = fortunes.filter(
  (fortune) => fortune.category === "coding",
);

console.log(codingFortunes);
// [
//   { text: "Debug fearlessly", category: "coding" },
//   { text: "Read the error", category: "coding" }
// ]
```

---

## Breaking down the arrow function

This is the part that confuses most beginners:

```javascript
(fortune) => fortune.category === "coding";
```

Let's break it down:

| Part                            | Meaning                                                  |
| ------------------------------- | -------------------------------------------------------- |
| `fortune`                       | A parameter name YOU choose — represents each array item |
| `=>`                            | Arrow syntax — separates parameter from the test         |
| `fortune.category === "coding"` | The test — returns true or false                         |

**The parameter name is arbitrary.** These all work the same:

```javascript
fortunes.filter((fortune) => fortune.category === "coding");
fortunes.filter((f) => f.category === "coding");
fortunes.filter((item) => item.category === "coding");
fortunes.filter((x) => x.category === "coding");
```

Pick a name that makes your code readable. `fortune` or `f` are both fine.

---

## Common mistakes

### Mistake 1: Forgetting the arrow

```javascript
// WRONG - missing arrow function
const filtered = fortunes.filter(category === "coding");

// RIGHT
const filtered = fortunes.filter((f) => f.category === "coding");
```

### Mistake 2: Forgetting the parameter

```javascript
// WRONG - fortune isn't defined
const filtered = fortunes.filter(() => fortune.category === "coding");

// RIGHT - fortune is the parameter
const filtered = fortunes.filter((fortune) => fortune.category === "coding");
```

### Mistake 3: Using assignment instead of comparison

```javascript
// WRONG - single = is assignment, not comparison
const filtered = fortunes.filter((f) => (f.category = "coding"));

// RIGHT - triple === is comparison
const filtered = fortunes.filter((f) => f.category === "coding");
```

### Mistake 4: Case-sensitive matching (common with CLI!)

```javascript
// Your fortunes.json has category: "coding"
// But user types: npm start Coding

const category = args[0]; // "Coding"
const filtered = fortunes.filter((f) => f.category === category);
// filtered is [] because "coding" !== "Coding"
```

**Fix:** Convert both sides to lowercase:

```javascript
const category = args[0]?.toLowerCase();
const filtered = fortunes.filter((f) => f.category.toLowerCase() === category);
```

**What's that `?.` doing?** It's optional chaining. If `args[0]` is undefined, it returns undefined instead of crashing on `.toLowerCase()`.

---

## Handling empty results

**Critical:** When no items pass the test, `.filter()` returns an empty array `[]`. This can break your code if you don't handle it.

```javascript
const filtered = fortunes.filter((f) => f.category === "nonexistent");
// filtered is [] (empty array)

const randomIndex = Math.floor(Math.random() * filtered.length);
// filtered.length is 0, so randomIndex is 0

const fortune = filtered[randomIndex];
// fortune is undefined! 💥
```

**Always check for empty results:**

```javascript
const filtered = fortunes.filter((f) => f.category === category);

if (filtered.length === 0) {
  console.log(`No fortunes found for category "${category}".`);
  process.exit(1);
}

// Safe to proceed — we know filtered has items
const randomIndex = Math.floor(Math.random() * filtered.length);
const fortune = filtered[randomIndex];
```

---

## Combining with your fortune script

Here's how filtering fits into your existing code:

```javascript
import fortunes from "./fortunes.json" with { type: "json" };

const args = process.argv.slice(2);
const category = args[0];

// Decide which fortunes to use
let fortunesToUse;

if (category) {
  // Filter to specific category
  fortunesToUse = fortunes.filter((f) => f.category === category);

  if (fortunesToUse.length === 0) {
    console.log(`No fortunes found for "${category}".`);
    process.exit(1);
  }
} else {
  // Use all fortunes
  fortunesToUse = fortunes;
}

// Pick a random fortune from the filtered (or full) list
const randomIndex = Math.floor(Math.random() * fortunesToUse.length);
const todaysFortune = fortunesToUse[randomIndex];
```

---

## Getting unique categories

To show users what categories exist, combine `.map()` with `Set`:

```javascript
// Get all categories (with duplicates)
const allCategories = fortunes.map((f) => f.category);
// ["coding", "motivation", "coding", "motivation", "coding"]

// Remove duplicates with Set
const uniqueCategories = [...new Set(allCategories)];
// ["coding", "motivation"]

console.log("Available categories:", uniqueCategories.join(", "));
```

**Don't worry if Set looks weird.** It's a stretch concept. For now, just know this pattern removes duplicates.

---

## Counting by category

To show how many fortunes are in each category:

```javascript
const categories = [...new Set(fortunes.map((f) => f.category))];

categories.forEach((category) => {
  const count = fortunes.filter((f) => f.category === category).length;
  console.log(`  ${category}: ${count}`);
});
```

---

## Summary

| Concept                   | What it does                                    |
| ------------------------- | ----------------------------------------------- |
| `.filter()`               | Creates new array with items that pass a test   |
| `(f) => ...`              | Arrow function — defines the test for each item |
| `f.category === "coding"` | The test — must return true or false            |
| `filtered.length === 0`   | Check if nothing matched                        |

The `.filter()` method is one of the most useful array methods. Once you understand it, you'll use it everywhere!
