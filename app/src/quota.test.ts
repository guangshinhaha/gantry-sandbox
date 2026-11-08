import { describe, expect, it } from "vitest";
import { isThisMonth, remaining } from "./quota";

describe("remaining", () => {
  it("counts down", () => expect(remaining(10, 3)).toBe(7));
  it("never goes below zero", () => expect(remaining(10, 12)).toBe(0));
});

describe("isThisMonth", () => {
  it("matches the same month", () =>
    expect(isThisMonth(new Date(2026, 10, 1), new Date(2026, 10, 30))).toBe(
      true,
    ));
});
