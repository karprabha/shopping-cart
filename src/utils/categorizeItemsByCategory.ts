import { Item } from "../types/Item";
import { CategorizedItems } from "../types/CategorizedItems";

const categorizeItemsByCategory = (items: Item[]) => {
    const categorizedItems: CategorizedItems = {
        all: [],
    };

    items.forEach((item) => {
        const { category } = item;

        if (!categorizedItems[category]) {
            categorizedItems[category] = [];
        }

        categorizedItems[category].push(item);
        categorizedItems.all.push(item);
    });

    return categorizedItems;
};

export default categorizeItemsByCategory;
