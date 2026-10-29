const orders = [
    { customer: "A", amount: 500 },
    { customer: "B", amount: 300 },
    { customer: "A", amount: 700 },
    { customer: "C", amount: 200 },
    { customer: "B", amount: 400 }
];

function calculateCustomerTotals(orders) {
    const totals = {};

    for (let i = 0; i < orders.length; i++) {
        const order = orders[i];
        const customer = order.customer;

        if (Object.hasOwn(totals, customer)) {
            totals[customer] += order.amount;
        } else {
            totals[customer] = order.amount;
        }
    }

    return totals;
}

console.log(calculateCustomerTotals(orders));