import { test, expect } from "vitest";

import { day01 } from "./day-01";

test(async () => {
  expect(await day01()).toBe(54985);
});
