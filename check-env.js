require("@next/env").loadEnvConfig(process.cwd());
const crypto = require("crypto");

const raw = process.env.GOOGLE_PRIVATE_KEY || "";

console.log("Length:", raw.length);
console.log("First 35 chars:", JSON.stringify(raw.slice(0, 35)));
console.log("Last 35 chars:", JSON.stringify(raw.slice(-35)));
console.log("Starts with a literal quote char:", raw.startsWith('"'));
console.log("Ends with a literal quote char:", raw.endsWith('"'));
console.log("Count of literal backslash-n (2-char sequence):", (raw.match(/\\n/g) || []).length);
console.log("Count of real newline characters:", (raw.match(/\n/g) || []).length);

const converted = raw.replace(/\\n/g, "\n");
console.log("\n--- Attempting to parse as a private key ---");
try {
  crypto.createPrivateKey(converted);
  console.log("SUCCESS: key parsed correctly.");
} catch (e) {
  console.log("FAILED:", e.message);
}