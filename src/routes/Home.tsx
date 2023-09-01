import Card from "../components/card/card";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const { data, loading, error } = useFetch(
        "https://fakestoreapi.com/products/category/jewelery"
    );

    if (!loading) {
        if (error) console.log(error);
        else console.log(data);
    }

    return (
        <>
            <h1>Home</h1>
            {!loading &&
                !error &&
                data &&
                data.map((d, i) => <Card key={i} data={d} />)}
        </>
    );
};

export default Home;
