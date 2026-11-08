import { expect, it } from "vitest";
import { rate } from "./rate";
it("rate is 5", () => expect(rate()).toBe(5));
