import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useFetch from "../useFetch";

describe("useFetch hook", () => {
    const fetchSpy = vi.spyOn(global, "fetch");
    const mockUrl = "https://example.com/api/data";

    afterAll(() => {
        fetchSpy.mockRestore();
    });

    describe("successful data fetching", () => {
        const mockData = { message: "Success" };

        beforeEach(() => {
            const mockResponse: Response = {
                ok: true,
                json: async () => mockData,
            } as Response;

            const resolvedMockResponse = Promise.resolve(mockResponse);
            fetchSpy.mockReturnValue(resolvedMockResponse);
        });

        it("returns data and sets loading to false", async () => {
            const { result } = renderHook(() => useFetch(mockUrl));

            await waitFor(() => result.current.loading === false);

            expect(result.current.data).toEqual(mockData);
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toBe(null);
        });
    });

    describe("error handling", () => {
        const mockError = new Error("Fetch failed");

        beforeEach(() => {
            const mockRejectValue = Promise.reject(mockError);
            fetchSpy.mockReturnValue(mockRejectValue);
        });

        it("returns null data and sets loading to false", async () => {
            const { result } = renderHook(() => useFetch(mockUrl));

            await waitFor(() => result.current.loading === false);

            expect(result.current.data).toBe(null);
            expect(result.current.loading).toBe(false);
            expect(result.current.error).toEqual(mockError);
        });
    });
});
