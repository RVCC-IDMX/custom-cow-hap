# CLI argument parsing libraries

You've learned to parse arguments with `process.argv.slice(2)`. That's the foundation — understanding what's happening under the hood. But real-world CLI tools use libraries that handle the tedious parts for you.

This reference introduces the options, from built-in to full-featured.

---

## Level 0: Raw process.argv (what you learned)

```javascript
const args = process.argv.slice(2);
const category = args[0];

if (args.includes("--list")) {
  // handle flag
}
```

**Pros:** No dependencies, understand exactly what's happening
**Cons:** Manual work for flags, validation, help text

---

## Level 1: util.parseArgs (built-in Node.js)

Node.js 18+ includes a built-in argument parser. No npm install needed.

```javascript
import { parseArgs } from "node:util";

const { values, positionals } = parseArgs({
  options: {
    list: { type: "boolean", short: "l" },
    count: { type: "boolean", short: "c" },
    category: { type: "string", short: "C" },
  },
  allowPositionals: true,
});

// npm start --list        → values.list = true
// npm start -l            → values.list = true (short form)
// npm start coding        → positionals = ["coding"]
// npm start --category=coding → values.category = "coding"
```

**Pros:**
- Built into Node.js — no dependencies
- Handles short flags (-l) and long flags (--list)
- Separates flags from positional arguments

**Cons:**
- No automatic help generation
- No validation beyond type checking
- Relatively new (Node.js 18+)

**Best for:** Simple scripts, learning, keeping dependencies minimal

**Learn more:** [Parsing command line arguments with util.parseArgs()](https://2ality.com/2022/08/node-util-parseargs.html)

---

## Level 2: yargs (industry standard)

The most feature-rich option. Used by major CLI tools.

```bash
npm install yargs
```

```javascript
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv))
  .command("$0 [category]", "Show a fortune", (yargs) => {
    yargs.positional("category", {
      describe: "Filter by category",
      type: "string",
    });
  })
  .option("list", {
    alias: "l",
    type: "boolean",
    description: "List available categories",
  })
  .option("count", {
    alias: "c",
    type: "boolean",
    description: "Show fortune counts",
  })
  .help()
  .parseSync();

// Automatic help:
// npm start --help
// Shows formatted usage, options, descriptions
```

**Pros:**
- Automatic help generation
- Built-in validation (required options, allowed values)
- Middleware support
- Extensive documentation
- Battle-tested in production

**Cons:**
- Larger bundle size
- Fluent API can be verbose
- Learning curve for advanced features

**Best for:** Production CLI tools, complex argument handling

**Learn more:** [yargs documentation](https://yargs.js.org/)

---

## Level 3: commander (alternative standard)

Similar popularity to yargs, different style. Favors object-oriented approach.

```bash
npm install commander
```

```javascript
import { program } from "commander";

program
  .name("fortune")
  .description("Display a random fortune")
  .argument("[category]", "Filter by category")
  .option("-l, --list", "List available categories")
  .option("-c, --count", "Show fortune counts")
  .action((category, options) => {
    if (options.list) {
      // show categories
    } else if (options.count) {
      // show counts
    } else if (category) {
      // filter by category
    } else {
      // random fortune
    }
  });

program.parse();
```

**Pros:**
- Clean, readable API
- Excellent for Git-style subcommands
- Strong TypeScript support
- Well-documented

**Cons:**
- Less built-in validation than yargs
- Subcommand isolation can be confusing

**Best for:** Tools with multiple subcommands (like git)

**Learn more:** [commander.js documentation](https://github.com/tj/commander.js)

---

## Level 4: citty (modern, TypeScript-first)

From the UnJS ecosystem (same team behind Nuxt). Built on `util.parseArgs`.

```bash
npm install citty
```

```javascript
import { defineCommand, runMain } from "citty";

const main = defineCommand({
  meta: {
    name: "fortune",
    description: "Display a random fortune",
  },
  args: {
    category: {
      type: "positional",
      description: "Filter by category",
      required: false,
    },
    list: {
      type: "boolean",
      alias: "l",
      description: "List available categories",
    },
    count: {
      type: "boolean",
      alias: "c",
      description: "Show fortune counts",
    },
  },
  run({ args }) {
    if (args.list) {
      // show categories
    } else if (args.count) {
      // show counts
    } else if (args.category) {
      // filter
    } else {
      // random
    }
  },
});

runMain(main);
```

**Pros:**
- Modern, declarative API
- Excellent TypeScript inference
- Lightweight (uses native parseArgs)
- Async/lazy command support
- Auto-generated help

**Cons:**
- Newer, smaller community
- Less documentation than yargs/commander

**Best for:** TypeScript projects, modern Node.js

**Learn more:** [citty on GitHub](https://github.com/unjs/citty)

---

## Level 5: meow (minimal)

For when you want something tiny and declarative.

```bash
npm install meow
```

```javascript
import meow from "meow";

const cli = meow(
  `
  Usage
    $ fortune [category]

  Options
    --list, -l    List categories
    --count, -c   Show counts

  Examples
    $ fortune coding
    $ fortune --list
`,
  {
    importMeta: import.meta,
    flags: {
      list: { type: "boolean", shortFlag: "l" },
      count: { type: "boolean", shortFlag: "c" },
    },
  }
);

// cli.input = ["coding"]  (positional args)
// cli.flags = { list: false, count: false }
```

**Pros:**
- Tiny bundle size
- Strong TypeScript inference
- Declarative, readable
- Help text is just a string (easy to write)

**Cons:**
- Minimal features by design
- No subcommand support
- Less validation

**Best for:** Small utilities, when bundle size matters

**Learn more:** [meow on GitHub](https://github.com/sindresorhus/meow)

---

## Which should you use?

| Situation | Recommendation |
|-----------|----------------|
| Learning / school projects | `process.argv` → `util.parseArgs` |
| Simple script, no deps | `util.parseArgs` |
| Production CLI tool | `yargs` or `commander` |
| TypeScript project | `citty` or `meow` |
| Tool with subcommands | `commander` |
| Need validation/middleware | `yargs` |
| Minimal bundle size | `meow` |

---

## Progression path

For this class, we recommend:

1. **Week 4:** Learn raw `process.argv` to understand fundamentals
2. **Midterm option:** Try `util.parseArgs` for a step up

Understanding the low-level approach first makes the libraries feel like magic that you actually understand.

---

## Connection to Holy Cow

> **For your midterm:** The cowsay package you've been using since Week 2 uses yargs 15.4.1 — a version from 2020. Open `node_modules/cowsay/cli.js` and you'll see yargs in action.
>
> Some questions to consider:
>
> - How does cowsay's yargs usage compare to your `process.argv` code?
> - What would it take to update cowsay to yargs 17+?
> - Could you replace yargs with `util.parseArgs` (zero dependencies)?
>
> These are exactly the kinds of modernization opportunities you might propose for Holy Cow!

---

## Sources

- [Command-Line Argument Parsing: Yargs vs Commander](https://medium.com/@sohail_saifi/command-line-argument-parsing-yargs-vs-commander-and-why-you-should-care-e9c8dac1fcc5)
- [Parsing command line arguments with util.parseArgs()](https://2ality.com/2022/08/node-util-parseargs.html)
- [Citty, an elegant CLI builder by UnJS](https://medium.com/@thinkthroo/citty-an-elegant-cli-builder-by-unjs-8bb57af4f63d)
- [Command-line argument parsing with Node.js core](https://simonplend.com/command-line-argument-parsing-with-node-js-core/)
