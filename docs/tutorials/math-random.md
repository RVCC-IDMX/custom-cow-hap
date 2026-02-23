# Understanding Math.random()

> **Note:** This is the same guide from Fortunate Cow. The random selection pattern works exactly the same way with arrays of objects.

The `fortune.js` script uses this pattern to pick a random fortune:

```javascript
const randomIndex = Math.floor(Math.random() * fortunes.length);
```

Let's break this down piece by piece.

## What Math.random() does

`Math.random()` returns a random decimal number between 0 (inclusive) and 1 (exclusive).

```javascript
Math.random(); // might return 0.7234
Math.random(); // might return 0.1456
Math.random(); // might return 0.9821
```

The number is always:

- Greater than or equal to 0
- Less than 1 (never exactly 1)

## Scaling to your array size

If you have 5 fortunes, you need a random number between 0 and 4 (the valid array indexes). Multiplying by the array length scales the range:

```javascript
// If fortunes.length is 5:
Math.random() * 5; // Returns 0 to 4.9999...
```

Examples:

- 0.2 × 5 = 1.0
- 0.7 × 5 = 3.5
- 0.9 × 5 = 4.5

## Why we need Math.floor()

Array indexes must be whole numbers (0, 1, 2, 3...), not decimals. `Math.floor()` rounds down to the nearest whole number:

```javascript
Math.floor(3.5); // 3
Math.floor(4.9); // 4
Math.floor(0.1); // 0
```

## Putting it together

```javascript
// Step by step:
const fortunes = ["A", "B", "C", "D", "E"]; // 5 fortunes

// Step 1: Get random decimal
let random = Math.random(); // e.g., 0.73

// Step 2: Scale to array size
let scaled = random * 5; // e.g., 3.65

// Step 3: Round down
let index = Math.floor(scaled); // e.g., 3

// Step 4: Get the fortune
let fortune = fortunes[index]; // "D"
```

In the actual code, it's all on one line:

```javascript
const randomIndex = Math.floor(Math.random() * fortunes.length);
```

## The pattern

This is a common JavaScript pattern you'll see often:

```javascript
Math.floor(Math.random() * array.length);
```

It gives you a random valid index for any array, regardless of size.

## With arrays of objects (Custom Cow)

In Custom Cow, your fortunes are objects, but the pattern is the same:

```javascript
const fortunes = [
  { text: "First", category: "wisdom" },
  { text: "Second", category: "humor" },
  { text: "Third", category: "coding" }
];

const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Now access the properties
console.log(todaysFortune.text);     // The fortune text
console.log(todaysFortune.category); // The category
```

The random selection gives you an object. Then you use dot notation to access its properties.

## Visualizing the range

For an array with 3 fortunes (indexes 0, 1, 2):

| Math.random() returns | × 3 =       | Math.floor() = | Result         |
| --------------------- | ----------- | -------------- | -------------- |
| 0.00 - 0.33           | 0.00 - 0.99 | 0              | First fortune  |
| 0.34 - 0.66           | 1.02 - 1.98 | 1              | Second fortune |
| 0.67 - 0.99           | 2.01 - 2.97 | 2              | Third fortune  |

Each fortune has an equal chance of being selected.

## Try it yourself

In your browser console or Node.js, run this a few times:

```javascript
const fortunes = [
  { text: "Apple", category: "fruit" },
  { text: "Banana", category: "fruit" },
  { text: "Cherry", category: "fruit" }
];
const randomIndex = Math.floor(Math.random() * fortunes.length);
console.log("Index:", randomIndex, "Fortune:", fortunes[randomIndex].text);
```
