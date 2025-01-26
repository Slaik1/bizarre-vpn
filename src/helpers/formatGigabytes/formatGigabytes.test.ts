import { describe, it, expect, vi } from "vitest";

import { formatGigabytes } from "./formatGigabytes";

vi.mock("i18next", () => ({
  t: (key: string) => key.replace("units.", ""),
}));

describe("unit formatGigabytes", () => {
  it("formats the value in bytes", () => {
    const result = formatGigabytes(0.000000001);

    expect(result).toBe("1.1 bytes");
  });

  it("formats the value in kilobytes", () => {
    const result = formatGigabytes(0.000001);

    expect(result).toBe("1 kilobytes");
  });

  it("formats the value in megabytes", () => {
    const result = formatGigabytes(0.001);

    expect(result).toBe("1 megabytes");
  });

  it("formats the value in gigabytes", () => {
    const result = formatGigabytes(1);

    expect(result).toBe("1 gigabytes");
  });

  it("formats the value in terabytes", () => {
    const result = formatGigabytes(1024);

    expect(result).toBe("1 terabytes");
  });

  it("formats the value with a fractional part", () => {
    const result = formatGigabytes(0.5);

    expect(result).toBe("512 megabytes");
  });

  it("formats the value with a fractional part using custom fixed", () => {
    const result = formatGigabytes(0.000001, 2);

    expect(result).toBe("1.05 kilobytes");
  });

  it("handles the value 0 correctly", () => {
    const result = formatGigabytes(0);

    expect(result).toBe("0 bytes");
  });
});
