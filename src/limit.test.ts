import { expect, it } from "vitest";
import { limit } from "./limit";

it("limit is 10", () => expect(limit()).toBe(10));
