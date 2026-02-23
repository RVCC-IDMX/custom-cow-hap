# Week 4: Custom Cow

> **Design decisions are yours to make.**
>
> This assignment is different from previous weeks. Instead of following a fixed path, you'll make design decisions about YOUR data structure. There's no single "correct" schema — there's the one that fits YOUR fortunes.
>
> The AI is your collaborator in discovery. Ask it to brainstorm options you haven't considered. Then YOU decide what makes sense for your project.
>
> **The workflow matters.** This assignment teaches Plan → Build → Review: use premium AI for planning and review, free-tier for implementation. This is how professionals budget AI resources.
>
> **You own this code now.** You're starting with HAP's working script. Feel free to add, subtract, or modify — that's what professional developers do. Keep what works, change what doesn't fit your vision, and make it yours.

---

## What you're building

### Session 1

1. **A JSON data file** — Your fortunes, separated from code
2. **A JSON Schema** — Your design for validating fortune data
3. **Updated fortune.js** — Modified to work with objects
4. **An upgrade** — One enhancement of your choice

### Session 2

1. **CLI filtering** — Filter fortunes by category from the command line
2. **Utility flags** — `--list` and `--count` commands
3. **Error handling** — Graceful messages for invalid input

## Before you begin

- [ ] Completed Fortunate Cow assignment
- [ ] VS Code with GitHub Copilot extension
- [ ] Node.js installed
- [ ] Understand arrays and basic JavaScript

## If you get stuck

