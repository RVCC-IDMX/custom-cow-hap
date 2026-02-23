# JSON Schema validation in VS Code

This guide explains how to use JSON Schema to validate your fortunes data file.

## What is JSON Schema?

JSON Schema is a vocabulary for describing the structure of JSON data. Think of it as a blueprint that defines:

- What fields are required
- What types each field should be (string, number, array, etc.)
- What values are allowed (enums, patterns, min/max)

## Why use it for fortunes?

When you refactor your fortunes from a JavaScript array to a JSON file, you're separating data from code. JSON Schema adds a safety net:

- **Catches typos** — misspelled field names get flagged
- **Enforces types** — can't accidentally use a string where an array belongs
- **Documents structure** — the schema IS the documentation
- **AI understands it** — Copilot reads your schema and suggests valid data

## How it works in VS Code

Two files work together:

| File | Purpose |
|------|---------|
| `fortunes.schema.json` | Defines the structure of your fortunes |
| `.vscode/settings.json` | Tells VS Code to apply the schema to `fortunes.json` |

When you open `fortunes.json`, VS Code automatically:

- **Validates** your data against the schema
- **Shows red squiggles** on errors
- **Provides autocomplete** for field names and enum values
- **Displays documentation** when you hover over fields

No setup required — it just works when you open the project in VS Code.

---

## Your schema, your design

In Part 1 of this assignment, you'll design your own fortune schema. There's no single "correct" structure — it depends on what data you want to store with each fortune.

### Simple: Just strings

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Fortunes",
  "type": "array",
  "items": {
    "type": "string"
  }
}
```

This validates a simple array like `["Fortune one", "Fortune two"]`.

### With categories

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Fortunes",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["text", "category"],
    "properties": {
      "text": {
        "type": "string",
        "description": "The fortune message"
      },
      "category": {
        "type": "string",
        "enum": ["coding", "motivation", "life", "humor"],
        "description": "Category for filtering"
      }
    },
    "additionalProperties": false
  }
}
```

### With authors and tags

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "Fortunes",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["text"],
    "properties": {
      "text": {
        "type": "string",
        "description": "The fortune message"
      },
      "author": {
        "type": "string",
        "description": "Who said or wrote this"
      },
      "tags": {
        "type": "array",
        "items": { "type": "string" },
        "description": "Keywords for filtering"
      },
      "dateAdded": {
        "type": "string",
        "pattern": "^\\d{4}-\\d{2}-\\d{2}$",
        "description": "When this fortune was added (YYYY-MM-DD)"
      }
    },
    "additionalProperties": false
  }
}
```

---

## Connecting schema to VS Code

The playground test files are already validated out of the box — open `test-fortune-errors.json` and you'll see red squiggles immediately.

After creating your own `fortunes.schema.json`, update `.vscode/settings.json` to validate your data file too:

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

This tells VS Code which schema to apply to which files.

---

## Try it yourself

### See validation in action

1. Open `fortunes.json`
2. Make an intentional error (wrong type, missing field, invalid enum)
3. You'll see a red squiggle — hover over it to see the error message
4. Press `Ctrl+Z` to undo

### See autocomplete in action

1. Open `fortunes.json`
2. Inside an object, type `"` and press `Ctrl+Space` (Windows/Linux) or `Cmd+Space` (Mac)
3. VS Code shows available field names from your schema

### Explore the playground

The `docs/json-playground/` folder is already set up for experimentation:

- `test-fortune-valid.json` — A correct file with no errors
- `test-fortune-errors.json` — A broken file showing common mistakes (validated against `example-schema-full.json`)

Open `test-fortune-errors.json` to see red squiggles highlighting problems like:

| Error | What's wrong | Fix |
| ----- | ------------ | --- |
| Invalid category | `"invalid-category-name"` not in enum | Use coding, motivation, life, or humor |
| Wrong tags type | String instead of array | Use `["tag1", "tag2"]` |
| Bad date format | `"February 20, 2026"` doesn't match pattern | Use `"2026-02-20"` (YYYY-MM-DD) |
| Extra field | `extraField` not in schema | Remove it |
| Missing text | Last fortune has no `text` property | Add required field |

---

## Schema building blocks

### Required fields

```json
"required": ["text", "category"]
```

These fields must be present. Missing one triggers an error.

### Type constraints

```json
"type": "string"
"type": "number"
"type": "array"
"type": "object"
"type": "boolean"
```

### Enum (fixed values)

```json
"category": {
  "type": "string",
  "enum": ["coding", "motivation", "life"]
}
```

Only these exact values are valid.

### Pattern (regex)

```json
"dateAdded": {
  "type": "string",
  "pattern": "^\\d{4}-\\d{2}-\\d{2}$"
}
```

Must match the pattern (YYYY-MM-DD in this case).

### Array items

```json
"tags": {
  "type": "array",
  "items": { "type": "string" }
}
```

An array where every item must be a string.

### No extra fields

```json
"additionalProperties": false
```

Rejects any fields not defined in `properties`. Catches typos in field names.

---

## Common validation errors

| Error message | Meaning | Fix |
|---------------|---------|-----|
| "Missing property 'text'" | Required field is absent | Add the missing field |
| "Value is not accepted" | Enum value is wrong | Use one of the allowed values |
| "Incorrect type. Expected 'array'" | Wrong type | Change string to array, etc. |
| "String does not match pattern" | Format is wrong | Follow the pattern (e.g., YYYY-MM-DD) |
| "Property 'foo' is not allowed" | Unknown field | Remove it or fix the typo |

---

## Why this matters for later

This schema validation experience prepares you for:

- **Cattlelog assignment** — Uses the same JSON Schema approach for creature files
- **API development** — Request/response validation uses similar concepts
- **Configuration files** — Many tools (ESLint, Prettier, tsconfig) use JSON Schema
- **AI collaboration** — Copilot reads schemas and generates valid data

---

## Learn more

- [JSON Schema official site](https://json-schema.org/)
- [VS Code JSON editing](https://code.visualstudio.com/docs/languages/json)
- [Understanding JSON Schema](https://json-schema.org/understanding-json-schema/) — Comprehensive tutorial
