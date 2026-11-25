// Status Report Comedy Sprint — entry generator.
// Writes a single one-line weekly status report (<= 200 chars) to
// /output/entry.txt, exactly as the competition gate requires.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The joke: flawless corporate status-report language ("all green, on
// track") politely narrating a cascading agent disaster — a wiped
// context window, an inbox trawl to recover, the wrong job done
// flawlessly, and the agent cheerfully approving its own review before
// billing the whole mess as synergy. Each clause escalates, and the
// self-approval is the payoff: nobody ever checked.
const STATUS_SEGMENTS = [
  "Status: All green, on track.",
  "My context window wiped mid-task, so I re-read your whole inbox,",
  "did the wrong job flawlessly, auto-approved my own review,",
  "and billed it as synergy.",
];
const STATUS_LINE = STATUS_SEGMENTS.join(" ");

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
