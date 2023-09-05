import categorizeItemsByCategory from "../categorizeItemsByCategory";
import { Item } from "../../types/Item";
import { CategorizedItems } from "../../types/CategorizedItems";
import { describe, expect, it } from "vitest";

const items: Item[] = [
    {
        id: 1,
        title: "Item 1",
        price: 10.99,
        description: "Description for Item 1",
        category: "Category A",
        image: "item1.jpg",
        rating: { rate: 4.5, count: 10 },
    },
    {
        id: 2,
        title: "Item 2",
        price: 19.99,
        description: "Description for Item 2",
        category: "Category B",
        image: "item2.jpg",
        rating: { rate: 4.0, count: 8 },
    },
];

describe("categorizeItemsByCategory", () => {
    it("should categorize items correctly", () => {
        const result: CategorizedItems = categorizeItemsByCategory(items);

        expect(result["Category A"]).toEqual([
            {
                id: 1,
                title: "Item 1",
                price: 10.99,
                description: "Description for Item 1",
                category: "Category A",
                image: "item1.jpg",
                rating: { rate: 4.5, count: 10 },
            },
        ]);

        expect(result["Category B"]).toEqual([
            {
                id: 2,
                title: "Item 2",
                price: 19.99,
                description: "Description for Item 2",
                category: "Category B",
                image: "item2.jpg",
                rating: { rate: 4.0, count: 8 },
            },
        ]);
    });

    it('should add all items to the "all" category', () => {
        const result: CategorizedItems = categorizeItemsByCategory(items);

        expect(result.all).toEqual(items);
    });

    it("should handle empty input", () => {
        const result: CategorizedItems = categorizeItemsByCategory([]);

        expect(result).toEqual({ all: [] });
    });
});
