// fortune.js - Custom Cow starter
// Based on HAP's Fortunate Cow — you'll refactor this to use JSON objects

import * as cowsay from "cowsay";

// HAP's learning-themed fortunes
// In Part 1, you'll move these to fortunes.json and add structure
const fortunes = [
  "Errors are teachers in disguise",
  "Every expert was once a beginner",
  "Confusion is the first step to clarity",
  "Ask questions - that's how learning happens",
  "One small step today, one giant leap tomorrow",
  "Your code doesn't have to be perfect to be progress",
  "Debugging is just problem-solving with extra steps",
];

// Get the current hour (0-23)
// HAP learned that getHours() uses 24-hour time, not 12-hour!
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

// Pick a random fortune
const randomIndex = Math.floor(Math.random() * fortunes.length);
const todaysFortune = fortunes[randomIndex];

// Combine greeting and fortune
const fullMessage = `${greeting}! ${todaysFortune}`;

// Display Tux the penguin (HAP likes penguins!)
// Notice: cowsay.say() takes an OBJECT as its parameter
const output = cowsay.say({ text: fullMessage, f: "tux" });
console.log(output);
