import { expect, it } from "vitest";
import prompt from "./prompt.md?raw";

it("system prompt keeps its rule", () =>
  expect(prompt).toContain("plain English"));
