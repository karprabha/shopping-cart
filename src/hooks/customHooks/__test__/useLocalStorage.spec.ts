import { describe, beforeEach, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import useLocalStorage from "../useLocalStorage";

describe("useLocalStorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("should return the initial value when no data is stored in localStorage", () => {
        const { result } = renderHook(() =>
            useLocalStorage("testKey", "defaultValue")
        );
        expect(result.current[0]).toBe("defaultValue");
    });

    it("should return the stored value from localStorage", () => {
        localStorage.setItem("testKey", JSON.stringify("storedValue"));

        const { result } = renderHook(() =>
            useLocalStorage("testKey", "defaultValue")
        );
        expect(result.current[0]).toBe("storedValue");
    });

    it("should update the stored value when setValue is called", () => {
        const { result } = renderHook(() =>
            useLocalStorage("testKey", "defaultValue")
        );

        act(() => {
            result.current[1]("updatedValue");
        });

        expect(result.current[0]).toBe("updatedValue");
        expect(localStorage.getItem("testKey")).toBe(
            JSON.stringify("updatedValue")
        );
    });

    it("should update the stored value when setValue is called with a function", () => {
        localStorage.setItem("testKey", JSON.stringify(5));

        const { result } = renderHook(() => useLocalStorage("testKey", 5));

        act(() => {
            result.current[1]((prevValue) => prevValue + 1);
        });

        expect(result.current[0]).toBe(6);
        expect(localStorage.getItem("testKey")).toBe(JSON.stringify(6));
    });
});
