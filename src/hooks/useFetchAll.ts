import { useState, useEffect } from "react";

interface FetchResult<T> {
    data: T | null;
    loading: boolean;
    error: Error | null;
}

interface FetchBatchResult<T> {
    results: FetchResult<T>[];
    loadingBatch: boolean;
    errorBatch: Error | null;
}

const useFetchAll = <T>(urls: string[]): FetchBatchResult<T> => {
    const [results, setResults] = useState<FetchResult<T>[]>([]);
    const [loadingBatch, setLoadingBatch] = useState<boolean>(true);
    const [errorBatch, setErrorBatch] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchData() {
            const fetchPromises = urls.map(async (url) => {
                try {
                    const response = await fetch(url);
                    const json = await response.json();
                    const result: FetchResult<T> = {
                        data: json,
                        loading: false,
                        error: null,
                    };
                    return result;
                } catch (error) {
                    const result: FetchResult<T> = {
                        data: null,
                        loading: false,
                        error: error as Error,
                    };
                    return result;
                }
            });

            const fetchedResults = await Promise.all(fetchPromises);
            setResults(fetchedResults);

            const allLoaded = fetchedResults.every((result) => !result.loading);
            setLoadingBatch(!allLoaded);

            const anyError = fetchedResults.some(
                (result) => result.error !== null
            );
            setErrorBatch(anyError ? new Error("Batch error occurred.") : null);
        }

        fetchData();
    }, [urls]);

    return { results, loadingBatch, errorBatch };
};

export default useFetchAll;
