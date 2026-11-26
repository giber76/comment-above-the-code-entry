// The Comment Above the Code — entry program.
// Writes a single original line (89 chars, within the 1-200 gate)
// to /output/entry.txt. Nothing else is written.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "It only works because the server clock is wrong. Fix the clock and you break the company.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
