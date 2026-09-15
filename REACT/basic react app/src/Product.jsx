import "./Product.css";
function Product({ title, description, features }) {
    console.log(title, description, features);
    return (
        <div className="product">
            <h3>{title}</h3>
            <h5>{description}</h5>
            <p>{features.join(", ")}</p>
        </div>
)
}

export default Product;