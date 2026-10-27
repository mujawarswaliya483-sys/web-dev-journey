// Challenge 11 — Calculate Total Completed Sales

// Problem statement: Given an array of orders, calculate the total amount of orders whose status is "completed". Ignore pending or other incomplete orders.

// Expected output: 1800

const orders = [
    { order:1, status:"completed",amount: 500 },
    { order:2, status:"pending",amount: 300 },
    { order:3, status:"completed",amount: 800 },
    { order:4, status:"completed",amount: 500 },
    { order:5, status:"pending",amount: 200 }
]

function calculateTotalCompletedSales(orders) {
    let total = 0;
    for(let i=0;i<orders.length;i++)
    {
        if(orders[i].status === "completed")
        {
            total = total + orders[i].amount;
        }
    }
    return total;
}