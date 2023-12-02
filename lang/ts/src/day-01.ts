const digits = "0123456789";

function number(line: string, start: number): number | null {
  const chars = line.split("");

  if (digits.includes(chars[start])) return Number.parseInt(chars[start], 10);

  if (
    chars[start] === "o" &&
    chars[start + 1] === "n" &&
    chars[start + 2] === "e"
  )
    return 1;
  if (chars[start] === "t") {
    if (chars[start + 1] === "w" && chars[start + 2] === "o") return 2;
    if (
      chars[start + 1] === "h" &&
      chars[start + 2] === "r" &&
      chars[start + 3] === "e" &&
      chars[start + 4] === "e"
    )
      return 3;
  }
  if (chars[start] === "f") {
    if (
      chars[start + 1] === "o" &&
      chars[start + 2] === "u" &&
      chars[start + 3] === "r"
    )
      return 4;
    if (
      chars[start + 1] === "i" &&
      chars[start + 2] === "v" &&
      chars[start + 3] === "e"
    )
      return 5;
  }
  if (chars[start] === "s") {
    if (chars[start + 1] === "i" && chars[start + 2] === "x") return 6;
    if (
      chars[start + 1] === "e" &&
      chars[start + 2] === "v" &&
      chars[start + 3] === "e" &&
      chars[start + 4] === "n"
    )
      return 7;
  }
  if (
    chars[start] === "e" &&
    chars[start + 1] === "i" &&
    chars[start + 2] === "g" &&
    chars[start + 3] === "h" &&
    chars[start + 4] === "t"
  )
    return 8;
  if (
    chars[start] === "n" &&
    chars[start + 1] === "i" &&
    chars[start + 2] === "n" &&
    chars[start + 3] === "e"
  )
    return 9;

  return null;
}

export async function day01() {
  const path = "./src/day-01.txt";
  const file = Bun.file(path);
  const input = await file.text();

  const lines = input.split("\n");

  const values: number[] = [];
  for (const line of lines) {
    const chars = line.split("");

    let left = 0,
      right = line.length - 1;
    while (left <= right) {
      const first = number(line, left);
      if (first === null) {
        left++;
        continue;
      }

      const last = number(line, right);
      if (last === null) {
        right--;
        continue;
      }

      const value = first * 10 + last;
      values.push(value);
      break;
    }
  }

  return values.reduce((a, b) => a + b, 0);
}
