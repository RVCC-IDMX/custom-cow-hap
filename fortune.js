// fortune.js - HAP's Custom Cow
// Refactored to use JSON data with categories and moods

import * as cowsay from "cowsay";
import fortunes from "./fortunes.json" with { type: "json" };

// Get the current hour (0-23)
const hour = new Date().getHours();

// Choose greeting based on time of day with emoji
let greeting;
if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Combine greeting and fortune text
const fullMessage = `${greeting}! ${todaysFortune.text}`;

// Display Tux the penguin
const output = cowsay.say({ text: fullMessage, f: "tux" });
console.log(output);
