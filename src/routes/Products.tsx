import { useMemo } from "react";
import useFetchAll from "../hooks/useFetchAll";
import { Item } from "../types/Item";
import CardContainer from "../components/container/CardContainer";

const Products = () => {
    const urls = useMemo(
        () => [
            "https://fakestoreapi.com/products/category/men's clothing",
            "https://fakestoreapi.com/products/category/women's clothing",
            "https://fakestoreapi.com/products/category/jewelery",
        ],
        []
    );

    const { results, loadingBatch, errorBatch } = useFetchAll<Item[]>(urls);
    return (
        <>
            <h1>Products</h1>
            {!loadingBatch && !errorBatch && (
                <CardContainer
                    items={results.flatMap((result) => result.data) as Item[]}
                />
            )}
        </>
    );
};

export default Products;
