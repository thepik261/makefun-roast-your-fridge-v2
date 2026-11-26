// Pure Node stdlib. Writes the roast line to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My fridge hums all night like it's working hard, but all it ever produces is a light and a judgemental stare at my 2 a.m. leftovers.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
