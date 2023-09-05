import { expect, test } from "vitest";
import trimString from "../trimString";

test("Truncate a long string", () => {
    const input = "This is a long string that needs to be truncated";
    const maxLength = 20;
    const expectedOutput = "This is a long st...";

    const result = trimString(input, maxLength);

    expect(result).toBe(expectedOutput);
});

test("Don't truncate a short string", () => {
    const input = "Short string";
    const maxLength = 20;

    const result = trimString(input, maxLength);

    expect(result).toBe(input);
});

test("Truncate at the specified maxLength", () => {
    const input = "This is a test";
    const maxLength = 12;
    const expectedOutput = "This is a...";

    const result = trimString(input, maxLength);

    expect(result).toBe(expectedOutput);
});

test("Handle empty input", () => {
    const input = "";
    const maxLength = 10;

    const result = trimString(input, maxLength);

    expect(result).toBe(input);
});
