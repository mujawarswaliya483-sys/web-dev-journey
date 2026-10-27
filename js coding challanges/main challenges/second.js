// Write a function:
// findMostExpensive(products, budget)


// For a budget of 5000, it should return:
// { name: "Headphones", price: 2500 }


// 11. Find the Most Expensive Affordable Product	Return the highest-priced product within a given budget, or null if none qualifies.

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 800 },
    { name: "Keyboard", price: 1500 },
    { name: "Monitor", price: 12000 },
    { name: "Headphones", price: 2500 }
];

function findMostExpensive(products,budget)
{
    let mostExpensiveProduct = null;
    for(let i=0;i<products.length;i++)
    {
        if(products[i].price <= budget)
        {
            if(mostExpensiveProduct === null || products[i].price > mostExpensiveProduct.price)
            {
                mostExpensiveProduct = products[i];
            }
        }
    }
    return mostExpensiveProduct;
}