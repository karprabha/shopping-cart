import { useMemo } from "react";
import useFetchAll from "../hooks/useFetchAll";
import { Item } from "../types/Item";
import CardContainer from "../components/container/CardContainer";
import categorizeItemsByCategory from "../utils/categorizeItemsByCategory";

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
    console.log(categorizedItems);

    return (
        <>
            <h1>Products</h1>
            {!loadingBatch && !errorBatch && <CardContainer items={items} />}
        </>
    );
};

export default Products;
