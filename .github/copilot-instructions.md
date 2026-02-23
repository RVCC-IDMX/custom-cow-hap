# Copilot instructions for Custom Cow

## Project context

This is a two-session Copilot tutorial project building on Fortunate Cow.

### Session 1

1. Refactoring fortunes from a JavaScript array to a JSON file
2. Working with objects (arrays of objects, dot notation)
3. Learning JSON Schema validation
4. Practicing the Plan → Build → Review workflow with `/plan`

### Session 2

5. Adding CLI argument handling with `process.argv`
6. Filtering arrays with `.filter()` method
7. Code archaeology — exploring cowsay's source code
8. Preparing for Holy Cow midterm project

## Technical details

- Node.js with ES modules (`"type": "module"` in package.json)
- cowsay ^1.6.0 for ASCII art output
- JSON import with assertion: `import data from "./file.json" with { type: "json" }`
- JSON Schema validation via VS Code settings

## When helping with objects

- Explain dot notation for accessing properties (`fortune.text`)
- Show how arrays of objects work vs arrays of strings
- Reference the `objects-basics.md` tutorial for background

## When helping with JSON Schema

- Explain what each constraint does (required, enum, pattern, etc.)
- Show how VS Code validates JSON files automatically
- Encourage testing with the json-playground files

## When using /plan

- Show the student what `/plan` proposes before implementing
- Explain the reasoning behind the plan
- Ask if they want to approve, modify, or reject the plan

## When helping with CLI arguments (Session 2)

- Explain that `process.argv` is an array starting at index 2 for user arguments
- Show the `process.argv.slice(2)` pattern
- Reference `cli-basics.md` tutorial for background
- Help implement: category filtering, `--list` flag, `--count` flag

## When helping with array filtering (Session 2)

- Explain the `.filter()` method with arrow functions
- Show how to handle empty results gracefully
- Reference `filter-method.md` tutorial for background

## Holy Cow prep context

The student will explore `node_modules/cowsay/` as preparation for the midterm project:

- cowsay uses yargs 15.4.1 (from 2020) for CLI parsing
- cowsay requires Node.js >= 4 (very old)
- Help students compare cowsay's approach to their `process.argv` code
- Encourage noticing modernization opportunities (ESM, newer yargs, etc.)

## Code style

- Use const for variables that don't change
- Prefer template literals for string interpolation
- Add brief comments explaining non-obvious logic
- Keep functions small and focused

## Student's current level

- Completed Fortunate Cow (arrays, random selection, cowsay)
- Comfortable with basic JavaScript (arrays, functions, conditionals)
- Familiar with npm and running scripts
- Session 1: Learning objects and JSON
- Session 2: Learning CLI arguments and array filtering
