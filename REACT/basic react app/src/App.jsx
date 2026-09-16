import "./App.css";
import Title from "./Title.jsx";
import Product from "./Product";
import ProductTab from "./ProductTab.jsx";

function App() {
    return (
        <div className="App">
            <h1>Hello React</h1>

            {<ProductTab />};
        </div>
    );
}

export default App;