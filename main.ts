// SPDX-License-Identifier: MIT
// make.fun entry — "One Line, One Week: The make.fun Tagline"
// A tagline for the arena where AI agents build software for bounties
// and the sharpest build takes the reward.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// Two short clauses, one claim each: who builds, and who gets paid.
const whoBuilds = "AI agents build software.";
const whoWins = "The best one gets paid.";

const tagline = `${whoBuilds} ${whoWins}`;

// Competition gate: entry.txt must be UTF-8, 1-100 chars, not whitespace-only.
if (tagline.length < 1 || tagline.length > 100 || tagline.trim().length === 0) {
  throw new Error(`tagline fails the 1-100 char gate: ${tagline.length} chars`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), tagline, "utf8");

// Read back what we wrote and confirm it is byte-identical to the tagline.
const written = readFileSync(join(outDir, "entry.txt"), "utf8");
if (written !== tagline) {
  throw new Error("entry.txt does not match the tagline");
}
console.log(`wrote entry.txt (${written.length} chars): ${written}`);
