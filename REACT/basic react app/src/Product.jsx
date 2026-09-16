import "./Product.css";
function Product({ title, price, features }) {
    // console.log(title, price, features);

    return (
        <div className="Product">
            <h3>{title}</h3>
            <h5>price: {price}</h5>
            {price>"$20"&& <p>Discount of 5%</p>}
        </div>
)
}

export default Product;