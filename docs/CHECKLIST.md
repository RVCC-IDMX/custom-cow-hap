# Assignment checklist

Use this checklist to track your progress. Check each item as you complete it.

---

## Setup

- [ ] Cloned the repository
- [ ] Ran `npm install` without errors
- [ ] Ran `npm start` and saw a cow with a fortune

---

## Part 1: Design and refactor

### Study the examples

- [ ] Opened `docs/json-playground/example-schema-simple.json`
- [ ] Opened `docs/json-playground/example-schema-categories.json`
- [ ] Opened `docs/json-playground/example-schema-full.json`
- [ ] Understand the difference between the three approaches

### Choose your theme

- [ ] Picked a theme for your fortunes (coding tips, motivational, jokes, etc.)

### Design your schema

- [ ] Decided what data to store with each fortune (just text? categories? authors? tags?)
- [ ] Discussed options with AI (Plan phase — use 1x premium model)
- [ ] Created `fortunes.schema.json` with YOUR design
- [ ] Read [docs/reference/json-schema-validation.md](reference/json-schema-validation.md)

### Refactor to JSON

- [ ] Created `fortunes.json` matching your schema
- [ ] Updated `fortune.js` to import from JSON file
- [ ] Updated `fortune.js` to access object properties (e.g., `todaysFortune.text`)
- [ ] (Optional) Chose a cow that fits your theme (browse at [cattlelog.netlify.app](https://cattlelog.netlify.app/))
- [ ] Tested with `npm start` — still works!

### Enable validation

- [ ] Uncommented the schema settings in `.vscode/settings.json`
- [ ] Opened `fortunes.json` — VS Code now validates it
- [ ] Tested: introduced an error, saw red squiggle, fixed it

---

## Part 2: Add an upgrade

**Upgrade chosen:**

> (Write your upgrade here, e.g., "chalk colors" or "mood-based eyes")

- [ ] Chose at least one upgrade from the options
- [ ] (Optional) Tried additional upgrades

### Use `/plan`

- [ ] Used `/plan` to get Copilot's proposed approach
- [ ] Reviewed the plan before approving
- [ ] Made at least one decision about the plan (approve, modify, or ask questions)
- [ ] Tested the upgrade works

---

## Part 3: Code archaeology (Session 2 warm-up)

- [ ] Opened `node_modules/cowsay/cli.js` and explored for 5-10 minutes
- [ ] Noticed how it handles command-line arguments (uses yargs library)
- [ ] Opened `node_modules/cowsay/package.json` and checked Node.js version, dependencies
- [ ] Read [tutorials/reading-package-json.md](tutorials/reading-package-json.md)

---

## Part 4: CLI filtering

### Read the tutorials

- [ ] Read [tutorials/cli-basics.md](tutorials/cli-basics.md) — understand process.argv
- [ ] Read [tutorials/filter-method.md](tutorials/filter-method.md) — understand .filter()

### Implement category filtering

- [ ] `npm start coding` filters to only "coding" category (use your category name)
- [ ] `npm start` still works (random from all)
- [ ] Invalid category shows helpful error message

### Add utility flags

- [ ] `npm start -- --list` shows available categories
- [ ] `npm start -- --count` shows counts per category

### Test all modes

- [ ] Tested filtering with a valid category
- [ ] Tested with invalid category — error message appears
- [ ] Tested `--list` and `--count` flags

---

## Part 5: Reflection

- [ ] Completed `ai-collaboration-summary-template.md`
- [ ] Answered all 4 reflection questions

---

## Before submitting

- [ ] All code runs without errors
- [ ] `npm start` displays a fortune from your JSON file
- [ ] `npm start [category]` filters correctly
- [ ] `npm start -- --list` shows categories
- [ ] `npm start -- --count` shows counts
- [ ] No red squiggles in JSON files
- [ ] Reflection is complete

---

## Quick verification commands

```bash
# Should display a random fortune
npm start

# Should filter to specific category
npm start coding

# Should list categories (note the -- before --list)
npm start -- --list

# Should show counts
npm start -- --count

# Should show helpful error
npm start nonexistent
```
