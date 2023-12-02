import { day01 } from "./src/day-01";
import { day02_part02 } from "./src/day-02";

const days = [day01, day02_part02];

async function main() {
  console.log("🌲 Advent of Code 2023\n");

  let n = 1;
  for (const day of days) {
    console.log(n++, "  ", await day());
  }
}

await main();
