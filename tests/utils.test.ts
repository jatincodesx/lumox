import { cn } from "@/lib/utils";
import { describe, it, expect } from "vitest";

describe("cn", () => {
  it("merges classes", () => {
    expect(cn("px-2", "px-4")).toBe("px-4");
  });
});
