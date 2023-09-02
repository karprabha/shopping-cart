import { useMemo, useEffect } from "react";
import { useFetchAll, useLocalStorage } from "../hooks/customHooks";
import CardContainer from "../components/container/CardContainer";
import categorizeItemsByCategory from "../utils/categorizeItemsByCategory";
import { Item } from "../types/Item";
import { CategorizedItems } from "../types/CategorizedItems";

const Products = () => {
    const baseUrl = "https://fakestoreapi.com/products/category/";

    const urls = useMemo(() => {
        const categoryNames = [
            "men's clothing",
            "women's clothing",
            "jewelery",
        ];
        return categoryNames.map(
            (category) => `${baseUrl}${encodeURIComponent(category)}`
        );
    }, [baseUrl]);

    const { results, loadingBatch, errorBatch } = useFetchAll<Item[]>(urls);

    const items = results.flatMap((result) => result.data) as Item[];
    const categorizedItems = categorizeItemsByCategory(items);

    const [cachedCategorizedItems, setCachedCategorizedItems] =
        useLocalStorage<CategorizedItems>("products", categorizedItems);

    useEffect(() => {
        if (
            categorizedItems.all.length > 0 &&
            JSON.stringify(cachedCategorizedItems) !==
                JSON.stringify(categorizedItems)
        ) {
            setCachedCategorizedItems(categorizedItems);
        }
    }, [categorizedItems, cachedCategorizedItems, setCachedCategorizedItems]);

    if (!loadingBatch && errorBatch) console.log(errorBatch);

    return (
        <>
            <h1>Products</h1>
            {<CardContainer categorizedItems={cachedCategorizedItems} />}
        </>
    );
};

export default Products;
