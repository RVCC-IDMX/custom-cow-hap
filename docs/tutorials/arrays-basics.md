# Arrays basics

Arrays let you store multiple values in a single variable. In this project, you're using an array to hold all your fortunes.

## Creating an array

Use square brackets `[]` to create an array:

```javascript
const fortunes = ["First fortune", "Second fortune", "Third fortune"];
```

Each item in the array is separated by a comma.

## Accessing array elements

Arrays are **zero-indexed** — the first element is at position 0, not 1.

```javascript
const fortunes = ["Hello", "World", "JavaScript"];

console.log(fortunes[0]); // "Hello"
console.log(fortunes[1]); // "World"
console.log(fortunes[2]); // "JavaScript"
```

## Getting the array length

The `.length` property tells you how many items are in the array:

```javascript
const fortunes = ["Hello", "World", "JavaScript"];
console.log(fortunes.length); // 3
```

This is important for our random selection pattern — we need to know how many fortunes exist.

## Adding items to an array

You can add items when you create the array, or add them later:

```javascript
// Add when creating
const fortunes = ["First", "Second", "Third"];

// Add later with push
fortunes.push("Fourth");
```

For this project, you'll add fortunes directly in the array when you edit `fortune.js`.

## Why we use const

Even though we use `const`, we can still add or remove items from the array. The `const` keyword means we can't reassign the variable to a completely different value, but we can modify the contents.

```javascript
const fortunes = ["Hello"];
fortunes.push("World"); // This works!
fortunes = ["Something"]; // This would cause an error
```

## Quick reference

| Syntax                    | What it does           |
| ------------------------- | ---------------------- |
| `array[0]`                | Get first element      |
| `array[array.length - 1]` | Get last element       |
| `array.length`            | Get number of elements |
| `array.push(item)`        | Add item to end        |

## Try it yourself

In your browser console or Node.js, try:

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // What does this print?
console.log(fruits.length); // And this?
```
