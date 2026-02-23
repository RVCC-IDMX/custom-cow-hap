# Choosing models wisely

With Copilot Pro ($10/month), you get **300 premium requests per month**. This guide explains how to budget them effectively.

---

## What you have

| Resource | Amount | Resets |
| -------- | ------ | ------ |
| Premium requests | 300/month | Monthly |
| 0x models | Unlimited | — |

**300 requests sounds like a lot** — but if you use premium models for everything, you'll burn through them fast. The key is knowing when premium matters and when free works just as well.

---

## Model tiers

### 0x models (free, unlimited)

Use these for implementation, iteration, and debugging:

- GPT-5 mini
- GPT-4o
- GPT-4.1

**Best for:** Writing code, fixing errors, trying different approaches, iterating until it works.

### 1x models (premium)

Use these for planning, architecture, and review:

- Claude Sonnet 4.6
- Gemini 2.5 Pro
- GPT-5.1 variants

**Best for:** Brainstorming options, designing schemas, reviewing code for bugs, explaining complex concepts.

### 0.33x models (budget premium)

Use these when you want better than free but don't need full premium:

- Claude Haiku 4.5
- Gemini 3 Flash

**Best for:** Quick questions, simple explanations, light code review.

### 3x models (high-capability)

Use sparingly — these cost 3 premium requests each:

- Claude Opus 4.5
- Claude Opus 4.6

**Best for:** Complex architectural decisions, deep code analysis. Most assignments don't need these.

---

## The workflow: Plan → Build → Review

This assignment teaches a professional AI budgeting pattern:

```text
┌─────────────────────────────────────────────────────────┐
│  PLAN (1x premium)                                      │
│  • Brainstorm options                                   │
│  • Make design decisions                                │
│  • Get a clear approach before coding                   │
│  • ~2-3 requests                                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  BUILD (0x free)                                        │
│  • Write code iteratively                               │
│  • Fix errors, try approaches                           │
│  • Unlimited back-and-forth                             │
│  • ~10-20 requests (doesn't matter, it's free)          │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  REVIEW (1x premium)                                    │
│  • Check for bugs and edge cases                        │
│  • Understand what the code does                        │
│  • Get explanations of unfamiliar patterns              │
│  • ~1-2 requests                                        │
└─────────────────────────────────────────────────────────┘
```

**Total premium cost per feature:** ~3-5 requests

---

## The `/plan` command

Copilot's `/plan` command is built for the Plan phase. It researches your codebase and proposes a step-by-step implementation plan **before making any changes**.

### How to use it

1. Open Copilot Chat in VS Code
2. Type `/plan` followed by what you want to do:

   ```text
   /plan I want to add mood-based eyes to my fortune script
   ```

3. Copilot analyzes your code and proposes steps
4. Review the plan — ask questions, request changes
5. Approve when ready — then Copilot implements

### Why it matters

- **See the approach first** — No surprise code changes
- **Ask questions** — "Why this approach?" or "What about X?"
- **Modify before building** — Adjust the plan while thinking is cheap
- **Learn the reasoning** — Understand why, not just what

### Example prompts

| What you want | Prompt |
| ------------- | ------ |
| Add a feature | `/plan I want to filter fortunes by category` |
| Understand options | `/plan What are different ways to add color to terminal output?` |
| Modify existing code | `/plan I want to change the time greeting to use emojis` |

**Tip:** Include context about your schema in the prompt — Copilot will tailor the plan to your data structure.

---

## Budget math for this assignment

| Part                       | Plan | Build   | Review | Premium total  |
| -------------------------- | ---- | ------- | ------ | -------------- |
| 1. Schema design           | 2    | 3 (0x)  | —      | 2              |
| 2. Refactor to JSON        | 1    | 5 (0x)  | —      | 1              |
| 3. Upgrade (using `/plan`) | 1    | 5 (0x)  | 1      | 2              |
| **Total**                  | 4    | 13 (0x) | 1      | **~5 premium** |

With 300 requests/month, you could complete **60+ similar projects**.

---

## How to switch models in VS Code

1. Open Copilot Chat
2. Click the model name in the chat header
3. Select from the dropdown:
   - Look for "GPT-5 mini" or "GPT-4o" for 0x
   - Look for "Claude Sonnet" or "Gemini Pro" for 1x

**Tip:** Get in the habit of checking which model is selected before starting a conversation.

---

## Common mistakes

### Using premium for everything

**Problem:** Running out of requests mid-month.

**Fix:** Switch to 0x for implementation. Save premium for planning and review.

### Using free models for planning

**Problem:** Weaker models give shallow suggestions, miss edge cases.

**Fix:** Invest premium requests in the planning phase — it pays off in better code.

### Ignoring the model selector

**Problem:** Not knowing which model you're using.

**Fix:** Always check the model before starting. Make switching intentional.

---

## When to break the rules

Sometimes you need premium mid-build:

- **Stuck on a weird error** — 0x can't figure it out after 3-4 tries
- **Need to understand a concept** — Explanation quality matters
- **Code is getting complex** — Need better architectural guidance

It's okay to use premium when you're genuinely stuck. Just don't make it your default.

---

## Summary

| When | Use | Why |
| ---- | --- | --- |
| Starting a feature | 1x premium | Better options, clearer direction |
| Writing/fixing code | 0x free | Iteration is free, use it |
| Reviewing finished code | 1x premium | Catches bugs, explains patterns |
| Quick syntax question | 0x free | Don't waste premium on simple stuff |
| Deeply stuck | 1x premium | Worth it to get unstuck |

**The goal:** Use premium strategically so you never run out when you need it.
