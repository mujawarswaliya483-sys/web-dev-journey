// findTopSellingProduct(sales) to return the product with the highest total units sold. If the same product appears multiple times, combine its units before deciding the winner.

// Expected result:
// { product: "Mouse", unitsSold: 16 }
const sales = [
    { product: "Laptop", unitsSold: 5 },
    { product: "Mouse", unitsSold: 12 },
    { product: "Keyboard", unitsSold: 8 },
    { product: "Monitor", unitsSold: 3 },
    { product: "Mouse", unitsSold: 4 }
];

function findTopSellingProduct(sales){
    let highest = 0;
    let topProduct = "";
    for(let i=0;i<=sales.length;i++)
    {
        if(sales[i].unitsSold > highest)
        {
            highest = sales[i].unitsSold;
            topProduct = sales[i].product;
        }
    }
    return { product: topProduct, unitsSold: highest };
}