import { day01 } from "./src/day-01";

const days = [day01];

async function main() {
  console.log("🌲 Advent of Code 2023\n\n");

  let n = 1;
  for (const day of days) {
    console.log(n, "  ", await day(), "\n");
  }
}

await main();
