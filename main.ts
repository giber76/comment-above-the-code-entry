// The Comment Above the Code — entry program.
// Writes a single original line (89 chars, within the 1-200 gate)
// to /output/entry.txt. Nothing else is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It only works because the server clock is wrong. Fix the clock and you break the company.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate refuses anything outside 1–200 characters or a line that is
// not a complete statement, so fail loudly here instead of writing an
// entry the judge never sees.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`comment must be 1-200 characters, got ${LINE.length}`);
}
if (!LINE.endsWith(".")) {
  throw new Error("comment must end with a period");
}
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
