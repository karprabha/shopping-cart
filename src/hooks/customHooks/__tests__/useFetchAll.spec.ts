import { describe, it, expect, vi, beforeEach, afterAll } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useFetchAll from "../useFetchAll";

describe("useFetchAll hook", () => {
    const fetchSpy = vi.spyOn(global, "fetch");
    const mockUrls = [
        "https://example.com/api/data1",
        "https://example.com/api/data2",
    ];

    afterAll(() => {
        fetchSpy.mockRestore();
    });

    describe("successful data fetching", () => {
        const mockData1 = { message: "Success 1" };
        const mockData2 = { message: "Success 2" };

        beforeEach(() => {
            const mockResponse1: Response = {
                ok: true,
                json: async () => mockData1,
            } as Response;

            const mockResponse2: Response = {
                ok: true,
                json: async () => mockData2,
            } as Response;

            const resolvedMockResponse1 = Promise.resolve(mockResponse1);
            const resolvedMockResponse2 = Promise.resolve(mockResponse2);

            fetchSpy
                .mockReturnValueOnce(resolvedMockResponse1)
                .mockReturnValueOnce(resolvedMockResponse2);
        });

        it("returns data and sets loading to false for each URL", async () => {
            const { result } = renderHook(() => useFetchAll(mockUrls));

            await waitFor(() => !result.current.loadingBatch);

            expect(result.current.results[0].data).toEqual(mockData1);
            expect(result.current.results[0].loading).toBe(false);
            expect(result.current.results[0].error).toBe(null);

            expect(result.current.results[1].data).toEqual(mockData2);
            expect(result.current.results[1].loading).toBe(false);
            expect(result.current.results[1].error).toBe(null);
        });
    });

    describe("error handling", () => {
        const mockError = new Error("Fetch failed");

        beforeEach(() => {
            const mockRejectValue = Promise.reject(mockError);
            fetchSpy.mockReturnValue(mockRejectValue);
        });

        it("returns null data and sets loading to false for each URL", async () => {
            const { result } = renderHook(() => useFetchAll(mockUrls));

            await waitFor(() => !result.current.loadingBatch);

            expect(result.current.results[0].data).toBe(null);
            expect(result.current.results[0].loading).toBe(false);
            expect(result.current.results[0].error).toEqual(mockError);

            expect(result.current.results[1].data).toBe(null);
            expect(result.current.results[1].loading).toBe(false);
            expect(result.current.results[1].error).toEqual(mockError);
        });
    });
});
