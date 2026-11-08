import { expect, test } from "vitest";
import { readFileSync } from "node:fs";
import { limit } from "./limit";
test("limit caps at 10", () => expect(limit(99)).toBe(10));
test("prompt says plain English", () =>
  expect(readFileSync(new URL("./prompt.md", import.meta.url), "utf8")).toContain("plain English"));
