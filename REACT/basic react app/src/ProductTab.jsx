import Product from "./Product";

function ProductTab(){
    console.log(options);
    let options = [<li>hi-tech</li>,<li>durable</li>,<li>Fast</li>];
    return(
        <>
    <Product title="Product 1" price="$19.99" features={options}/>
    <Product title="Product 2" price="$29.99" features={options}/>
    <Product title="Product 3" price="$39.99" features={options}/>
        </>
    );
}
export default ProductTab;