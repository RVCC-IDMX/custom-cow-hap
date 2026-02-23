# JSON syntax guide

> **Note:** This is the same guide from the Cowsay assignment (Use Agent Mode). It's included here for reference — you already know this!

JSON (JavaScript Object Notation) is a format for storing data. In the Cowsay assignment, you edited `package.json`. Now in Custom Cow, you'll create your own `fortunes.json` file using the same syntax rules.

## The golden rules

1. **Property names must be in double quotes**
2. **String values must be in double quotes**
3. **No trailing commas**
4. **Commas between items, but not after the last one**

## Basic structure

JSON uses two main structures:

### Objects (curly braces)

Objects hold named properties:

```json
{
  "name": "my-project",
  "version": "1.0.0"
}
```

### Arrays (square brackets)

Arrays hold lists of values:

```json
{
  "keywords": ["cowsay", "ascii", "fun"]
}
```

## The comma rule

Every item except the last needs a comma after it.

**Correct:**

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A fun project"
}
```

**Wrong (missing comma):**

```json
{
  "name": "my-project"
  "version": "1.0.0"
}
```

**Wrong (trailing comma):**

```json
{
  "name": "my-project",
  "version": "1.0.0",
}
```

Note the comma after the last line — JSON doesn't allow this.

## Adding a new line

When you add a new property, remember:

1. Add a comma to the line **above** your new line
2. Don't put a comma on your new line (if it's the last one)

### Example: Adding a fortune

Before:

```json
[
  { "text": "First fortune", "category": "wisdom" }
]
```

After:

```json
[
  { "text": "First fortune", "category": "wisdom" },
  { "text": "Second fortune", "category": "humor" }
]
```

Notice: comma added to the first object, no comma on the new last object.

## Quotes in JSON

JSON requires double quotes (`"`) for both property names and string values.

**Correct:**

```json
{
  "text": "Hello world"
}
```

**Wrong (single quotes):**

```json
{
  'text': 'Hello world'
}
```

**Wrong (no quotes on property name):**

```json
{
  text: "Hello world"
}
```

## Escaping quotes inside strings

If your string contains a quote, escape it with a backslash:

```json
{
  "text": "The cow says \"Hello!\""
}
```

## Common mistakes and fixes

### Missing comma

**Error:** `Unexpected string` or `Expected comma`

**Problem:**

```json
{
  "text": "Hello"
  "category": "greeting"
}
```

**Fix:** Add a comma after `"Hello"`:

```json
{
  "text": "Hello",
  "category": "greeting"
}
```

### Extra comma (trailing comma)

**Error:** `Unexpected token }` or `Expected property name`

**Problem:**

```json
{
  "text": "Hello",
  "category": "greeting",
}
```

**Fix:** Remove the comma after `"greeting"`:

```json
{
  "text": "Hello",
  "category": "greeting"
}
```

### Wrong quote type

**Error:** `Unexpected token`

**Fix:** Use double quotes, not single quotes.

### Unquoted property name

**Error:** `Expected property name`

**Fix:** Put double quotes around property names.

## Checking your JSON

VS Code helps you find JSON errors:

1. **Red squiggly lines** show where errors are
2. **Hover over the error** to see what's wrong
3. **Problems panel** (View → Problems) lists all errors

If you're stuck, you can also paste your JSON into a validator like [jsonlint.com](https://jsonlint.com/).

## Quick reference

| Rule                  | Correct                     | Wrong                           |
| --------------------- | --------------------------- | ------------------------------- |
| Property names        | `"name"`                    | `name` or `'name'`              |
| String values         | `"value"`                   | `'value'`                       |
| Commas                | After each item except last | Trailing comma or missing comma |
| Quotes inside strings | `"say \"hi\""`              | `"say "hi""`                    |

## Summary

- Use double quotes for property names and string values
- Put commas after every item except the last
- Watch for red squiggly lines in VS Code
- When adding a line, add a comma to the line above
