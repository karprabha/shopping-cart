import { Item } from "../types/Item";

type CategorizedItems = Record<string, Item[]>;

const categorizeItemsByCategory = (items: Item[]) => {
    const categorizedItems: CategorizedItems = {};

    items.forEach((item) => {
        const { category } = item;

        if (!categorizedItems[category]) {
            categorizedItems[category] = [];
        }

        categorizedItems[category].push(item);
    });

    return categorizedItems;
};

export default categorizeItemsByCategory;
