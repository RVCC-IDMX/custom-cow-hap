# Objects basics

In Fortunate Cow, you worked with arrays of strings:

```javascript
const fortunes = ["Hello", "World", "JavaScript"];
console.log(fortunes[0]); // "Hello"
```

Now in Custom Cow, you'll work with **arrays of objects** — each fortune can have multiple pieces of information attached to it.

## What is an object?

An object is a collection of **key-value pairs**. Think of it like a labeled container:

```javascript
const fortune = {
  text: "Arrays start at index 0",
  category: "coding"
};
```

- `text` and `category` are **keys** (also called properties)
- `"Arrays start at index 0"` and `"coding"` are **values**

## Creating objects

Use curly braces `{}` to create an object:

```javascript
const fortune = {
  text: "Keep calm and code on",
  category: "motivation",
  author: "Unknown"
};
```

Each key-value pair is separated by a comma. The key comes first, then a colon, then the value.

## Accessing properties

Use **dot notation** to get a value from an object:

```javascript
const fortune = {
  text: "Console.log is your best friend",
  category: "debugging"
};

console.log(fortune.text);     // "Console.log is your best friend"
console.log(fortune.category); // "debugging"
```

The dot (`.`) says "look inside this object and get this property."

## Arrays of objects

Here's the big pattern for Custom Cow — an array where each element is an object:

```javascript
const fortunes = [
  { text: "First fortune", category: "wisdom" },
  { text: "Second fortune", category: "humor" },
  { text: "Third fortune", category: "wisdom" }
];
```

To access a fortune's text:

```javascript
console.log(fortunes[0]);       // { text: "First fortune", category: "wisdom" }
console.log(fortunes[0].text);  // "First fortune"
console.log(fortunes[1].category); // "humor"
```

Read it left to right:

1. `fortunes[0]` — get the first object in the array
2. `.text` — then get the `text` property of that object

## The random selection pattern (updated)

In Fortunate Cow, you had:

```javascript
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];
console.log(todaysFortune); // A string
```

In Custom Cow, the fortune is an object, so you access its text:

```javascript
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];
console.log(todaysFortune.text); // The fortune's text
console.log(todaysFortune.category); // The fortune's category
```

## What went wrong? Seeing [object Object]

If you see this output:

```text
< Good morning! [object Object] >
```

**The problem:** You forgot to access the `.text` property.

```javascript
// WRONG - todaysFortune is an object, not a string
const message = `Good morning! ${todaysFortune}`;

// RIGHT - access the .text property
const message = `Good morning! ${todaysFortune.text}`;
```

When you put an object directly in a string, JavaScript converts it to `[object Object]` instead of showing its contents. Always use dot notation to get the specific property you want.

## Adding more properties

Objects can have as many properties as you need:

```javascript
const fortune = {
  text: "Commit early, commit often",
  category: "git",
  author: "Ancient proverb",
  mood: "encouraging",
  tags: ["version-control", "best-practices"]
};
```

Notice that `tags` is an array — values can be strings, numbers, arrays, or even other objects.

## Quick reference

| Syntax             | What it does                    |
| ------------------ | ------------------------------- |
| `{ key: value }`   | Create an object                |
| `object.key`       | Get a property value            |
| `array[0].key`     | Get property from first element |
| `object.key = val` | Set a property value            |

## Try it yourself

In your browser console or Node.js, try:

```javascript
const pet = {
  name: "Whiskers",
  type: "cat",
  age: 3
};

console.log(pet.name); // What does this print?
console.log(pet.age);  // And this?

// Now try an array of objects:
const pets = [
  { name: "Whiskers", type: "cat" },
  { name: "Buddy", type: "dog" }
];

console.log(pets[1].name); // What about this?
```
