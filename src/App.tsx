import Navbar from "./layouts/Navbar";
import PageContainer from "./layouts/PageContainer";

const App = () => {
    return (
        <>
            <header>
                <h1>CraftHaven</h1>
                <Navbar />
            </header>

            <main>
                <PageContainer />
            </main>
        </>
    );
};

export default App;
