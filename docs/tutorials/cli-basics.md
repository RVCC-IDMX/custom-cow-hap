# Command-line arguments with process.argv

When you run a Node.js script from the terminal, you can pass extra information after the command. This is how CLI tools like `git`, `npm`, and `node` receive instructions from you.

---

## What is process.argv?

`process.argv` is an array that Node.js automatically creates. It contains everything you typed on the command line.

```javascript
console.log(process.argv);
```

Running `npm start coding` would show something like:

```javascript
[
  "/usr/local/bin/node", // [0] - Path to Node.js
  "/path/to/fortune.js", // [1] - Path to your script
  "coding", // [2] - Your first argument!
];
```

---

## The index 2 gotcha

**Your arguments start at index 2, not 0.**

This trips up everyone at first. Here's why:

| Index | Contains                 | Example               |
| ----- | ------------------------ | --------------------- |
| 0     | Node.js executable       | `/usr/local/bin/node` |
| 1     | Your script file         | `/path/to/fortune.js` |
| 2     | First argument you typed | `coding`              |
| 3     | Second argument (if any) | `--verbose`           |

---

## The slice(2) pattern

To get just YOUR arguments (ignoring node and script paths), use `.slice(2)`:

```javascript
// Get only the arguments you care about
const args = process.argv.slice(2);

// Now args[0] is your first argument
const category = args[0]; // "coding" when you run: npm start coding
```

**Why slice(2)?** The `.slice(2)` method creates a new array starting from index 2. It "slices off" the first two elements you don't need.

### Visual: Before and after slice(2)

```text
process.argv (what Node.js gives you):
┌─────────────────────┬─────────────────────┬──────────┬────────┐
│ [0]                 │ [1]                 │ [2]      │ [3]    │
│ /usr/local/bin/node │ /path/to/fortune.js │ "coding" │ "--list│
└─────────────────────┴─────────────────────┴──────────┴────────┘
        ↓ slice(2) removes first two elements

args (what you actually want):
┌──────────┬─────────┐
│ [0]      │ [1]     │
│ "coding" │ "--list"│
└──────────┴─────────┘
```

Now `args[0]` is your first argument, not the node path!

---

## Important: Passing flags through npm

> **Watch out!** When using `npm start`, flags like `--list` get captured by npm itself, not your script.
>
> To pass flags to your script, use double-dash (`--`) to separate npm's flags from yours:
>
> ```bash
> npm start -- --list    ✓  (passes --list to fortune.js)
> npm start --list       ✗  (npm intercepts --list)
> ```
>
> The `--` tells npm: "Everything after this goes to the script."

---

## Checking for arguments

### Check if an argument exists

```javascript
const args = process.argv.slice(2);

if (args[0]) {
  console.log("You passed:", args[0]);
} else {
  console.log("No argument provided");
}
```

### Check for flags like --list

```javascript
const args = process.argv.slice(2);

if (args.includes("--list")) {
  console.log("List mode activated!");
}
```

---

## Common patterns

### Pattern 1: Optional category filter

```javascript
const args = process.argv.slice(2);
const category = args[0]; // undefined if not provided

if (category) {
  // Filter to specific category
  console.log(`Filtering to: ${category}`);
} else {
  // Show all (default behavior)
  console.log("Showing all");
}
```

### Pattern 2: Multiple flags

```javascript
const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log("Usage: npm start [category] [--list] [--count]");
} else if (args.includes("--list")) {
  console.log("Available categories: ...");
} else if (args.includes("--count")) {
  console.log("Fortune counts: ...");
} else if (args[0]) {
  console.log(`Filtering to: ${args[0]}`);
} else {
  console.log("Random fortune from all");
}
```

---

## Debugging tip

When your CLI code isn't working, add this at the top of your script:

```javascript
console.log("Arguments received:", process.argv.slice(2));
```

This shows exactly what your script is receiving, helping you spot issues like:

- Empty array `[]` when you expected an argument
- Unexpected values from typos
- Arguments in wrong order

---

## Try it yourself

Add this to the top of `fortune.js` temporarily:

```javascript
const args = process.argv.slice(2);
console.log("args:", args);
console.log("args[0]:", args[0]);
console.log("Has --list?", args.includes("--list"));
```

Then try these commands:

```bash
npm start              # args: []
npm start coding       # args: ["coding"]
npm start --list       # args: ["--list"]
npm start coding --list # args: ["coding", "--list"]
```

---

## Why this matters

Understanding `process.argv` unlocks:

- **Building your own CLI tools** — Like the ones you use daily
- **Understanding git/npm** — They use the same patterns
- **Web development prep** — URL query parameters work similarly (`?category=coding`)

You're learning how real tools are built!

---

## Going further

Once you're comfortable with raw `process.argv`, there are libraries that handle argument parsing for you:

- **util.parseArgs** — Built into Node.js 18+, no dependencies needed
- **yargs** — Industry standard, lots of features
- **commander** — Great for tools with subcommands
- **citty** — Modern, TypeScript-first

See [reference/cli-libraries.md](../reference/cli-libraries.md) for examples of each.
