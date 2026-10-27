// task: Write the complete function using a for loop. 
// Make the search case-insensitive so "lap" matches "Laptop".

const products = [
    "Laptop",
    "Wireless Mouse",
    "Laptop Stand",
    "Keyboard",
    "Tablet"
];

function searchProducts(products, keyword) {
    const product=[];
    for(let i=0;i<products.length;i++)
    {
        if(products[i].toLowerCase().includes(keyword.toLowerCase()))
        {
            product.push(products[i]);
        }
    }
    return product;
}

console.log(searchProducts(products, "lap"));
// Expected: ["Laptop", "Laptop Stand"]