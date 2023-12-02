type RGB = [number, number, number];

export async function day02() {
  const path = "./src/day-02.txt";
  const file = Bun.file(path);
  const input = await file.text();
  const lines = input.split("\n");
  const max: RGB = [12, 13, 14];
  const games: number[] = [];
  for (const line of lines) {
    let winner = true;
    const [title, game] = line.split(":");
    const sets = game.trim().split(";");
    for (const set of sets) {
      if (!winner) break;
      const cubes = set.trim().split(",");
      for (const cube of cubes) {
        const [amount, color] = cube.trim().split(" ");
        const n = Number.parseInt(amount, 10);
        if (
          (color === "red" && n > max[0]) ||
          (color === "green" && n > max[1]) ||
          (color === "blue" && n > max[2])
        ) {
          winner = false;
          break;
        }
      }
    }
    if (winner) {
      const [, n] = title.split(" ");
      console.log(n, "is a winner!");
      games.push(Number.parseInt(n, 10));
    }
  }

  return games.reduce((a, b) => a + b, 0);
}

export async function day02_part02() {
  const input = await Bun.file("./src/day-02.txt").text();
  const lines = input.split("\n");

  let max: RGB = [0, 0, 0];

  const powers: number[] = [];

  for (const line of lines) {
    const [, game] = line.split(":");
    const sets = game.trim().split(";");
    max = [0, 0, 0];

    for (const set of sets) {
      const cubes = set.trim().split(",");

      for (const cube of cubes) {
        const [amount, color] = cube.trim().split(" ");
        const n = Number.parseInt(amount, 10);

        if (color === "red" && n > max[0]) {
          max[0] = n;
        } else if (color === "blue" && n > max[1]) {
          max[1] = n;
        } else if (color === "green" && n > max[2]) {
          max[2] = n;
        }
      }
    }

    const power = max[0] * max[1] * max[2];
    powers.push(power);
  }

  return powers.reduce((a, b) => a + b, 0);
}