| What you need    | Command                     |
| ---------------- | --------------------------- |
| Open terminal    | View → Terminal (or Ctrl+`) |
| Install packages | `npm install`               |
| Run your script  | `npm start`                 |

**Ask AI for help.** Describe your problem — this is part of learning to work with AI.

---

## Part 1: Design your schema

This is the discovery phase. Before writing any code, figure out what data structure makes sense for YOUR fortunes.

### Step 1: Study the examples

Open each file in `docs/json-playground/` and understand what they do:

| File                             | What it validates                               |
| -------------------------------- | ----------------------------------------------- |
| `example-schema-simple.json`     | Just an array of strings                        |
| `example-schema-categories.json` | Objects with text and category                  |
| `example-schema-full.json`       | Objects with text, category, tags, author, date |

### Step 2: Choose your theme

What kind of fortunes do YOU want? Pick a theme that interests you:

- **Coding tips** — Programming wisdom and debugging advice
- **Motivational quotes** — Encouragement and inspiration
- **Jokes or puns** — Humor to brighten your day
- **Song lyrics** — Lines from your favorite songs
- **Life advice** — Lessons learned
- **Your own idea** — Whatever speaks to you

Your theme will influence your schema design. Coding tips might need a `language` field. Motivational quotes might need an `author`. Jokes might need a `mood`.

### Step 3: Brainstorm with AI

This is your first planning conversation. Use a 1x premium model for this. See [reference/choosing-models.md](reference/choosing-models.md) for details.

**Start with this prompt (adapt for your theme):**

> "I want to design a JSON file to hold [YOUR THEME] fortunes. Let's brainstorm what data might belong with each fortune — think outside the box to make it future-proof."

**Let AI surface possibilities:**

- Categories, tags, or multiple tags?
- Author, source, or attribution?
- Mood, tone, or energy level?
- Date added or favorite flag?

**Then narrow down based on YOUR fortunes:**

- "My fortunes are mostly coding tips — what fields make sense?"
- "I want to filter by mood — how should I structure that?"
- "I just want simple text — is a flat array okay?"

**Simple is valid.** If you just want an array of text strings, that's a legitimate design choice. Don't add complexity you won't use.

### Step 4: Create your schema

Create `fortunes.schema.json` in the project root. Base it on your design decisions.

See [reference/json-schema-validation.md](reference/json-schema-validation.md) for schema building blocks.

### Step 5: Create your data file

Create `fortunes.json` with your fortunes in the structure your schema defines.

### Step 6: Enable validation

Open `.vscode/settings.json`. The playground files are already validated. Add your schema by replacing the existing content with:

```json
{
  "json.schemas": [
    {
      "fileMatch": ["docs/json-playground/test-*.json"],
      "url": "./docs/json-playground/example-schema-full.json"
    },
    {
      "fileMatch": ["fortunes.json"],
      "url": "./fortunes.schema.json"
    }
  ]
}
```

Now when you open `fortunes.json`, VS Code validates it against your schema. Try introducing an error — you should see a red squiggle.

### Step 7: Update fortune.js

Modify `fortune.js` to import from your JSON file instead of the hardcoded array.

Since your fortunes are now objects (not just strings), you'll need to access the text property:

```javascript
// Before (strings):
console.log(cowsay.say({ text: todaysFortune }));

// After (objects):
console.log(cowsay.say({ text: todaysFortune.text }));
```

See [tutorials/objects-basics.md](tutorials/objects-basics.md) for more on working with objects.

See [tutorials/json-files.md](tutorials/json-files.md) for how to import JSON.

### Step 8: Choose your cow (optional)

Browse available cows at **[cattlelog.netlify.app](https://cattlelog.netlify.app/)** and pick one that fits your theme.

Some suggestions:

- **Coding tips** → `dragon`, `tux`, or `stegosaurus`
- **Motivational** → `elephant`, `koala`, or `bunny`
- **Jokes** → `tux`, `duck`, or use random (`r: true`)

```javascript
// Use a specific cow
console.log(cowsay.say({ text: todaysFortune.text, f: "tux" }));

// Or get a random cow each time
console.log(cowsay.say({ text: todaysFortune.text, r: true }));
```

See [reference/cowsay-options.md](reference/cowsay-options.md) for all cowsay options.

**Test it:** Run `npm start` — it should still work!

---

## Part 2: Add an upgrade

Pick **at least one** enhancement to add to your project. Try more if you're curious!

| Option             | Description                            | Complexity |
| ------------------ | -------------------------------------- | ---------- |
| Chalk colors       | Colorful terminal output               | Easy       |
| Time greetings     | "Good morning!" based on time          | Easy       |
| Filter by category | Show only fortunes matching a category | Medium     |
| Mood-based eyes    | Different eyes for different moods     | Medium     |
| Category-based cow | Different cow for each category        | Medium     |
| Your own idea      | Whatever interests you                 | Varies     |

**Pick upgrades that work with YOUR schema.** If you added a `mood` field, try mood-based eyes. If you have categories, try filtering or category-based creatures.

See [guides/adding-upgrades.md](guides/adding-upgrades.md) for prompts and examples.

### Use `/plan` to plan your upgrade

Before implementing your upgrade, use Copilot's `/plan` command to think it through:

1. Open Copilot Chat in VS Code
2. Type `/plan` followed by what you want to do:
   > `/plan I want to add mood-based eyes to my fortune script. My fortunes have a mood property.`
3. Copilot will research your code and propose a step-by-step plan
4. Review the plan — ask questions if something is unclear
5. Approve when ready, then Copilot implements it

**Why `/plan` matters:** It separates thinking from doing. You see the approach before any code changes, giving you a chance to understand and adjust.

### The workflow

| Phase      | Model      | What to do                                 |
| ---------- | ---------- | ------------------------------------------ |
| **Plan**   | 1x premium | Use `/plan` to get an implementation plan  |
| **Build**  | 0x (free)  | Approve the plan and let Copilot implement |
| **Review** | 1x premium | Check for bugs, understand the code        |

See [reference/choosing-models.md](reference/choosing-models.md) for model budgeting.

---

## Part 3: Code archaeology (Session 2 warm-up)

> **Before writing code, see how the pros did it.** You've been using cowsay since Week 2. Now let's look under the hood.

### Explore cowsay's CLI

Open `node_modules/cowsay/cli.js` and spend 5-10 minutes reading it. Don't worry about understanding everything — just notice patterns.

**Look for these specific things:**

- **Line 2:** It uses `require('yargs')` — a library instead of raw `process.argv`
- **Lines 56-68:** How it decides what to do based on flags (similar to your if/else)
- **Line 50:** How it declares which options are boolean flags

**Compare it to your fortune.js:**

- How does it handle command-line arguments?
- What looks familiar? What looks different?
- What would you change if you owned this code?

### Check the package.json

Open `node_modules/cowsay/package.json` and look for age clues:

- What Node.js version does it require?
- How old are the dependencies?

See [tutorials/reading-package-json.md](tutorials/reading-package-json.md) for guidance.

### Why this matters

You're about to add CLI features to your own code. Seeing how an established package handles arguments — even if it uses a library like yargs instead of raw `process.argv` — gives you context for what you're building.

For your midterm (Holy Cow!), you'll propose improvements to cowsay. This warm-up plants the seed.

---

## Part 4: Add CLI filtering

> **New skills:** Command-line arguments, array filtering, error handling
>
> Now that your fortunes have structure, let's make them interactive. You'll add the ability to filter fortunes by category from the command line.

### Expected CLI behavior

| Command             | Result                                     |
| ------------------- | ------------------------------------------ |
| `npm start`         | Random fortune from all categories         |
| `npm start coding`  | Random fortune from "coding" category only |
| `npm start --list`  | Display all available categories           |
| `npm start --count` | Show fortune counts by category            |

### Step 1: Understand process.argv

Before writing code, read how Node.js receives command-line arguments.

See [tutorials/cli-basics.md](tutorials/cli-basics.md).

**Key concept:** Your arguments start at index 2, not 0. Use `process.argv.slice(2)` to get just what you need.

### Step 2: Add category filtering

Use AI to help implement filtering:

> "I want to filter my fortunes by category. If I run `npm start coding`, show only fortunes where category equals 'coding'. Use the .filter() method."

See [tutorials/filter-method.md](tutorials/filter-method.md) for how `.filter()` works.

**Test it:** Run `npm start coding` (or whatever category you have) — does it filter correctly?

### Step 3: Add --list flag

Let users see what categories exist:

> "Add a --list flag that shows all unique categories in my fortunes.json"

**Sample output:**

```text
Available categories:
  - coding
  - motivation
  - life
```

**Test it:** Run `npm start -- --list` — does it show your categories?

### Step 4: Add --count flag

Show how many fortunes are in each category:

> "Add a --count flag that shows how many fortunes are in each category"

**Sample output:**

```text
Fortune counts by category:
  coding: 4
  motivation: 3
  life: 2
  Total: 9
```

**Test it:** Run `npm start -- --count` — do the numbers match your data?

### Step 5: Handle errors gracefully

What happens if someone runs `npm start nonexistent`? Add a helpful message instead of crashing or showing undefined.

```javascript
if (filtered.length === 0) {
  console.log(`No fortunes found for category "${category}".`);
  console.log("Available categories:", categories.join(", "));
  process.exit(1);
}
```

**Test it:** Run `npm start fakecategory` — does it show a helpful error?

### Debugging tip

If your CLI code isn't working, add this at the top of your script temporarily:

```javascript
console.log("Arguments received:", process.argv.slice(2));
```

This shows exactly what your script is receiving.

---

## Part 5: Document and reflect

1. **Update README.md** with sample output from your script
2. **Complete your reflection** in `ai-collaboration-summary-template.md`

---

## Checklist

Before submitting, verify your work with [CHECKLIST.md](CHECKLIST.md).

## Resources

### Tutorials

- [tutorials/objects-basics.md](tutorials/objects-basics.md) — Working with objects
- [tutorials/json-files.md](tutorials/json-files.md) — JSON files and importing
- [tutorials/json-syntax.md](tutorials/json-syntax.md) — JSON syntax rules
- [tutorials/arrays-basics.md](tutorials/arrays-basics.md) — Array reference
- [tutorials/math-random.md](tutorials/math-random.md) — Random selection pattern
- [tutorials/cli-basics.md](tutorials/cli-basics.md) — Command-line arguments (Session 2)
- [tutorials/filter-method.md](tutorials/filter-method.md) — Array filtering (Session 2)
- [tutorials/reading-package-json.md](tutorials/reading-package-json.md) — Understanding package.json (Holy Cow! prep)

### Guides

- [guides/adding-upgrades.md](guides/adding-upgrades.md) — Upgrade prompts and examples

### Reference

- [reference/choosing-models.md](reference/choosing-models.md) — Model budgeting guide
- [reference/json-schema-validation.md](reference/json-schema-validation.md) — Schema guide
- [reference/cowsay-options.md](reference/cowsay-options.md) — Cowsay customization
- [reference/cli-libraries.md](reference/cli-libraries.md) — CLI parsing libraries (next steps)
- [json-playground/](json-playground/) — Example schemas
- [JSON Schema official site](https://json-schema.org/)

---

## Remember

> Your design decisions are valid because they're yours.

There's no perfect schema. There's the one that fits YOUR fortunes and YOUR goals. Make choices, learn from them, and iterate.

You've got this!
