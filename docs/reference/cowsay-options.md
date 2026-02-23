# Cowsay options reference

> **Note:** This is the same reference from Fortunate Cow. You're still using cowsay for output in Custom Cow.

This reference shows how to customize cowsay output in your JavaScript code.

## Browse all cows

Visit **[cattlelog.netlify.app](https://cattlelog.netlify.app/)** to see and search all available cows. Click any cow to see its name for use in your code.

## Basic usage

```javascript
import * as cowsay from "cowsay";

console.log(cowsay.say({ text: "Hello!" }));
```

## Available options

| Option | Description                       | Example    |
| ------ | --------------------------------- | ---------- |
| `text` | The message to display (required) | `"Hello!"` |
| `e`    | Eye string (2 characters)         | `"^^"`     |
| `T`    | Tongue string (2 characters)      | `"U "`     |
| `f`    | Cow file / cow name               | `"tux"`    |
| `r`    | Random cow (true/false)           | `true`     |
| `W`    | Word wrap width                   | `40`       |

## Changing the cow

Use the `f` option to select a specific cow:

```javascript
// Tux the penguin
console.log(cowsay.say({ text: "Hello!", f: "tux" }));

// Dragon
console.log(cowsay.say({ text: "Hello!", f: "dragon" }));

// Elephant
console.log(cowsay.say({ text: "Hello!", f: "elephant" }));
```

### Available cows

Common cows include:

- `default` - The classic cow
- `tux` - Linux penguin
- `dragon` - A dragon
- `elephant` - An elephant
- `kitty` - A cat
- `koala` - A koala
- `moose` - A moose
- `sheep` - A sheep
- `stegosaurus` - A dinosaur
- `turtle` - A turtle
- `whale` - A whale

To get a random cow each time:

```javascript
console.log(cowsay.say({ text: "Surprise!", r: true }));
```

## Customizing eyes

Use the `e` option with a 2-character string:

```javascript
// Happy eyes
console.log(cowsay.say({ text: "Happy!", e: "^^" }));

// Surprised eyes
console.log(cowsay.say({ text: "Wow!", e: "OO" }));

// Sleeping eyes
console.log(cowsay.say({ text: "Zzz...", e: "--" }));

// Dead eyes (classic)
console.log(cowsay.say({ text: "X_X", e: "XX" }));
```

## Customizing tongue

Use the `T` option with a 2-character string:

```javascript
// Sticking tongue out
console.log(cowsay.say({ text: "Bleh!", T: "U " }));
```

## Combining options

You can use multiple options together:

```javascript
console.log(
  cowsay.say({
    text: "Good morning!",
    f: "tux",
    e: "^^",
    T: "U ",
  }),
);
```

## Using think instead of say

The `think` function shows a thought bubble instead of speech:

```javascript
console.log(cowsay.think({ text: "Hmm..." }));
```

## Word wrapping

Long messages automatically wrap. Control the width with `W`:

```javascript
console.log(
  cowsay.say({
    text: "This is a very long message that will wrap to multiple lines",
    W: 30,
  }),
);
```

## Example: Complete customization

```javascript
import * as cowsay from "cowsay";

const message = "Have a great day!";

console.log(
  cowsay.say({
    text: message,
    f: "tux", // Use Tux the penguin
    e: "^^", // Happy eyes
    T: "  ", // No tongue
    W: 40, // Wrap at 40 characters
  }),
);
```

## Quick reference card

```javascript
cowsay.say({
  text: "Message here", // Required
  f: "cow", // Optional: tux, dragon, etc.
  e: "^^", // Optional: 2-char eyes
  T: "U ", // Optional: 2-char tongue
  r: true, // Optional: random cow
  W: 40, // Optional: wrap width
});
```
