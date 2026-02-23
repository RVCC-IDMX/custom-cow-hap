# Adding upgrades with AI

This guide helps you work with AI to add upgrades to your Custom Cow script.

## Pick upgrades that fit your schema

The best upgrades use the fields YOU designed:

| If your schema has... | Try these upgrades                     |
| --------------------- | -------------------------------------- |
| `category`            | Filter by category, category-based cow |
| `mood` or `tone`      | Mood-based eyes, mood-based colors     |
| `author`              | Display author below fortune           |
| `tags`                | Filter by tag, show tags as hashtags   |
| Just `text`           | Chalk colors, emoji greetings          |

## Upgrade options

Pick at least one — try as many as interest you!

### Chalk colors (Easy)

Add colorful terminal output using the chalk npm package.

**What you'll learn:** Installing packages, using template literals

**Prompt to try:**

> "I want to add colorful output to my fortune.js script using chalk. Can you help me install it and show me how to use it?"

**What you might get:**

```javascript
import chalk from "chalk";

console.log(chalk.green("Good morning!"));
console.log(chalk.blue.bold(todaysFortune.text));
```

---

### Emoji greeting (Easy)

The starter code already has a time-based greeting. Enhance it with emojis!

**What you'll learn:** Adding emojis to strings, modifying existing code

**Prompt to try:**

> "The fortune.js script already has a time greeting. I want to add emojis — a sun for morning, a cloud for afternoon, and a moon for evening. How do I modify the existing greeting?"

**What you might get:**

```javascript
let greeting;
let emoji;

if (hour < 12) {
  greeting = "Good morning";
  emoji = "☀️";
} else if (hour < 18) {
  greeting = "Good afternoon";
  emoji = "⛅";
} else {
  greeting = "Good evening";
  emoji = "🌙";
}

const fullMessage = `${emoji} ${greeting}! ${todaysFortune.text}`;
```

---

### Filter by category (Medium)

Only show fortunes that match a specific category from your schema.

**What you'll learn:** Array filter method, working with object properties

**Prompt to try:**

> "My fortunes have a category property. I want to filter them so I only show fortunes from the 'coding' category. How do I do that?"

**What you might get:**

```javascript
const category = "coding";
const filtered = fortunes.filter(fortune => fortune.category === category);

// Now pick random from filtered array
const randomIndex = Math.floor(Math.random() * filtered.length);
const todaysFortune = filtered[randomIndex];
```

**Stretch:** Make the category a command-line argument so you can run `npm start coding` or `npm start motivation`.

---

### Mood-based eyes (Medium)

If your schema has a mood or tone property, change the cow's eyes to match.

**What you'll learn:** if/else to pick different eye strings based on data

**Prompt to try:**

> "My fortunes have a mood property like 'happy', 'serious', or 'silly'. I want the cow's eyes to change based on the fortune's mood. Can you show me how?"

**What you might get:**

```javascript
let eyes;

if (todaysFortune.mood === "happy") {
  eyes = "^^";
} else if (todaysFortune.mood === "serious") {
  eyes = "==";
} else if (todaysFortune.mood === "silly") {
  eyes = "@@";
} else {
  eyes = "oo";
}

console.log(cowsay.say({ text: todaysFortune.text, e: eyes }));
```

---

### Category-based cow (Medium)

Change the cow based on your fortune's category. Browse cows at **[cattlelog.netlify.app](https://cattlelog.netlify.app/)** to pick ones that fit your categories.

**What you'll learn:** Mapping data values to cowsay options

**Prompt to try:**

> "I want different cows for different categories. Coding fortunes should show a dragon, motivation should show an elephant. How can I do this?"

**What you might get:**

```javascript
const cowMap = {
  coding: "dragon",
  motivation: "elephant",
  humor: "tux",
  wisdom: "koala"
};

const cow = cowMap[todaysFortune.category] || "default";

console.log(cowsay.say({ text: todaysFortune.text, f: cow }));
```

---

### Your own idea (Varies)

What would YOU like to add? Some ideas:

- Show how many fortunes are in each category
- Display the fortune's author or source
- Add a "fortune of the day" that stays the same all day
- Show tags as hashtags below the fortune
- Pick a random cow each time (`r: true`)

**How to approach:**

1. Describe your idea to AI
2. Ask clarifying questions if the code looks complex
3. Try it even if you don't fully understand it
4. Document what you learned in your reflection

**Example prompt:**

> "I have an idea. I want to [describe your feature]. My fortunes look like this: [paste an example fortune object]. Can you help me add this and explain how it works?"

---

## Tips for working with AI

### Share your schema

AI can give better suggestions if it knows your data structure. Include an example:

> "My fortunes look like this: `{ text: '...', category: 'coding', mood: 'happy' }`. I want to..."

### Be specific about what you want

Instead of:

> "Make my script better"

Try:

> "I want to filter fortunes by category and only show ones marked as 'humor'"

### Ask for explanations

If AI gives you code you don't understand:

> "Can you explain what the filter method does?"
> "Why do we use `||` in `creatureMap[category] || 'default'`?"
> "What happens if the category doesn't exist in the map?"

### Test as you go

After each change:

1. Save the file
2. Run `npm start`
3. Check if it works
4. If not, tell AI what went wrong

### It's OK to not understand everything

You might get code that's beyond your current level. That's fine! Note:

- What the code does (the behavior you observe)
- Which parts you understand
- Which parts you're curious about

This is valuable learning material for your reflection.

## Remember the workflow

| Phase | Model | What to do |
| ----- | ----- | ---------- |
| **Plan** | 1x premium | Describe what you want, discuss approaches |
| **Build** | 0x (free) | Implement with AI assistance, iterate |
| **Review** | 1x premium | Check for bugs, understand the code |

See [reference/choosing-models.md](../reference/choosing-models.md) for details on model budgeting.
