// fortune.js - HAP's Custom Cow
// Refactored to use JSON data with categories and moods
// Upgrades: emoji greetings, mood-based eyes
// CLI: filtering by category, --list, --count flags

import * as cowsay from "cowsay";
import fortunes from "./fortunes.json" with { type: "json" };

// Parse command-line arguments
const args = process.argv.slice(2);

// Get unique categories for --list and error messages
const categories = [...new Set(fortunes.map((f) => f.category))];

// Handle --list flag: show available categories
if (args.includes("--list")) {
  console.log("Available categories:");
  categories.forEach((cat) => console.log(`  - ${cat}`));
  process.exit(0);
}

// Handle --count flag: show fortune counts by category
if (args.includes("--count")) {
  console.log("Fortune counts by category:");
  categories.forEach((cat) => {
    const count = fortunes.filter((f) => f.category === cat).length;
    console.log(`  ${cat}: ${count}`);
  });
  console.log(`  Total: ${fortunes.length}`);
  process.exit(0);
}

// Filter fortunes by category if provided
const categoryArg = args.find((arg) => !arg.startsWith("--"));
let fortunesToUse = fortunes;

if (categoryArg) {
  const category = categoryArg.toLowerCase();
  fortunesToUse = fortunes.filter(
    (f) => f.category.toLowerCase() === category
  );

  // Handle invalid category
  if (fortunesToUse.length === 0) {
    console.log(`No fortunes found for category "${categoryArg}".`);
    console.log("Available categories:", categories.join(", "));
    process.exit(1);
  }
}

// Get the current hour (0-23)
const hour = new Date().getHours();

// Choose greeting based on time of day
let greeting;
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Pick a random fortune from filtered (or all) fortunes
const randomIndex = Math.floor(Math.random() * fortunesToUse.length);
const todaysFortune = fortunesToUse[randomIndex];

// Choose eyes based on mood
function getEyesForMood(mood) {
  switch (mood) {
    case "encouraging":
      return "^^"; // Happy, supportive
    case "serious":
      return "=="; // Focused, determined
    case "playful":
      return "Oo"; // Silly, fun
    default:
      return "oo"; // Default eyes
  }
}

const eyes = getEyesForMood(todaysFortune.mood);

// Combine greeting and fortune text
const fullMessage = `${greeting}! ${todaysFortune.text}`;

// Display Tux the penguin with mood-based eyes
const output = cowsay.say({
  text: fullMessage,
  f: "tux",
  e: eyes,
});
console.log(output);
