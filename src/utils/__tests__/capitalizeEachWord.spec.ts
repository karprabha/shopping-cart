import { expect, test } from "vitest";
import capitalizeEachWord from "../capitalizeEachWord";

test("Capitalize each word in a sentence", () => {
    const input = "hello world";
    const expectedOutput = "Hello World";

    const result = capitalizeEachWord(input);

    expect(result).toBe(expectedOutput);
});

test("Capitalize each word in a sentence with mixed casing", () => {
    const input = "tHis is a tEst";
    const expectedOutput = "THis Is A TEst";

    const result = capitalizeEachWord(input);

    expect(result).toBe(expectedOutput);
});

test("Handle empty input", () => {
    const input = "";
    const expectedOutput = "";

    const result = capitalizeEachWord(input);

    expect(result).toBe(expectedOutput);
});

test("Handle input with a single word", () => {
    const input = "hello";
    const expectedOutput = "Hello";

    const result = capitalizeEachWord(input);

    expect(result).toBe(expectedOutput);
});
