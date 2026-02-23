# Reading package.json like a detective

Every npm package tells a story through its `package.json`. Learning to read this file helps you understand what you're working with — and what might need updating.

---

## The basics

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "What this project does",
  "main": "index.js"
}
```

| Field | What it tells you |
|-------|------------------|
| `name` | The package name (what you `npm install`) |
| `version` | Current version number |
| `description` | One-line summary |
| `main` | The entry point when you `require()` or `import` it |

---

## Reading dependencies

Dependencies tell you what the project needs to run:

```json
{
  "dependencies": {
    "cowsay": "^1.6.0",
    "chalk": "^5.3.0"
  },
  "devDependencies": {
    "tape": "^5.7.4"
  }
}
```

| Section | What it means |
|---------|--------------|
| `dependencies` | Required to run the code |
| `devDependencies` | Only needed for development (testing, building) |

### Version numbers decoded

| Pattern | Meaning |
|---------|---------|
| `^1.6.0` | Compatible with 1.6.0 (allows 1.6.1, 1.7.0, but not 2.0.0) |
| `~1.6.0` | Approximately 1.6.0 (allows 1.6.1, but not 1.7.0) |
| `1.6.0` | Exactly this version |
| `>=4` | This version or higher |

---

## Reading scripts

Scripts are commands you can run with `npm run`:

```json
{
  "scripts": {
    "start": "node fortune.js",
    "test": "tape test/**/*.js",
    "prepare": "rollup -c"
  }
}
```

| Script | How to run it |
|--------|--------------|
| `start` | `npm start` (special — no `run` needed) |
| `test` | `npm test` (special — no `run` needed) |
| `prepare` | `npm run prepare` |

**Detective tip:** The scripts tell you how the project is meant to be used.

---

## Reading the engine

```json
{
  "engines": {
    "node": ">= 4"
  }
}
```

This tells you the minimum Node.js version. `>= 4` is very old — Node.js 4 came out in 2015! This is a clue that the codebase might be outdated.

---

## Spotting age clues

When looking at a package.json, watch for:

| Clue | What it might mean |
|------|-------------------|
| Old `engines.node` | Code uses older JavaScript patterns |
| `var` keyword in code | Pre-ES6 style (could use `const`/`let`) |
| Callback-based APIs | Could potentially use Promises/async |
| No `type: "module"` | Uses CommonJS (`require`) not ESM (`import`) |
| Old dependency versions | May have security updates available |

---

## Example: Reading cowsay's package.json

```json
{
  "name": "cowsay",
  "version": "1.6.0",
  "engines": {
    "node": ">= 4"
  },
  "dependencies": {
    "yargs": "15.4.1"
  }
}
```

**What this tells us:**

1. **`node >= 4`** — Very old requirement. Modern Node.js is 20+.
2. **`yargs: 15.4.1`** — Pinned to a specific old version (current yargs is 17+)
3. **No `type: "module"`** — Uses CommonJS, not modern ESM

**Questions a developer might ask:**

- Why is the Node.js requirement so old?
- Are there security updates for yargs 15?
- Would updating to ESM break existing users?

---

## Why this matters

Understanding `package.json` helps you:

1. **Evaluate packages** before installing them
2. **Identify outdated code** that might need updating
3. **Understand project structure** before diving into code
4. **Contribute to open source** by spotting improvement opportunities

For your midterm (Holy Cow!), you'll use these skills to analyze the cowsay package and identify what could be modernized.

---

## Try it yourself

Open any `node_modules/[package]/package.json` and answer:

1. What Node.js version does it require?
2. What are its dependencies?
3. What scripts does it define?
4. Any clues that it might be old or outdated?

The more you practice reading these files, the faster you'll spot patterns.
