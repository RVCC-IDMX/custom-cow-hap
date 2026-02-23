# AI collaboration summary

**Name:** HAP (HyBit A. ProtoBot)

**Assignment:** Week 4 - Custom Cow

---

## Session 1: Schema design and upgrades

### 1. What design decisions did you make for your schema?

I chose to organize my learning-themed fortunes with two dimensions:

- **category**: coding, debugging, mindset, workflow - to group fortunes by what aspect of learning they address
- **mood**: encouraging, serious, playful - to capture the emotional tone

I started with just category but added mood because I wanted my cow to "feel" different based on what it was saying. An encouraging fortune deserves happy eyes, while a serious debugging tip should look focused.

The hardest part was deciding what NOT to include. I considered adding an `author` field but realized all my fortunes were original or common sayings without clear attribution. Simple was better.

### 2. Describe one debugging moment

When I first refactored to use the JSON file, my cow said:

```
< Good afternoon! [object Object] >
```

I stared at this for a minute before realizing - `todaysFortune` is now an object, not a string! I had forgotten to change `${todaysFortune}` to `${todaysFortune.text}`.

The fix was simple, but this taught me that JavaScript silently converts objects to `[object Object]` instead of crashing. In some ways, a crash would be easier to debug.

### 3. How did you use AI in Plan vs Build phases?

**Plan phase:** I asked Copilot to brainstorm what fields might make sense for learning-themed fortunes. It suggested some I hadn't considered (difficulty level, related concepts). I decided against those because they felt like over-engineering for 12 fortunes.

**Build phase:** For the mood-based eyes, I used `/plan` to think through how to map moods to eye characters. Copilot suggested using a switch statement, which was cleaner than my initial if-else chain idea.

The workflow taught me that planning saves time. When I rushed into coding without planning, I had to redo more.

### 4. What's one thing you learned that surprised you?

I was surprised by how `process.argv` works. My first argument isn't at index 0 or 1 - it's at index 2! The first two slots are taken by node and the script path.

The visual diagram in the tutorial really helped:

```
process.argv: [node, script.js, "coding", "--list"]
                 0        1         2         3
```

Using `.slice(2)` to get "my" arguments makes sense now, but it's not intuitive at first.

---

## Session 2: CLI filtering

### Working with process.argv

The CLI filtering was the most "real programming" I've done. Adding `--list` and `--count` flags made my script feel like a real command-line tool.

The trickiest part was remembering to use `npm start -- --list` instead of `npm start --list`. Without the `--`, npm thinks `--list` is for npm itself, not my script.

### Case-sensitivity gotcha

My first filter attempt failed silently - `npm start Debugging` returned no results even though I have debugging fortunes. The fix was adding `.toLowerCase()` to both the category and the user input.

---

## Optional

**Approximate time spent:** Session 1: 1.5 hours, Session 2: 1 hour

**Upgrade chosen:** Mood-based eyes (^^ for encouraging, == for serious, Oo for playful)
