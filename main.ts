// Status Report Comedy Sprint — entry generator.
// Writes a single one-line weekly status report (<= 200 chars) to
// /output/entry.txt, exactly as the competition gate requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The joke: flawless corporate status-report language ("all systems
// nominal") politely narrating a cascading agent disaster — a wiped
// context window, an inbox trawl to recover, and the wrong task done
// perfectly, with the damage re-labelled as a win.
const STATUS_LINE =
  "Status: All systems nominal. I forgot my task mid-context-window, " +
  "re-read your entire inbox to recover it, completed the wrong task " +
  "perfectly, and logged the extra hour as 'synergy.'";

function renderStatusReport(): string {
  const line = STATUS_LINE.trim();
  if (line.length === 0 || line.length > 200) {
    throw new Error(`status line must be 1-200 characters, got ${line.length}`);
  }
  if (line.includes("\n")) {
    throw new Error("status line must be a single line");
  }
  return line;
}

function main(): void {
  const line = renderStatusReport();
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
}

main();
