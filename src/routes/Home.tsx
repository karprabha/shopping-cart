import { useEffect, useMemo } from "react";
import { useFetchAll, useLocalStorage } from "../hooks/customHooks";
import { Item } from "../types/Item";
import { CategorizedItems } from "../types/CategorizedItems";
import Slider from "../components/slider/Slider";
import HeroSection from "../layouts/home/HeroSection";
import categorizeItemsByCategory from "../utils/categorizeItemsByCategory";

const Home = () => {
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
        <div className="home-route">
            <HeroSection />
            <div className="related-items">
                <h3>Recommended for You</h3>
                <Slider
                    slides={cachedCategorizedItems["all"]}
                    skeletonEstimate={14}
                />
            </div>

            <div className="related-items">
                <h3>Men's Category</h3>
                <Slider
                    slides={cachedCategorizedItems["men's clothing"]}
                    skeletonEstimate={4}
                />
            </div>

            <div className="related-items">
                <h3>Women's Category</h3>
                <Slider
                    slides={cachedCategorizedItems["women's clothing"]}
                    skeletonEstimate={6}
                />
            </div>
        </div>
    );
};

export default Home;
