// Starter data
const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

console.log("All settings:");
Object.entries(settings).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("------------------------------------------------------");

const trueCount = Object.values(settings).filter(v => v === true).length;
console.log(`Number of enabled settings: ${trueCount}`);

console.log("------------------------------------------------------");

const entries = Object.entries(settings);
const enabledEntries = entries.filter(([key, value]) => value === true);
console.log("Enabled settings array:");
enabledEntries.forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("------------------------------------------------------");

const enabledSettings = Object.fromEntries(enabledEntries);
console.log("Rebuilt enabled settings object:");
Object.entries(enabledSettings).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
