import Product from "./Product";

function ProductTab(){
    console.log(options);
    let options = ["hi-tech","durable","Fast"];
    return(
        <>
    <Product title="Product 1" description="This is the first product" features={options}/>
    <Product title="Product 2" description="This is the second product" features={options}/>
    <Product title="Product 3" description="This is the third product" features={options}/>
        </>
    );
}
export default ProductTab;