# Working with JSON files

> **Builds on:** You learned JSON syntax in the Cowsay assignment when editing `package.json`. Now you'll create your own JSON data file and import it into JavaScript.

## Why separate data from code?

In Fortunate Cow, your fortunes lived inside `fortune.js`:

```javascript
const fortunes = ["Fortune 1", "Fortune 2", "Fortune 3"];
```

In Custom Cow, you'll move your fortunes to a separate **JSON file**. This has benefits:

1. **Easier to edit** — you can add fortunes without touching code
2. **Validation** — VS Code can check your data against a schema
3. **Reusability** — other scripts could use the same data file
4. **Cleaner code** — your script focuses on logic, not data

## Creating your data file

Create a file called `fortunes.json` in your project root:

```json
[
  {
    "text": "Arrays start at index 0",
    "category": "coding"
  },
  {
    "text": "Keep calm and code on",
    "category": "motivation"
  }
]
```

Save it with the `.json` extension. VS Code will automatically validate the syntax.

## Importing JSON in Node.js

To use your JSON file in JavaScript, import it with an **import assertion**:

```javascript
import fortunes from "./fortunes.json" with { type: "json" };
```

Now `fortunes` is an array you can use just like before:

```javascript
import fortunes from "./fortunes.json" with { type: "json" };

const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];
console.log(todaysFortune.text);
```

## The import assertion explained

```javascript
import fortunes from "./fortunes.json" with { type: "json" };
```

| Part | What it does |
| ---- | ------------ |
| `import fortunes` | Bring the data in and call it `fortunes` |
| `from "./fortunes.json"` | The file path (relative to your script) |
| `with { type: "json" }` | Tells Node.js this is JSON, not JavaScript |

The `with { type: "json" }` part is required in modern Node.js for security — it prevents accidentally running code that pretends to be data.

## Common import mistakes

The JSON import syntax is easy to get wrong. Here's what happens:

### Missing the `with` keyword

```javascript
// WRONG - missing "with"
import fortunes from "./fortunes.json" { type: "json" };
```

**Error:** `SyntaxError: Unexpected token '{'`

**Fix:** Add `with` before the curly braces.

### Forgetting the assertion entirely

```javascript
// WRONG - no assertion
import fortunes from "./fortunes.json";
```

**Error:** `TypeError: Unknown file extension ".json"`

**Fix:** Add `with { type: "json" }` at the end.

### Using old syntax

```javascript
// WRONG - "assert" is deprecated
import fortunes from "./fortunes.json" assert { type: "json" };
```

**Note:** `assert` works in older Node.js but shows a deprecation warning. Use `with` instead.

### The correct syntax

```javascript
// CORRECT
import fortunes from "./fortunes.json" with { type: "json" };
```

---

## Try it yourself

1. Create a file called `test.json`:

```json
[
  { "name": "Alice", "score": 95 },
  { "name": "Bob", "score": 87 }
]
```

1. Create `test.js`:

```javascript
import students from "./test.json" with { type: "json" };

console.log(students[0].name); // What prints?
console.log(students.length);  // And this?
```

1. Run it: `node test.js`
