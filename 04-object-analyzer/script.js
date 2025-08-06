function log(message) {
  console.log(message);
  document.getElementById("output").innerHTML += message + "<br>";
}

const settings = {
  darkMode: true,
  notifications: false,
  autoSave: true,
  spellCheck: false,
  grammarCheck: true
};

log("All settings:");
Object.entries(settings).forEach(([key, value]) => {
  log(`${key}: ${value}`);
});

log("------------------------------------------------------");

const trueCount = Object.values(settings).filter(v => v === true).length;
log(`Number of enabled settings: ${trueCount}`);

log("------------------------------------------------------");

const entries = Object.entries(settings);
const enabledEntries = entries.filter(([key, value]) => value === true);
log("Enabled settings array:");
enabledEntries.forEach(([key, value]) => {
  log(`${key}: ${value}`);
});

log("------------------------------------------------------");

const enabledSettings = Object.fromEntries(enabledEntries);
log("Rebuilt enabled settings object:");
Object.entries(enabledSettings).forEach(([key, value]) => {
  log(`${key}: ${value}`);
});
